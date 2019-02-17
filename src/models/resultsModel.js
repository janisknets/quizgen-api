import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema
const ResultSchema = new Schema({
  id: ObjectId,
  userId: { type: String, required: true },
  quizId: { type: String, required: true },
  resultIds: [String]
}, {timestamp: true})

const ResultModel = mongoose.model('result', ResultSchema)

const findResults = (query) => ResultModel.find(query)
const findResult = (resultId) => ResultModel.findOne({id: resultId})
const createResult = (payload) => new ResultModel(payload).save()
const updateResult = (resultId, payload) => ResultModel.updateOne({id: resultId}, payload)
const removeResult = (resultId) => ResultModel.remove({id: resultId})

export {
  findResult,
  findResults,
  createResult,
  updateResult,
  removeResult
}
