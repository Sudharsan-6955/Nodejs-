const express = require("express")
const app = express()
app.get("/test", (req, res) => {
    res.send("hii")
})

app.get("/html", (req, res) => {
    res.send("<h1>ENA MACHANNNN</h1>")
})


app.get("/", (req, res) => {
    // res.location("/res.header la show agum")
    // res.send("hello mam")
    // res.send()
    // res.set("hii","hello") //showing response header
    // //if you want to identify the header value you follow this 
    // const hii = res.get("hii")
    // console.log(hii)
    res.end()
    // res.json({
    //     name:"sudharadha",
    //     age:2030,
    // })
    // res.redirect("/test")
})
app.listen(4000, () => {
    console.log("server potachu")
}
)