const { expect } = require('chai')
const helloUseCase = require('../../../src/domain/hello/usecase.js')()

describe('Hello domain', () => {
  it('Should get a greet from the use case', () => {
    return helloUseCase.getGreeting()
      .then(greet => expect(greet).to.be.a('string'))
  })
})
