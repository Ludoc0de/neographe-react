// const express = require('express')

// const PORT = process.env.PORT || 3001

// const app = express()

// app.listen(PORT, () => {
//     console.log('lets see on port $(PORT)')
// })

const http = require('http')

const server = http.createServer((req, res)=>{
    res.end('une autre fois, so so ?!')
})

server.listen(process.env.PORT || 3001)
