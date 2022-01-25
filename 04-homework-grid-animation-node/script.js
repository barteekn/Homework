const http = require('http');
const fs = require('fs');
const path = require('path');
 
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
      res.end(page)
    })
  }
 
  if (req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>TEST SERWERA NODE-JS</h1>');
    res.end();
  }
});
 
server.listen(5000, '127.0.0.1', () => console.log('Server Listen'));