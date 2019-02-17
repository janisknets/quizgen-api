import jwt from 'jsonwebtoken'

export const authMiddleware = async (req, res, next) => {
  try {
    const header = req.headers.authorization
    if (!header) {
      res.sendStatus(401)
      return
    }
    const token = header.split(' ').pop()
    if (!token) {
      res.sendStatus(401)
      return
    }


    const verified = jwt.verify(token, process.env.JWT_SECRET)
    if (!verified) {
      res.sendStatus(403)
      return
    }
    const decoded  = jwt.decode(token, process.env.JWT_SECRET)
    console.log(decoded)
    next(res, req)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}
