const express = require('express')
const app = express()
const io = require("socket.io")

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req,res)=> {
    res.send('hello world!')
})

server = app.listen(3000)

io.on('connection', (socket) => {
    console.log('New user connected!')
})