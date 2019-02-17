import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema
const UserSchema = new Schema({
  id: ObjectId,
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  dateOfBirth: {type: String, required: true},
  reHashedPassword: {type: String, required: true},
  level: { type: String }
}, {timestamp: true})

const UserModel = mongoose.model('user', UserSchema)

const findUsers = (query) => UserModel.find(query)
const findUser = (userId) => UserModel.findOne({id: userId})
const createUser = (payload) => new UserModel(payload).save()
const updateUser = (userId, payload) => UserModel.updateOne({id: userId}, payload)
const removeUser = (userId) => UserModel.remove({id: userId})
const findUserByUsername = (username) => UserModel.findOne({username: username}).lean()

export {
  findUser,
  findUsers,
  createUser,
  updateUser,
  removeUser,
  findUserByUsername
}
