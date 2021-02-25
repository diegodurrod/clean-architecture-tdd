const manageError = (error, res) => {
  if (error.errors !== undefined) {
    if (error.errors.name === 'NotFound') {
      return res.status(404).send({ error: error.errors })
    }
    return res.status(400).send({ error: error.errors })
  }
  if (error.statusCode === undefined) {
    console.error(error)
    return res.status(500).send(error)
  }
}

const checkModelNone = (model, res) => {
  if (model === null || model === undefined) {
    return Promise.reject(res.sendStatus(404))
  }
  return Promise.resolve(model)
}

module.exports = {
  manageError,
  checkModelNone
}
