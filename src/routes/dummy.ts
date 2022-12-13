import express from 'express'
import { sampleUserList, sampleUserType } from '../lib/samples'

const router = express.Router()

const listTargetType = {
  user: sampleUserList,
} as const

const isTargetType = (value: string): value is keyof typeof listTargetType => {
  return (
    value !== undefined &&
    listTargetType[value as keyof typeof listTargetType] !== undefined
  )
}
export interface TestResponse {
  message: string
  data: sampleUserType[]
  success: boolean
  total: number
  _next: number
}
router.get('/:type/:id', (req, res, next) => {
  const target = req.params.type
  const id = Number(req.params.id)
  if (!isTargetType(target)) {
    res.json({
      message: 'Not Found Api',
      success: false,
      data: null,
    })
    return
  }
  const dummyList = listTargetType[target]
  if (!dummyList.some((item) => item.id === id)) {
    res.json({
      message: 'Not Found Api',
      success: false,
      data: null,
    })
    return
  }
  res.json({
    message: 'success',
    success: false,
    data: dummyList.find((item) => item.id === id),
  })
})
router.get('/:type', (req, res, next) => {
  const target = req.params.type
  if (!isTargetType(target)) {
    res.json({
      message: 'Not Found Api',
      success: false,
      data: null,
      count: 0,
      _next: null,
    })
    return
  }
  const dummyList = listTargetType[target]

  const searchTerm = (req.query.search ?? '') as string
  const limit = Number(req.query.limit) ? Number(req.query.limit) : 12
  const cursor = Number(req.query.cursor) ? Number(req.query.cursor) : 0

  const filteredList = dummyList.filter((item) => {
    return JSON.stringify(Object.values(item).join(' ')).includes(searchTerm)
  })

  const cursorIndex = filteredList.findIndex((item) => item.id === cursor) ?? 0

  const paged =
    cursor < filteredList.length
      ? filteredList.slice(cursorIndex + 1, cursorIndex + limit + 1)
      : []

  let nextCursor = paged[paged.length - 1]?.id ?? null
  res.json({
    message: 'success',
    success: true,
    data: paged,
    count: filteredList.length,
    _next:
      limit === paged.length &&
      typeof nextCursor === 'number' &&
      filteredList[filteredList.length - 1].id !== nextCursor
        ? nextCursor
        : null,
  })
})
export default router
