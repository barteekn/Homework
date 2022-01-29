const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) =>{
  res.writeHead(200, {'content-type': 'text/html'})
  fs.createReadStream('index.html').pipe(res)
})

server.listen(process.env.127.0.0.1 || 5500)