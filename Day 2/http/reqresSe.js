const http = require ('http')

const server = http.createServer((req,res)=>
{
    if (req.url ==='/') {
        res.end('hii')        
    }
    else if (req.url ==='/hii')
    {
        res.end('bye')
    }
    else
    {
        res.end('onnum ila')
    }
})  

server.listen(3000,()=>
{
    console.log('http://localhost:3000')
})