var events = require('events');

var eventElemitter = new events.EventEmitter();

var listener1 = function listener1() {
    console.log('listener1 excecuted.');
}

var listener2 = function listener2() {
    console.log('listener2 excecuted.');
}

eventElemitter.addListener('connection', listener1);
eventElemitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventElemitter, 'connection');
console.log(eventListeners + ' listener(s) listening to connect event');

eventElemitter.emit('connection');

eventElemitter.removeListener('connection', listener1);
console.log('Remove listener1');

var eventListeners = require('events').EventEmitter.listenerCount(eventElemitter, 'connection');
console.log(eventListeners + ' listener(s) listening to connect event');

console.log('----------End');