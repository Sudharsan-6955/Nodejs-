function shoutEvent(emitter, event, msg) {
  emitter.on(event, () => {
    console.log(`Someone shouted ${event}: ${msg}`);
  });
}

const EventEmitter = require('events');
const sudharsan = new EventEmitter();

shoutEvent(sudharsan, 'chaiReady', 'Elachi Special!');
sudharsan.emit('chaiReady');
