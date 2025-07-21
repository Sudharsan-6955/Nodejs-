    // const EventEmitter = require('events');
    // const { eventNames } = require('process');
    // const sudharsan = new EventEmitter();

    // sudharsan.on('codeReady', () => {});
    // sudharsan.on('codeReady', () => {});

    // const count = sudharsan.listenerCount('codeReady');
    // console.log(`There are ${count} customers waiting.`);

// listener(eventNames)

const EventEmitter = require('events');
const sudharsan = new EventEmitter();

function listener1() {}
function listener2() {}

sudharsan.on('codeReady', listener1);
sudharsan.on('codeReady', listener2);

console.log(sudharsan.listeners('codeReady')); // [ [Function: listener1], [Function: listener2] ]


//count listenrs 
sudharsan.on('teaReady', () => {});
sudharsan.on('codeReady', () => {});
console.log(sudharsan.eventNames()); // [ 'teaReady', 'codeReady' ]

