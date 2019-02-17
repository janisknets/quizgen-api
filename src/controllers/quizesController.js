import { findQuizes, createQuiz, updateQuiz, findQuiz, removeQuiz } from 'models/quizesModel.js'
import logger from 'helpers/logger'

export const getQuizes = async (req, res) => {
  try {
    const Quizs = await findQuizes()
    res.status(200).send(Quizs)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getQuiz = async (req, res) => {
  try {
    const Quiz =  await findQuiz(req.params.quizId)
    res.status(200).send(Quiz)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}

export const patchQuiz = async (req, res) => {
  try {
    const Quiz = await updateQuiz(req.params.quizId, req.body)
    res.status(200).send(Quiz)
  } catch (error) {
    logger.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const deleteQuiz = async (req, res) => {
  try {
    const result = await removeQuiz(req.params.quizId)
    res.status(200).send(result)
  } catch(error) {
    logger.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const postQuiz = async (req, res) => {
  try {
    logger.log(req.body)
    const result = await createQuiz(req.body)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(400).send(error.message)
  }
}
