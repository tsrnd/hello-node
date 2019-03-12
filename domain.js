var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

//create domain
var domain1 = domain.create();

domain1.on('error', function(err) {
    console.log('error is ' + err.toString());
});
domain1.emit('error', new Error('to be handle for listenner'));
domain1.add(emitter1);
emitter1.on('error', function(err) {
    console.log('error is ...' + err.toString());
});
emitter1.emit('error', new Error('to listenner'));
emitter1.removeAllListeners('error');
emitter1.emit('error', new Error('to be handle by domain1'));

var domain2 = domain.create();
domain2.on('error', function(err) {
    console.log('err here.....' + err.toString());
});
domain2.run(function(){
    var emitter2 = new EventEmitter();
    emitter2.emit('error', new Error('to be handle by domain2'));
});
domain1.remove(emitter1);
emitter1.emit('error', new Error('converted to exception'));



