import express from 'express'
import { getQuestions, postQuestion, patchQuestion, getQuestion, deleteQuestion } from 'controllers/questionsController'

const questionsRouter = express.Router();

questionsRouter.get('/', getQuestions)
questionsRouter.post('/', postQuestion)
questionsRouter.get('/:questionId', getQuestion)
questionsRouter.patch('/:questionId', patchQuestion)
questionsRouter.delete('/:questionId', deleteQuestion)

export default questionsRouter
