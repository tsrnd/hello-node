var event = require('events');

eventEmitter =  new event.EventEmitter();

var handle = () => {
    console.log('Handle event');
};

eventEmitter.on('connect', handle);

console.log('Emit event');
eventEmitter.emit('connect');

