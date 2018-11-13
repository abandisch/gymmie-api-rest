const bcrypt = require('bcrypt')
const { prisma } = require('./generated/prisma-client')

const _db = {
  // db functions
  User: {
    byId: (id) => prisma.user({ id }),
    byEmail: (email) => prisma.user({ email }),
    create: (name, email, password) => prisma.createUser({ name, email, password })
  },
  Session: {
    byId: (id) => prisma.session({ id }),
    create: (name, userId) => prisma.createSession(
      {
        name,
        user: {
          connect: {
            id: userId
          }
        }
      })
  }
}

const User = {
  // actions
  sessions: (id) => _db.User.byId(id).sessions(),
  register: async (name, email, plainPassword) => {
    try {
      const cryptPassword = await bcrypt.hash(plainPassword, 10)
      return await _db.User.create(name, email, cryptPassword)
    } catch (e) {
      return false
    }
  },
  authenticate: async (userEmail, password) => {
    try {
      const user = await _db.User.byEmail(userEmail)
      if (!user) return false
      const valid = await bcrypt.compare(password, user.password)
      if (!valid) return false
      const { id, name, email } = user
      return { id, name, email }
    } catch (e) {
      return false
    }
  }
}

const Session = {
  get: (sessionId) => _db.Session.byId(sessionId),
  create: async (name, userId) => {
    try {
      return await _db.Session.create(name, userId)
    } catch (e) {
      return false
    }
  }
}

module.exports = { User, Session }
