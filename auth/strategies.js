'use strict'
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const jwt = require('jsonwebtoken')
const { User } = require('../database')
const { JWT_SECRET, JWT_EXPIRY } = require('../config')

const createAuthToken = function (user) {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.email,
    expiresIn: JWT_EXPIRY,
    algorithm: 'HS256'
  })
}

const localStrategy = new LocalStrategy({ usernameField: 'email' }, async (email, password, callback) => {
  const user = await User.authenticate(email, password)
  if (!user) return callback(null, false)
  return callback(null, createAuthToken(user))
})

const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    algorithms: ['HS256']
  },
  (payload, done) => {
    done(null, payload.gymGoer)
  }
)

module.exports = { localStrategy, jwtStrategy }
