function startActions(client, username) {

  // Anti-AFK movement (basic)
  setInterval(() => {
    try {
      client.queue('player_action', {
        action: 'start_sprint'
      })
    } catch {}
  }, 5000)

  // Chat system
  setInterval(() => {
    try {
      const msgs = ['hi', 'still here', 'ok', '...']
      const msg = msgs[Math.floor(Math.random() * msgs.length)]

      client.queue('text', {
        type: 'chat',
        needs_translation: false,
        source_name: username,
        message: msg
      })
    } catch {}
  }, 60000)
}

module.exports = { startActions }