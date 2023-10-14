const path = require('path')
const serveStatic = require('serve-static')

module.exports = function (app) {
  const assetsPath = path.join(__dirname, 'test-data')
  const pathToServe = '/data'
    app.use(pathToServe, serveStatic(assetsPath));
}