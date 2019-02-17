import { findRecords, createRecord, updateRecord, findRecord, removeRecord } from 'models/recordsModel.js'
import logger from 'helpers/logger'

export const getRecords = async (req, res) => {
  try {
    const records = await findRecords(req.params)
    res.status(200).send(records)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getRecord = async (req, res) => {
  try {
    const record =  await findRecord(req.params.quizId)
    res.status(200).send(record)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}

export const patchRecord = async (req, res) => {
  try {
    const record = await updateRecord(req.params.quizId, req.body)
    res.status(200).send(record)
  } catch (error) {
    logger.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const deleteRecord = async (req, res) => {
  try {
    const record = await removeRecord(req.params.quizId)
    res.status(200).send(record)
  } catch(error) {
    logger.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const postRecord = async (req, res) => {
  try {
    logger.log(req.body)
    const record = await createRecord(req.body)
    res.status(200).send(record)
  } catch (error) {
    logger.error(error)
    res.status(400).send(error.message)
  }
}
