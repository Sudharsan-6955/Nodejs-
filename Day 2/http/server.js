const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Serve the HTML file
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Server error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  }

  // Handle /chai route
  else if (req.url === '/chai') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Elachi Chai from Server is Ready! ☕');
  }

  // Unknown route
  else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Teakadai open at http://localhost:3000');
});
