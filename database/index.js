const bcrypt = require('bcrypt')
const { prisma } = require('./generated/prisma-client')

const _db = {
  // db functions
  User: {
    byEmail: (email) => prisma.user({ email }),
    create: (name, email, password) => prisma.createUser({ name, email, password })
  }
}

const User = {
  // actions
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

module.exports = { User }
