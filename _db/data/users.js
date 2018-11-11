const USERS = [
  {
    id: 'user123',
    name: 'Test User',
    email: 'test@user.com'
  }
]

const USER_PASSWORDS = [
  {
    userId: USERS[0].id,
    password: 'testpass'
  }
]

module.exports = { USERS, USER_PASSWORDS }
