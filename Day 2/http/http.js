const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Welco  me</h1>');

    } else if (req.url === '/hii') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hello');
    } else if (req.url === '/hello') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('bye');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' }); // 404 not found
        res.end('okay go /');
    }
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
});
