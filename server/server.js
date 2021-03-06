const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

console.log(__dirname + '/../public')
console.log(publicPath)

app.use(express.static(publicPath))

io.on('connection', socket => {
  console.log('New user connected...')

  socket.on('disconnect', () => {
    console.log('Client has disconnectd')
  })
})

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
