const NOT_FOUND_CODE = 'NotFound'
const NOT_AVAILABLE_CODE = 'NotAvailable'

const checkEntityNone = (model, kind) => {
  if (model === null || model === undefined) {
    throw createEntityNoneError(kind)
  }
  return model
}

const createEntityNoneError = (entityName) => {
  const errorNone = new Error(`${entityName} none`)
  errorNone.errors = {
    name: NOT_FOUND_CODE,
    message: `${entityName} not found`,
    entity: entityName
  }
  return errorNone
}

const createCartNotValidError = () => {
  const errorNone = new Error('Some products are not available')
  errorNone.errors = {
    name: NOT_AVAILABLE_CODE,
    message: 'Some products are not available',
    entity: 'ShoppingCart'
  }
  return errorNone
}

module.exports = {
  checkEntityNone,
  createCartNotValidError,
  NOT_FOUND_CODE,
  NOT_AVAILABLE_CODE
}
