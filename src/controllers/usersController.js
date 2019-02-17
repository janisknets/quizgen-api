import { findUsers, createUser, updateUser, findUser, removeUser } from 'models/usersModel.js'
import logger from 'helpers/logger'

export const getUsers = async (req, res) => {
  try {
    const users = await findUsers(req.params)
    res.status(200).send(users)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getUser = async (req, res) => {
  try {
    const user =  await findUser(req.params.quizId)
    res.status(200).send(user)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}

export const getSelf = async (req, res) => {
  try {
    res.status(200).send(req.user)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}

export const patchUser = async (req, res) => {
  try {
    const user = await updateUser(req.params.quizId, req.body)
    res.status(200).send(user)
  } catch (error) {
    logger.error(error)
    res.status(500).send( error.message)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await removeUser(req.params.quizId)
    res.status(200).send(user)
  } catch(error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}
