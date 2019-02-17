import jwt from 'jsonwebtoken'
import logger from 'helpers/logger'

export const authMiddleware = async (req, res, next) => {
  try {
    logger.debug('Auth middleware >>>>>>')
    const header = req.headers.authorization
    if (!header) {
      logger.debug('no header present')
      res.sendStatus(401)
      return
    }
    const token = header.split(' ').pop()
    if (!token) {
      logger.debug('no token present')
      res.sendStatus(401)
      return
    }


    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) {
      logger.debug('invalid JWT')
      res.sendStatus(403)
      return
    }
    const decoded  = jwt.decode(token, process.env.JWT_SECRET)
    req.user = decoded
    logger.debug(decoded)
    next()
  } catch (error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}
