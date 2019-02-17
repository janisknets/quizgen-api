import { findQuestions, createQuestion, updateQuestion, findQuestion, removeQuestion } from 'models/questionsModel.js'
import logger from 'helpers/logger'

export const getQuestions = async (req, res) => {
  try {
    const questions = await findQuestions()
    res.status(200).send(questions)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getQuestion = async (req, res) => {
  try {
    const question =  await findQuestion(req.params.questionId)
    res.status(200).send(question)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}

export const patchQuestion = async (req, res) => {
  try {
    const question = await updateQuestion(req.params.questionId, req.body)
    res.status(200).send(question)
  } catch (error) {
    logger.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const deleteQuestion = async (req, res) => {
  try {
    const result = await removeQuestion(req.params.questionId)
    res.status(200).send(result)
  } catch(error) {
    logger.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const postQuestion = async (req, res) => {
  try {
    logger.debug(req.body)
    const result = await createQuestion(req.body)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(400).send(error.message)
  }
}
