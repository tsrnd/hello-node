var events = require('events');
var eventEmitter = new events.EventEmitter();
var connectHandle = function connected() {
    console.log('Connect Handle');
    eventEmitter.emit('data-received');
}
eventEmitter.on('connection', connectHandle)
eventEmitter.on('data-received', function() {
    console.log('data received successfull')
})
eventEmitter.emit('connection');

