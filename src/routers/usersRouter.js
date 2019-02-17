import express from 'express'
import { getUsers, postUser, patchUser, getUser, getSelf, deleteUser } from 'controllers/usersController'

const usersRouter = express.Router();

usersRouter.get('/', getUsers)
usersRouter.get('/self', getSelf)
usersRouter.get('/:userId', getUser)
usersRouter.patch('/:userId', patchUser)
usersRouter.delete('/:userId', deleteUser)

export default usersRouter
