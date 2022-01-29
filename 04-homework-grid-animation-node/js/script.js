const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, page) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(page);
    });
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.write("<h1>O nas</h1>");
    res.end();
  }
});

server.listen(5500, "127.0.0.1", () => console.log("Server Listen"));
