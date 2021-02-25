const dbHandler = require('./db-handler.js')

const manageInMemoryDatabase = () => {
  before(() => dbHandler.connect())

  afterEach(() => dbHandler.clearDatabase())

  after(() => dbHandler.closeDatabase())
}

module.exports = {
  manageInMemoryDatabase
}
