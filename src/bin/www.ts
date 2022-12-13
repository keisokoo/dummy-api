#!/usr/bin/env node
import md5 from 'md5'
import db from '../config/database'
import { example } from '../lib/samples'
let app = require('../app')
let debug = require('debug')('http')
let http = require('http')
let port = normalizePort(process.env.PORT || '4000')

function getIPAddress() {
  var interfaces = require('os').networkInterfaces()
  for (var devName in interfaces) {
    var iface = interfaces[devName]

    for (var i = 0; i < iface.length; i++) {
      var alias = iface[i]
      if (
        alias.family === 'IPv4' &&
        alias.address !== '127.0.0.1' &&
        !alias.internal
      )
        return alias.address
    }
  }
  return '0.0.0.0'
}

app.set('port', port)
let server = http.createServer(app)
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
function normalizePort(val: string) {
  let port = parseInt(val, 10)
  if (isNaN(port)) {
    return val
  }
  if (port >= 0) {
    return port
  }
  return false
}
function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }
  let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}
function onListening() {
  db.serialize(() => {
    db.run(`PRAGMA encoding="UTF-8"`)
    db.run(`PRAGMA foreign_keys = ON`)
    db.run(
      `CREATE TABLE user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name text,
      password text,
      UNIQUE(name)
    )`,
      (err) => {
        if (err) {
          console.log('user table is already created')
        } else {
          const insert = `INSERT INTO user (name, password) VALUES (?,?)`
          db.run(insert, [
            process.env.ADMIN ?? 'dev',
            md5((process.env.PASS as string) ?? '12341234'),
          ])
        }
      }
    )
    db.run(
      `
  CREATE TABLE post (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	code text NOT NULL,
	brand text NOT NULL,
	title text NOT NULL,
	article text NOT NULL,
	createdAt INTEGER NOT NULL,
	state text NOT NULL)`,
      (err) => {
        if (err) {
          console.log('post table is already created')
        } else {
          console.log('post table created')
          const insert = `INSERT INTO post (code,brand,title,article,state,createdAt) VALUES (?,?,?,?,?,?)`
          db.serialize(() => {
            db.run('begin transaction')
            for (let i = 0; i < example.length; i++) {
              db.run(
                insert,
                example[i].code.normalize('NFC'),
                example[i].brand.normalize('NFC'),
                example[i].title.normalize('NFC'),
                example[i].article.normalize('NFC'),
                example[i].state.normalize('NFC'),
                example[i].createdAt
              )
            }
            db.run('commit')
          })
        }
      }
    )
  })
  let addr = server.address()
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log('Running at ...')
  console.log('http://' + getIPAddress() + ':' + addr.port)
  console.log('http://localhost:' + addr.port)

  debug('Listening on ' + bind)
}
