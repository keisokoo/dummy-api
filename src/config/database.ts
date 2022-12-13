import fs, { existsSync } from 'fs'
import path from 'path'
import sqlite3 from 'sqlite3'

const dbPath = path.join(__dirname, '../../db/my.db')

if (!existsSync(dbPath)) {
  fs.promises.mkdir(path.join(__dirname, '../../db/'), { recursive: true })
  fs.writeFileSync(dbPath, '')
}

let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log('connected sample db')
  }
})

export default db
