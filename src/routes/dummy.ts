import express from 'express'
import { example, sampleUserList, sampleUserType } from '../lib/samples'

const router = express.Router()

const listTargetType = {
  user: sampleUserList,
  prod: example,
} as const
type SampleListObjectType = typeof listTargetType
const isTargetType = (value: string): value is keyof SampleListObjectType => {
  return (
    value !== undefined &&
    listTargetType[value as keyof SampleListObjectType] !== undefined
  )
}
export interface TestResponse {
  message: string
  data: sampleUserType[]
  success: boolean
  total: number
  _next: number
}

type GetList<T> = <K extends keyof T>(item: T, target: K) => T[K]
const getList: GetList<SampleListObjectType> = (item, target) => {
  return item[target]
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
  const dummyList: { id: number }[] = getList(listTargetType, target)
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
    })
    return
  }
  const dummyList: { id: number }[] = getList(listTargetType, target)

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
    data: {
      list: paged,
      count: filteredList.length,
      _next:
        limit === paged.length &&
        typeof nextCursor === 'number' &&
        filteredList[filteredList.length - 1].id !== nextCursor
          ? nextCursor
          : null,
    },
  })
})
export default router
