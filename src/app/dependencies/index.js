const routers = require('../routers/index.js')
const helloUseCase = require('./usecases/hello.js')

module.exports = {
  helloRouter: routers.helloRouter({ helloUseCase })
}
