const mongoose = require('mongoose')

const checkMongoId = (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Promise.reject(createInvalidIdError())
  }
  return Promise.resolve(id)
}

const createInvalidIdError = () => {
  const invalidIdError = new Error('Invalid id')
  invalidIdError.errors = {
    id: {
      name: 'ValidatorError',
      kind: 'invalid',
      path: 'id'
    }
  }
  return invalidIdError
}

const removeMongooseElements = entity => {
  const newEntity = { ...entity }
  newEntity.id = newEntity._id.toString()

  delete newEntity._id
  delete newEntity.__v
  return newEntity
}

module.exports = {
  checkMongoId,
  removeMongooseElements
}
