const EventEmitter = require('events');           // (1)
const sudharsan = new EventEmitter();                 // (2)

sudharsan.on('codeReady', () => {                      // (3)
  console.log('Customer: Ohh! code is ready!');   // (4)
});

console.log('sudharsan is preparing code...');         // (5)

setTimeout(() => {                               // (6)
  console.log('sudharsan: code is ready! Shouting...');// (7)
  sudharsan.emit('codeReady');                         // (8)
}, 3000); // 3 sec 


//event + data
const hii = new EventEmitter();

hii.on('codeReady', (tech) => {
  console.log(`Customer: Ohh! code is ready in ${tech}!`);
});

hii.emit('codeReady', 'React');

// once
const once = new EventEmitter();

once.once('codeReady', () => {
  console.log('Customer: Got the first code update, no need again!');
});

once.emit('codeReady');
once.emit('codeReady'); // Ignored

//removelistenr or off()
const off = new EventEmitter();

function customer() {
  console.log('Customer: Ohh! code is ready!');
}

off.on('codeReady', customer);
off.emit('codeReady'); // first time

off.off('codeReady', customer); // remove listener

off.emit('codeReady'); // won't trigger


