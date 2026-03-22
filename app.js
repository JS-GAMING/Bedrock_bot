const { createBot } = require('./bot/client')
const { startWeb } = require('./web/server')

createBot()
startWeb()