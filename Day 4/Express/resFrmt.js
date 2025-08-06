const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.format({
        "text/plain": () => {
            res.send("text file")
        },
        "application/json": () => {
            res.json({ name: "sudharsa", student: "CSE" })
        },
        // "text.html":()=>
        // {
        //     res.render("pages/home.ejs")
        // },
        default:()=>
        {
            res.send("Normally writing")
        }
    })
})

app.listen(4040, () => {
    console.log("server run aguthuda")
})