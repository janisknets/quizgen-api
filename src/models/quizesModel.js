import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema
const QuizSchema = new Schema({
  id: ObjectId,
  ownerId: { type: String, required: true },
  name: { type: String, required: true },
  questions: [String]
}, {timestamp: true})

const QuizModel = mongoose.model('quizes', QuizSchema)

const findQuizes = (query) => QuizModel.find(query)
const findQuiz = (quizId) => QuizModel.findOne({id: quizId})
const createQuiz = (payload) => new QuizModel(payload).save()
const updateQuiz = (quizId, payload) => QuizModel.updateOne({id: quizId}, payload)
const removeQuiz = (quizId) => QuizModel.remove({id: quizId})

export {
  findQuiz,
  findQuizes,
  createQuiz,
  updateQuiz,
  removeQuiz
}
