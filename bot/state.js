let status = "Offline"
let startTime = null
let playtime = 0

function setStatus(s) {
  status = s
}

function startSession() {
  startTime = Date.now()
}

function endSession() {
  if (startTime) {
    playtime += Date.now() - startTime
    startTime = null
  }
}

function getState() {
  let current = playtime
  if (status === "Online" && startTime) {
    current += Date.now() - startTime
  }

  return { status, playtime: current }
}

module.exports = { setStatus, startSession, endSession, getState }