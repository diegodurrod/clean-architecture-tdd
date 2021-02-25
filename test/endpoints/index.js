const getIdFromLocation = location =>
  location.split('/')[location.split('/').length - 1]

const getIdFromResponseLocationHeader = response =>
  getIdFromLocation(response.headers.location)

module.exports = {
  getIdFromResponseLocationHeader
}
