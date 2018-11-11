const { USERS, USER_PASSWORDS } = require('./data/users')

const User = {
  findById: (userId) => USERS.find(u => u.id === userId),
  findByEmail: (email) => USERS.find(u => u.email === email)
}

const UserPasswords = {
  validate: (userId, password) => {
    const uPw = USER_PASSWORDS.find(u => u.userId === userId)
    if (!uPw) return false
    return uPw.password === password
  }
}

module.exports = { User, UserPasswords }
