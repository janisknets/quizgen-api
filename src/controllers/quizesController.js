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
    if (!req.params.quizId) {
      throw new Error('Missing quizId')
    }
    const quiz =  await findQuiz(req.params.quizId)
    logger.debug(quiz)
    res.status(200).send(quiz)
  } catch (error) {
    logger.error(error)
    res.status(500).send(error.message)
  }
}

export const patchQuiz = async (req, res) => {
  try {
    if (!req.params.quizId) {
      throw new Error('Missing quizId')
    }
    await updateQuiz(req.params.quizId, req.body)
    const quiz = await findQuiz(req.params.quizId)
    res.status(200).send(quiz)
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
    logger.debug(req.user, req.body)
    const quiz = {
      ownerId: req.user._id,
      description: req.body.description,
      name: req.body.name
    }
    const result = await createQuiz(quiz)
    res.status(200).send(result)
  } catch (error) {
    logger.error(error)
    res.status(400).send(error.message)
  }
}
