import express from 'express'
import { getRecords, postRecord, patchRecord, getRecord, deleteRecord } from 'controllers/recordsController'

const recordsRouter = express.Router();

recordsRouter.get('/', getRecords)
recordsRouter.post('/', postRecord)
recordsRouter.get('/:recordId', getRecord)
recordsRouter.patch('/:recordId', patchRecord)
recordsRouter.delete('/:recordId', deleteRecord)

export default recordsRouter
