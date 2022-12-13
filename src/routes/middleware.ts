import dayjs from 'dayjs'
import express, { NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export const authMiddleWare = (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization
    if (!token) {
      res.status(401).json({ message: '접근 권한 없음' })
      return
    }
    const decoded = jwt.decode(token ?? '') as any
    req.headers.user_id = decoded.id

    if (decoded && typeof decoded !== 'string' && decoded.exp) {
      if (dayjs().unix() > decoded.exp) {
        res.status(401).json({ message: '토큰 만료' })
        return
      }
      jwt.verify(token, process.env.SALT ?? '더블디', (err, decoded) => {
        if (err) {
          res.status(401).json({ message: '접근 권한 없음' })
          return
        }
        next()
      })
    } else {
      res.status(401).json({ message: '접근 권한 없음' })
      return
    }
  } catch (error) {}
}

export const termsMatchSplit = (terms: string, target: string) => {
  let result = terms
    .normalize('NFC')
    .split('+')
    .map((str) => {
      return {
        like: str
          .replace(/(-[^\s]+)/g, '')
          .split(/\s/g)
          .filter((ii) => ii),
        notLike: str.match(/(-[^\s]+)/g)?.map((str) => str.replace('-', '')),
      }
    })

  const resultQuery = result
    .map((or) => {
      let query = '('
      query += or.like.map((like) => `${target} LIKE '%${like}%'`).join(' AND ')
      query += or.notLike
        ? ' AND ' +
          or.notLike
            .map((notLike) => `${target} NOT LIKE '%${notLike}%'`)
            .join(' AND ')
        : ''
      query += ')'
      return query
    })
    .join(' OR ')
  return resultQuery
}
