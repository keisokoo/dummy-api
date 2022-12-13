import express from 'express'
import db from '../config/database'
import { authMiddleWare } from './middleware'
const validState = ['in-progress', 'done', 'waiting']
const isState = (value: string) => {
  return value !== undefined && validState.includes(value)
}
const router = express.Router()
router.delete('/:id', authMiddleWare, (req, res, next) => {
  const id = req.params.id
  const sqlGet = `SELECT id FROM post WHERE id=${id}`
  db.get(sqlGet, [], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message })
      return
    }
    if (!result) {
      res.status(400).json({ message: '유효하지 않은 id입니다.' })
      return
    }
    const insert = `DELETE FROM post WHERE id =${id}`
    db.run(insert, [], (err) => {
      if (err) {
        res.status(400).json({ message: err.message })
        return
      }
      res.json({
        message: 'success',
        data: id,
      })
    })
  })
})
router.patch('/:id', authMiddleWare, (req, res, next) => {
  const id = req.params.id
  const { state } = req.body

  if (!state) {
    res.status(400).json({ message: 'state값이 없습니다.' })
    return
  }
  if (!isState(state)) {
    res.status(400).json({ message: '유효한 state가 아닙니다.' })
    return
  }
  const sqlGet = `SELECT id FROM post WHERE id=${id}`
  db.get(sqlGet, [], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message })
      return
    }
    if (!result) {
      res.status(400).json({ message: '유효하지 않은 id입니다.' })
      return
    }
    const insert = `update post set state = '${state}' where id = ${id}`
    db.run(insert, [], (updateError) => {
      if (updateError) {
        res.status(400).json({ message: updateError.message })
        return
      }
      res.json({
        message: 'success',
        data: id,
      })
    })
  })
})
router.get('/:post_id', (req, res, next) => {
  let sql = 'select * from post where id =?'
  db.get(sql, [req.params.post_id], (err, result) => {
    if (err) {
      res.status(400).json({ message: err.message })
      return
    }
    res.json({
      message: 'success',
      data: result,
      success: true,
    })
  })
})
router.get('/', (req, res, next) => {
  const limit =
    req.query.limit &&
    Number(req.query.limit) > 0 &&
    !isNaN(Number(req.query.limit))
      ? Number(req.query.limit)
      : 12
  const search = req.query.search
    ? `(title LIKE '%${req.query.search}%' OR brand LIKE '%${req.query.search}%' OR code LIKE '%${req.query.search}%')`
    : ''
  let filter = req.query.filter ? `state LIKE '%${req.query.filter}%'` : ``
  if (search)
    filter = req.query.filter ? filter + ` AND ${search}` : `${search}`
  let sqlGetCountWithLastItem = `select *,(SELECT count(*) from post ${
    filter ? `where ` : ''
  }${filter}) as post_count from post ${filter ? `where ` : ''}${filter}${
    filter ? ' AND ' : ' where '
  }id = (SELECT MAX(id) FROM post ${filter ? `where ` : ''}${filter})`

  const cursor = req.query.cursor ? Number(req.query.cursor) : 0
  let cursorQuery = cursor ? `${filter ? `AND ` : ''}id > ${cursor}` : ''
  db.get(sqlGetCountWithLastItem, [], (err, result) => {
    if (err) {
      res
        .status(400)
        .json({ message: err ? err.message : 'Not Found.', success: false })
      return
    }
    console.log('result', result)

    if (!result) {
      res.json({
        message: 'success',
        data: [],
        success: true,
        total: 0,
        _next: null,
      })
      return
    }
    let count = result.post_count
    let sql = `select id,code,title,brand,state,createdAt from post ${
      filter || cursorQuery ? `where ` : ''
    }${filter}${cursorQuery} ORDER BY id ASC LIMIT ${limit}`

    db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(400).json({ message: err.message, success: false })
        return
      }
      let nextCursor = rows[rows.length - 1]?.id ?? null
      setTimeout(() => {
        res.json({
          message: 'success',
          data: rows,
          success: true,
          total: count,
          _next:
            limit === rows.length &&
            typeof nextCursor === 'number' &&
            result.id !== nextCursor
              ? nextCursor
              : null,
        })
      }, 300)
    })
  })
})
export default router
