const express = require('express')
const passport = require('passport')
const router = express.Router()
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const typeforce = require('typeforce-middleware')
const { User, Session } = require('../database')
const localAuth = passport.authenticate('local', { session: false })
const jwtAuth = passport.authenticate('jwt', { session: false })

// Authenticate a user
router.post('/authenticate', [ jsonParser, localAuth ], (req, res) => {
  const { authToken, id } = req.user // req.user is now the JWT provided by localAuth
  res.json({ authToken, id })
})

// Register a new user
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
    if (!newUser) return res.status(409).end() // email exists, return 409
    return res.status(201).end()
  }, (e, req, res) => {
    res.status(400).end()
  }
)

// Get all user training sessions
router.get('/users/:userId/sessions', [jwtAuth], async (req, res) => {
  const sessions = await User.sessions(req.params.userId)
  res.status(200).send({ sessions: sessions || [] })
})

// Get specific user training session
router.get('/users/:userId/sessions/:sessionId', [jwtAuth], async (req, res) => {
  const session = await Session.get(req.params.sessionId)
  if (!session) return res.status(404).end() // no session found, return 404
  res.status(200).send({ session: session || {} })
})

// Create a user training session
router.post('/users/:userId/sessions',
  [
    jwtAuth,
    jsonParser,
    typeforce({
      name: '?String'
    })
  ], async (req, res) => {
    const { name } = req.body
    const session = await Session.create(name, req.params.userId)
    if (!session) return res.send(500).end() // problem creating the session, send a 500
    res.status(200).send({ session: session })
  }, (e, req, res) => {
    res.status(400).end()
  }
)

module.exports = router
