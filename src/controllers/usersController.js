import { findUsers, createUser, updateUser, findUser, removeUser } from 'models/usersModel.js'

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
    console.error(error)
    res.status(500).send(error.message)
  }
}

export const getSelf = async (req, res) => res.status(200).send(req.user)

export const patchUser = async (req, res) => {
  try {
    const user = await updateUser(req.params.quizId, req.body)
    res.status(200).send(user)
  } catch (error) {
    console.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await removeUser(req.params.quizId)
    res.status(200).send(user)
  } catch(error) {
    console.error(error)
    res.status(500).send(new Error(error.message))
  }
}
