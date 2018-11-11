'use strict'
/* global describe it before after */
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const { runServer, closeServer, app } = require('../../server')

chai.use(chaiHttp)

const BASE_API_URL = '/gymmie'
const TEST_EMAIL = 'test@user.com'
const TEST_PASS = 'testpass'

describe('# Gymmie Router', function () {
  before(function () {
    return runServer()
  })

  after(function () {
    return closeServer()
  })

  describe('# /gymmie/authenticate', function () {
    it('should return a JWT token', function () {
      return chai.request(app)
        .post(`${BASE_API_URL}/authenticate`)
        .send({ email: TEST_EMAIL, password: TEST_PASS })
        .then(res => {
          expect(res.status).to.equal(200)
          expect(res.body).to.be.a('object')
          expect(res.body).to.have.keys(['authToken'])
        })
    })
    it('should return a http 400 error (bad request) if no email is provided', function () {
      return chai.request(app)
        .post(`${BASE_API_URL}/authenticate`)
        .send({ email: '', password: 'null' })
        .catch(res => {
          expect(res.status).to.equal(400)
        })
    })
    it('should return a http 401 if the credentials are incorrect', function () {
      return chai.request(app)
        .post(`${BASE_API_URL}/authenticate`)
        .send({ email: TEST_EMAIL, password: 'null' })
        .catch(res => {
          expect(res.status).to.equal(401)
        })
    })
  })
})
