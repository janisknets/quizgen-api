import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema
const QuestionSchema = new Schema({
  id: ObjectId,
  type: { type: String, enum: ['checkbox', 'input', 'radio'], required: true },
  question: { type: String, required: true },
  answers: { type: Array },
  correct: { type: Array },
  complexity: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  area: { type: String, enum: ['js', 'node', 'react'], required: true },
}, {timestamp: true})

const QuestionModel = mongoose.model('question', QuestionSchema)

const findQuestions = (query) => QuestionModel.find(query)
const findQuestion = (questionId) => QuestionModel.findOne({id: questionId})
const createQuestion = (payload) => new QuestionModel(payload).save()
const updateQuestion = (questionId, payload) => QuestionModel.updateOne({id: questionId}, payload)
const removeQuestion = (questionId) => QuestionModel.remove({id: questionId})

export {
  findQuestion,
  findQuestions,
  createQuestion,
  updateQuestion,
  removeQuestion
}
