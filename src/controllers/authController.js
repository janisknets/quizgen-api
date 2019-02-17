import jwt from 'jsonwebtoken'
import SHA256 from 'crypto-js/sha256'
import { createUser, findUserByUsername } from 'models/usersModel'
import logger from 'helpers/logger'

export const login = async (req, res) => {
  try {
    const reHashedPassword = SHA256(req.body.hashedPassword, process.env.SALT).toString()
    const user = await findUserByUsername(req.body.username)
    if (!user || user.reHashedPassword.toString() !== reHashedPassword.toString()) {
      logger.error("No user or passwords didn't match")
      logger.error(`${user && user.reHashedPassword}`)
      logger.error(`${reHashedPassword}`)
      res.sendStatus(401)
      return
    }

    logger.debug(`All Ok, user ${user.username} authenticated\n${user}`)
    delete user.reHashedPassword
    delete user.__v
    res.status(200).send({
      token: jwt.sign({ ...user }, process.env.JWT_SECRET)
    })
  } catch (error) {
    logger.error(error)
    res.status(500).send({
      error: error.message,
      user: user,
      reHashedPassword: reHashedPassword
    })
  }
}

export const register = async (req, res) => {
  try {
    if (!req.body) {
      throw new Error('No data to process')
    }
    let userBody = { ...req.body }
    userBody.reHashedPassword = SHA256(userBody.hashedPassword, process.env.SALT).toString()
    delete userBody.hashedPassword
    const user = await createUser(userBody)
    res.status(200).send(user)
  } catch (error) {
    logger.error(error)
    res.status(400).send(error.message)
  }
}
