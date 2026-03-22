module.exports = {
  server: {
    host: process.env.SERVER_HOST,
    port: parseInt(process.env.SERVER_PORT),
    username: process.env.BOT_NAME || 'AFK_Bot'
  },
  web: {
    port: process.env.PORT || 3000
  }
}