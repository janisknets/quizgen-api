import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

import defaultRouter from './routers/defaultRouter'
import questionsRouter from './routers/questionsRouter'
import quizesRouter from './routers/quizesRouter'
import recordsRouter from './routers/recordsRouter'
import resultsRouter from './routers/resultsRouter'
import usersRouter from './routers/usersRouter'
import authRouter from './routers/authRouter'
import { authMiddleware } from './middleware/authentication'

import logger from 'helpers/logger'


dotenv.config()
mongoose.connect(process.env.DBURL, { useNewUrlParser: true })

const port = process.env.PORT
const host = process.env.HOST

const app = express()

// app.all('/*', function (req, res, next) {
//   next() // pass control to the next handler
// });

app.use(cors())
app.use(express.json())
app.use('/questions', authMiddleware, questionsRouter);
app.use('/quizes', authMiddleware, quizesRouter);
app.use('/records', authMiddleware, recordsRouter);
app.use('/results', authMiddleware, resultsRouter);
app.use('/users', authMiddleware, usersRouter);
app.use('/auth', authRouter);
app.use('/*', defaultRouter);

app.listen(port, host, () => logger.info(`Example app listening on port ${host}:${port}!`))
