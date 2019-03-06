var events = require('events');
var eventEmitter = new events.EventEmitter();

var callCount1 = 0;
var callCount2 = 0;

const showCount = () => {
    console.log(`There is ${events.EventEmitter.listenerCount(eventEmitter, 'call')} is hearing`)
};

const hearing1 = () => {
    callCount1++;
    console.log(`1: I'm listening ${callCount1}`);
};

const hearing2 = () => {
    callCount2++;
    console.log(`2: Me too ${callCount2}`);
};

eventEmitter.addListener('call', hearing1);

eventEmitter.emit('call');
showCount();

eventEmitter.addListener('call', hearing2);

eventEmitter.emit('call');
showCount();

eventEmitter.removeAllListeners('call');

eventEmitter.emit('call');
showCount();