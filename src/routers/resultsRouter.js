import express from 'express'
import { getResults, postResult, patchResult, getResult, deleteResult } from 'controllers/resultsController'

const resultsRouter = express.Router();

resultsRouter.get('/', getResults)
resultsRouter.post('/', postResult)
resultsRouter.get('/:resultId', getResult)
resultsRouter.patch('/:resultId', patchResult)
resultsRouter.delete('/:resultId', deleteResult)

export default resultsRouter
