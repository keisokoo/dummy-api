import cors from 'cors'
import dotenv from 'dotenv'
import express, { NextFunction, Request, Response } from 'express'
import createError from 'http-errors'
import logger from 'morgan'
import dummyRouter from './routes/dummy'
import indexRouter from './routes/index'
import postRouter from './routes/post'
import userRouter from './routes/user'
dotenv.config()
interface GlobalError extends Error {
  status?: number
}
var app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/dummy', dummyRouter)
app.use('/', indexRouter)
app.use(function (req, res, next) {
  res.set({ 'content-type': 'application/json; charset=utf-8' })
  next(createError(404))
})
app.use((err: GlobalError, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.send(err)
})
module.exports = app
