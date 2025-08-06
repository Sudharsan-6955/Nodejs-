// Request properties

const express = require("express")
const app = express()
const prop = express.Router()

app.use("/prop", prop)
// app.use(express.json())
prop.get("/", (req, res) => {
    console.log(req.baseUrl)
    console.log(req.path)
    console.log(req.hostname)
    console.log(req.ip)
    // console.log(req.protocol)
    // console.log(req.params)
    // console.log(req.cookies)
    // console.log(req.query)
    console.log(req.secure)
    // console.log(req.accepts)
    // console.log("req.send")
    res.send("HII")

})
//req properties

app.listen(3000, (req, res) => {
    console.log("Server_run_3000")
})

