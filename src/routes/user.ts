import dayjs from 'dayjs'
import express from 'express'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import db from '../config/database'
import { authMiddleWare } from './middleware'
const router = express.Router()
router.post('/refresh', (req, res, next) => {
  try {
    const { refreshToken } = req.body
    let checkIsValid = jwt.verify(refreshToken, process.env.SALT ?? '더블디')
    if (checkIsValid) {
      const { username, id } = jwt.decode(refreshToken ?? '') as any
      const userInfo = { username, id }

      const token = jwt.sign(userInfo, process.env.SALT ?? '더블디', {
        expiresIn: '3m',
      })
      const rfToken = jwt.sign(userInfo, process.env.SALT ?? '더블디', {
        expiresIn: '360d',
      })
      res.json({
        message: 'success',
        token,
        refreshToken: rfToken,
        expiredIn: dayjs().add(3, 'minute').valueOf(),
      })
    } else {
      res
        .status(401)
        .json({ message: '유효하지 않은 토큰 값.', success: false })
      return
    }
  } catch (error: any) {
    res.status(401).json({ message: error?.message ?? 'error', success: false })
    return
  }
})
router.post('/login', (req, res, next) => {
  const { username, password } = req.body
  console.log(req.body)

  if (!username) {
    res.status(404).json({ message: '이름 입력 필요', success: false })
    return
  }
  if (!password) {
    res.status(404).json({ message: '암호 입력 필요', success: false })
    return
  }
  const sql = `select * from user where name = ?`
  const params = [username]
  db.get(sql, params, (err, result) => {
    if (err) {
      res.status(404).json({
        message: '일치하는 값이 없습니다.',
        error: err.message,
        success: false,
      })
      return
    }

    if (md5(password) !== result.password) {
      res
        .status(401)
        .json({ message: '일치하는 값이 없습니다.', success: false })
      return
    }
    const userInfo = { username: result.name, id: result.id }
    const token = jwt.sign(userInfo, process.env.SALT ?? '더블디', {
      expiresIn: '3m',
    })
    const rfToken = jwt.sign(userInfo, process.env.SALT ?? '더블디', {
      expiresIn: '360d',
    })
    res.json({
      message: 'success',
      data: {
        token,
        refreshToken: rfToken,
        expiredIn: dayjs().add(3, 'minute').valueOf(),
      },
      success: true,
    })
  })
})
router.get('/', authMiddleWare, (req, res, next) => {
  let sql = `select id, name from user where id=${req.headers.user_id}`
  let params: any[] = []
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ message: err.message })
      return
    }
    res.json({
      message: 'success',
      data: rows[0],
      success: true,
    })
  })
})
export default router
