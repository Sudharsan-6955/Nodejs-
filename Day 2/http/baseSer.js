// | Method                | Simple Meaning (Tanglish Style)                                                                                  |
// | --------------------- | ---------------------------------------------------------------------------------------------------------------- |
// | `http.createServer()` | Server open panradhu. Namma kadai ready aaguthu for customer requests.                                           |
// | `req`                 | **Customer request** object. Enna pathu kekkuraanga-nu details (URL, method, etc).                               |
// | `res.write()`         | Customer-ku **response message** send panradhu (example: "Here is your chai!").                                  |
// | `res.end()`           | Final-a message mudichu **send panna** use panradhu. Ithu illa-na server wait pannum.                            |
// | `res.writeHead()`     | **Status code** (like 200 OK, 404 Not Found) + message type (like `text/html`, `application/json`) set panradhu. |
// | `server.listen(port)` | Kadai enga irukku-nu sollradhu. Port number kuduthu **"unga kadai open here!"** nu sollradhu.                    |






const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Vanakkam da mapla! Server working!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// const http = require('http')

// const server = http.createServer((req,res)=>
// {
//   res.write(
//     'hii da pulla'
//   )
//   res.end()
// })

// server.listen(3000,()=>

// {
//   console.log('http://loalhost:3000')
// })



