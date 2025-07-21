const EventEmitter = require ('events')
const sudha = new EventEmitter

// method1
function listener1 () {}
sudha.on('hii',listener1)
console.log(sudha.listeners('hii'))

// method2

// sudha.on('hii' , ()=>{})
// sudha.on('hello' , ()=>{})
// console.log(sudha.eventNames())