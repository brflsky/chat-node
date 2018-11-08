const path = require('path')
const express = require('express')

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, '../public')

const app = express()

console.log(__dirname + '/../public')
console.log(publicPath)

app.use(express.static(publicPath))

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})