const express = require("express")
const app = express()

app.get("/", (req, res) => {
    // res.status(403) //change the num and check error details
    res.status(400).json({hii:"hello"})
    res.send("send ayuruchu")
})

app.listen(3000, () => {
    console.log("walkin server")
})



//info response - 100 to 199
//sucssfull res - 200 to 299
//redirctin msg - 300 to 399
//clientErr res - 400 to 499
//serverErr res - 400 to 499

// HTTP status codes are categorized into five classes based on their first digit:
// 1xx Informational:
// The request was received, and the process is continuing.Examples include 100 Continue and 101 Switching Protocols.
// 2xx Success:
// The action requested by the client was successfully received, understood, and accepted.Examples include 200 OK, 201 Created, and 204 No Content.
// 3xx Redirection:
// Further action needs to be taken by the client to complete the request.Examples include 301 Moved Permanently, 302 Found, and 304 Not Modified.
// 4xx Client Error:
// The request contains bad syntax or cannot be fulfilled due to a client - side issue.Examples include 400 Bad Request, 401 Unauthorized, 403 Forbidden, and 404 Not Found. 
// 5xx Server Error:
// The server failed to fulfill an apparently valid request due to a server - side issue.Examples include 500 Internal Server Error, 503 Service Unavailable, and 504 Gateway Timeout.
// These codes are crucial for understanding and troubleshooting web interactions, allowing both clients and servers to respond appropriately to different scenarios.