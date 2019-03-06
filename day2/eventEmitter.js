var events = require('events');
var eventEmitter = new events.EventEmitter();

var listener1 = function listener1(){
    console.log('listner1 excuted');
}

var listener2 = function listener2(){
    console.log('listner2 excuted');
}

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners =  require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener listening to connection events");

eventEmitter.emit('connection');
eventEmitter.removeListener('connection', listener1);
console.log('Listener1 will no listen now');

eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listener listening to connection events");

console.log('Program Ended');