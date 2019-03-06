var events = require("events");
var eventEmitter = new events.EventEmitter();
var listen1 = function listen1(){
    console.log('listen1');
}
var listen2 = function listen2(){
    console.log('listen2');
}
eventEmitter.on('connection', listen1)
eventEmitter.addListener('connection', listen2);
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " lisener listening to connection event")

eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listen1);
console.log('listen1 will not listen now');
eventEmitter.emit('connection');