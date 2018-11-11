'use strict'

require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const passport = require('passport')
const cors = require('cors')

const app = express()

const { DATABASE_URL, PORT } = require('./config')
const { localStrategy, jwtStrategy } = require('./auth/strategies')

passport.use(localStrategy)
passport.use(jwtStrategy)

// Router
const gymmieRouter = require('./routers/gymmie-router')

// Logs
app.use(morgan('tiny'))

// Handle /gymmie API route, and allow all CORS requests
app.use('/gymmie', cors(), gymmieRouter)

// Start / Stop Server
let server
function runServer(port = PORT) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
      console.log(`\n  === App is listening on port ${port} ===\n`)
      resolve()
    })
    .on('error', err => {
      reject(err)
    })
  })
}

function closeServer() {
  console.log('\n  === Closing server ===\n')
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
}


if (require.main === module) {
  runServer(DATABASE_URL).catch(err => console.error(err))
}


module.exports = {app, runServer, closeServer}