var event = require('events');

var eventEmitter = new event.EventEmitter();

var handleEvent1 = () => {
    console.log("Handle event 1");
    console.log("Emit event  2");
    eventEmitter.emit('event2');
};

var handleEvent2 = () => {
    console.log("Handle event 2");
};


eventEmitter.on('event1', handleEvent1);
eventEmitter.on('event2', handleEvent2);

console.log('emit event 1');
eventEmitter.emit('event1');
