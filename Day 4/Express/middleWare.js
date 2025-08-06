// applevel middleware
// route level middleware
// error handling middleware 
// build-in middleware
// third party middleware

//middleware is nothing but , middleware is an function
const express = require("express")
const app = express()
//normal middleware normally declare the obj and res that obj key then console that obj key  (req,res,next)
// route level middleware is nothing but add the obj in app.get nearby route okay ya (then remove app.use) (req,res,next)
// error handling missleware take three parameter but this take 4 parameter (error,req,res,next) then call ap.use(middleareFuncname)


const middleware1 = (req,res,next) => {  // (obj)
    // throw new Error("error from middleware 1") //error handling ku use pandrathu 
    // next("error from middleware 1") //use this one also same for error handling but you use anyone
    // return (req,res,next)=>
    // {
    //     console.log("middleware_1")
    //     req.name = obj.name
    //     next()
    // }
    next()
}

const middleware2 = (req, res, next) => {
    console.log("middleware_2")
    next()
}

app.use(middleware1)  //({name:"sudharsan"})
app.use(middleware2)

app.get("/", (req, res, next) => {
    console.log(req.name)
    res.send("hii")
})


const errorMiddleware = (error,req,res,next)=>
{
    console.log(error)
    res.status(500).send("error from erormiddleware")
}

app.use(errorMiddleware)

app.listen(3070, () => {
    console.log("Server running")
})

