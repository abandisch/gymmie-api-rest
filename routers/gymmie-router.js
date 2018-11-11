const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const config = require('../config')

const createAuthToken = function (gymGoer) {
  return jwt.sign({ gymGoer }, config.JWT_SECRET, {
    subject: gymGoer.email,
    expiresIn: config.JWT_EXPIRY,
    algorithm: 'HS256'
  })
}

const localAuth = passport.authenticate('local', { session: false })

router.post('/authenticate', [ jsonParser, localAuth ], (req, res) => {
  const authToken = createAuthToken(req.user)
  res.json({ authToken })
})

module.exports = router
