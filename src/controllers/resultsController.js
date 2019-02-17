import { findResults, createResult, updateResult, findResult, removeResult } from 'models/resultsModel.js'

export const getResults = async (req, res) => {
  try {
    const Results = await findResults()
    res.status(200).send(Results)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export const getResult = async (req, res) => {
  try {
    const Result =  await findResult(req.params.quizId)
    res.status(200).send(Result)
  } catch (error) {
    console.error(error)
    res.status(500).send(error.message)
  }
}

export const patchResult = async (req, res) => {
  try {
    const Result = await updateResult(req.params.quizId, req.body)
    res.status(200).send(Result)
  } catch (error) {
    console.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const deleteResult = async (req, res) => {
  try {
    const result = await removeResult(req.params.quizId)
    res.status(200).send(result)
  } catch(error) {
    console.error(error)
    res.status(500).send(new Error(error.message))
  }
}

export const postResult = async (req, res) => {
  try {
    console.log(req.body)
    const result = await createResult(req.body)
    res.status(200).send(result)
  } catch (error) {
    console.error(error)
    res.status(400).send(error.message)
  }
}
