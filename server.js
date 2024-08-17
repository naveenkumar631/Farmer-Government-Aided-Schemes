const http = require('http');
const path = require('path');
const fs = require('fs');

const port = 3000;
const directory = __dirname;

const server = http.createServer((req, res) => {
  let filePath = path.join(directory, req.url === '/' ? 'index.html' : req.url);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(port, () => {
  console.log(Server running at http://localhost:/);
});
