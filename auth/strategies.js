'use strict'
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')
const { JWT_SECRET } = require('../config')

const { User, UserPasswords } = require('../_db')

const localStrategy = new LocalStrategy({ usernameField: 'email' }, (email, password, callback) => {
  const user = User.findByEmail(email)
  if (!user) return callback(null, false)
  if (!UserPasswords.validate(user.id, password)) return callback(null, false)

  return callback(null, user)
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
