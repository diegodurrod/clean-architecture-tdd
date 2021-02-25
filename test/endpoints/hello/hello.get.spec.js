const request = require('supertest')
const createApp = require('../../../src/app/index.js')
const appDependencies = require('../../../src/app/dependencies/index.js')
const { expect } = require('chai')
const { HELLO_URI } = require('../../../src/app/endpoints/constants.js')

const app = createApp(appDependencies)

describe('Endpoints for Greetings', () => {
  describe(`GET ${HELLO_URI}`, () => {
    it('Given book created, should be able to retrieve it by id', async () => {
      const responseGetGreeting = await request(app)
        .get(HELLO_URI)

      expect(responseGetGreeting.status).to.be.equal(200)
      expect(responseGetGreeting.body.data).to.be.equal('Hello World!')
    })
  })
})
