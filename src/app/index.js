const express = require('express')

module.exports = (routers) => {
  const app = express()
  app.use(express.json())
  app.disable('x-powered-by')

  app.use(routers.helloRouter)
  return app
}
