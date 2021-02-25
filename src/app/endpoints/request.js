const url = require('url')

const getFullUrl = (req) => {
  const fullUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  })

  return fullUrl + (fullUrl.endsWith('/') ? '' : '/')
}

module.exports = {
  getFullUrl
}
