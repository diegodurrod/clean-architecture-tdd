const express = require('express')
const { HELLO_URI } = require('../endpoints/constants.js')
const { hello } = require('../endpoints/index.js')

module.exports = (useCases) => {
  const router = new express.Router()
  const helloHandler = hello(useCases)

  router.get(HELLO_URI, helloHandler.get)

  return router
}
