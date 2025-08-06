const express = require("express")
const app = express()
app.use(express.json())
app.get("/", (req, res) => {
    res.send("My file")
})
app.post("/:id",(req,res)=>
{
    let userName = req.params
    res.send(userName)
}
)
app.listen(6969, () =>{
    console.log("my server is 6969")
})