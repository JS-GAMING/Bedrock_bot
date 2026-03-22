const express = require('express')
const config = require('../config')
const { getState } = require('../bot/state')
const { formatTime } = require('./utils')

function startWeb() {
  const app = express()

  app.get('/', (req, res) => {
    const data = getState()

    res.send(`
      <html>
        <body style="background:#0f172a;color:white;text-align:center;padding-top:50px;">
          <h1>🤖 Bedrock Bot</h1>
          <p>IP: ${config.server.host}</p>
          <p>Port: ${config.server.port}</p>
          <p>Status: ${data.status}</p>
          <p>Playtime: ${formatTime(data.playtime)}</p>
        </body>
      </html>
    `)
  })

  app.listen(config.web.port, () => {
    console.log(`🌐 Web running on ${config.web.port}`)
  })
}

module.exports = { startWeb }