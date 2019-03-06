var events = require('events');

var eventEmitter = new events.EventEmitter();
var a = 1;
var b = 2;

var connectHandler = function connected(a, b) {
   console.log('connection succesful.', a + b);

   eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler); 

eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});

eventEmitter.emit('connection', a, b);

console.log(events.listenerCount(eventEmitter, 'connection') + " Listner(s) listening to connection event");

eventEmitter.removeListener('connection', connectHandler);

eventEmitter.emit('connection', a, b);

console.log(events.listenerCount(eventEmitter, 'connection') + " Listner(s) listening to connection event after remove connectHandler");

console.log("Program Ended.");

