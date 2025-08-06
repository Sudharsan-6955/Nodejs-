//cookies

const express = require("express")
const cookieParser = require("cookie-parser")

const app = express()
app.use(cookieParser())

app.get ("/" , (req,res)=>
{
    // const {Email_1} = req.cookies // npm i cookie-parser
    // console.log(Email_1)
    res.cookie("name","sudhar")
    res.cookie("hello","hii")
    res.cookie("Dept","CSE")
    res.clearCookie("Dept")
    res.send("hiiiii")
})

app.listen(6969,()=>
{
    console.log("hii")
})