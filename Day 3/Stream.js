const fs = require('fs')

const readstream = fs.createReadStream('input.txt','utf8')

readstream.on('data', (chunk) => {
    console.log('hii dai', chunk)
})
readstream.on('data',() => {
    console.log('helloo')
})