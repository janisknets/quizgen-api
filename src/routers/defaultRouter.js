import express from 'express'
import defaultController from '../controllers/defaultController'

const router = express.Router();

router.use('/*', defaultController)

export default router
