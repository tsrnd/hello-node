var event = require('events');

var eventEmitter = new event.EventEmitter();
var connectHandler = function connected() {
    console.log('connection successful');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('data_received', function(){
    console.log('data_received connection successful');
});

eventEmitter.emit('connection');
console.log('Program ended');
