function startActions(client, username) {

  // Fake movement (anti-AFK)
  setInterval(() => {
    client.queue('player_action', {
      action: 'start_sprint'
    })
  }, 5000)

  // Chat system
  setInterval(() => {
    const msgs = ['hi', 'still here', 'lol', 'ok']
    const msg = msgs[Math.floor(Math.random() * msgs.length)]

    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: username,
      message: msg
    })
  }, 60000)
}

module.exports = { startActions }