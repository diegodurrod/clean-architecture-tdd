const createApp = require('./src/app/index.js')
const { connect } = require('./src/infraestructure/db/mongoose.js')
const appDependencies = require('./src/app/dependencies/index.js')

connect('mongodb://localhost:27017/ecommerce')
  .then(connection => {
    const app = createApp(appDependencies)
    app.listen(3000, () => console.log('Serving in port 3000'))
  })
  .catch(error => console.log(error))
