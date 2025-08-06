//sub route

const express = require("express")
const app = express()

const student = express.Router()
const admin = express.Router()
app.use("/admin",admin)
app.use("/student",student)

student.get("/",(req,res)=>
{
    console.log(req.baseUrl) //            /student
    console.log(req.originalUrl) //        /student
    console.log(req.path) //               /
    res.send("student home")
})
admin.get("/",(req,res)=>
{
    res.send("admin home")
})
app.get("/",(req,res)=>
{
    res.send("my home")
})

app.listen(3000,()=>
console.log("hello everyone")
)