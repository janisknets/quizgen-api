import express from 'express'
import { getQuizes, postQuiz, patchQuiz, getQuiz, deleteQuiz } from 'controllers/quizesController'

const quizesRouter = express.Router();

quizesRouter.get('/', getQuizes)
quizesRouter.post('/', postQuiz)
quizesRouter.get('/:quizId', getQuiz)
quizesRouter.patch('/:quizId', patchQuiz)
quizesRouter.delete('/:quizId', deleteQuiz)

export default quizesRouter
