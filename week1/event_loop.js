var events = require('events');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('begin', function() {
    console.log('Begin');
    eventEmitter.emit('firstProcess');
    eventEmitter.emit('secondProcess');
    eventEmitter.emit('end');
});

eventEmitter.on('firstProcess', function() {
    console.log('handling first process');
    setTimeout(function() {
        console.log('finish first process');
    }, 500);
});

eventEmitter.on('secondProcess', function() {
    console.log('handling second process');
    setTimeout(function() {
        console.log('finish second process');
    }, 500);
});

eventEmitter.on('end', function(){
    console.log('End');
});

eventEmitter.emit('begin');

// Result:
// Begin
// handling first process
// handling second process
// End
// finish first process
// finish second process
