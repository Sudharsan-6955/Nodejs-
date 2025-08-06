const express = require("express")
const app = express()
const fs = require("fs")
app.get("/", (req, res,next) => {
    // throw new Error("type error")
    fs.readFile("test.txt", (error, data) => {
        if (data) {
            res.send(data)
        }
        if (error) {
            next(error)
        }
    })
})
const errorMiddleware = (error, req, res, next) => {

    next(error.message)
    next(error.stack)
}
app.use(errorMiddleware)
app.listen(4000, () => {
    console.log("sever for error handling")
})