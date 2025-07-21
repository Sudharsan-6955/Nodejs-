const fs = require ('fs')
const path = require ('path')

const folderPath = path.join(__dirname,'crtFolder')
const filePath = path.join(folderPath,'crtFile')
if(!fs.existsSync(folderPath))
{
    fs.mkdirSync(folderPath)
}
fs.writeFile(filePath,'Create file ', (err)=>
{
    if(err) console.log('Error')
        else console.log('Create panniten')
})
fs.appendFile(filePath,'\nHI', (err)=>
{
if(err) console.log('error',err)
else console.log('Correct')
})
fs.readFile(filePath,'utf-8',(err,data)=>
{
    if(err) console.log('tappu',err)
        else console.log('crt',data)
})

