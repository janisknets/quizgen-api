import mongoose, { Schema } from 'mongoose'

const { ObjectId } = Schema
const RecordSchema = new Schema({
  id: ObjectId,
  questionId: { type: String, required: true },
  answers: [Number]
}, {timestamp: true})

const RecordModel = mongoose.model('record', RecordSchema)

const findRecords = (query) => RecordModel.find(query)
const findRecord = (recordId) => RecordModel.findOne({id: recordId})
const createRecord = (payload) => new RecordModel(payload).save()
const updateRecord = (recordId, payload) => RecordModel.updateOne({id: recordId}, payload)
const removeRecord = (recordId) => RecordModel.remove({id: recordId})

export {
  findRecord,
  findRecords,
  createRecord,
  updateRecord,
  removeRecord
}
