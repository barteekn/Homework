const http = require('http');
 
const server = http.createServer((req, res) => {
  if (req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>Test serwera nodejs</h1>');
    res.end();
  }
  
});
 
server.listen(5000, '127.0.0.1', () => console.log('Server Listen'));