const express = require('express')
const passport = require('passport')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const typeforce = require('typeforce-middleware')
const { User } = require('../database')
const localAuth = passport.authenticate('local', { session: false })

router.post('/authenticate', [ jsonParser, localAuth ], (req, res) => {
  res.json({ authToken: req.user }) // req.user is now the JWT provided by localAuth
})

router.post('/users',
  [
    jsonParser,
    typeforce({
      email: 'String',
      password: 'String',
      name: 'String'
    })
  ], async (req, res) => {
    const { name, email, password } = req.body
    const newUser = await User.register(name, email, password)
    if (!newUser) return res.status(409).end()
    return res.status(201).end()
  }, (e, req, res) => {
    res.status(400).end()
  })

module.exports = router
