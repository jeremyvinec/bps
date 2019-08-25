const routes = module.exports = require('next-routes')()

module.exports = routes()
.add({name: 'bps', pattern: '/', page: 'bps'})