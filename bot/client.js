const bedrock = require('bedrock-protocol')
const config = require('../config')
const { setStatus, startSession, endSession } = require('./state')
const { startActions } = require('./actions')

function createBot() {
  setStatus("Connecting")

  const client = bedrock.createClient({
    host: config.server.host,
    port: config.server.port,
    username: config.server.username
  })

  client.on('join', () => {
    console.log('✅ Joined server')
    setStatus("Online")
    startSession()

    startActions(client, config.server.username)
  })

  client.on('disconnect', () => {
    console.log('❌ Disconnected')
    setStatus("Reconnecting")
    endSession()

    setTimeout(createBot, 5000)
  })

  client.on('error', err => {
    console.log('Error:', err)
  })
}

module.exports = { createBot }