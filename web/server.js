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
          <h1>🤖 Bedrock Bot Dashboard</h1>
          <p><b>IP:</b> ${config.server.host}</p>
          <p><b>Port:</b> ${config.server.port}</p>
          <p><b>Status:</b> ${data.status}</p>
          <p><b>Playtime:</b> ${formatTime(data.playtime)}</p>
        </body>
      </html>
    `)
  })

  app.listen(config.web.port, () => {
    console.log(`🌐 Web running on port ${config.web.port}`)
  })
}

module.exports = { startWeb }