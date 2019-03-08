var os = require('os');
var path = require("path");
var net = require('net');
var dns = require('dns');
var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

console.log('endianness: ', os.endianness);

console.log('type: ', os.type);

console.log('platform:', os.platform);

console.log('total memory:', os.totalmem);

console.log('free memory:', os.freemem);


console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

console.log('resolve : ' + path.resolve('main.js'));

console.log('ext name : ' + path.extname('main.js'));


var server = net.createServer(function(connection) { 
   console.log('client connected');
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});


dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('address:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }

      console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
   });  
});


var emitter1 = new EventEmitter();
var domain1 = domain.create();

domain1.on('error', function(err) {
   console.log("domain1 handled this error ("+err.message+")");
});

domain1.add(emitter1);

emitter1.on('error',function(err) {
   console.log("listener handled this error ("+err.message+")");
});

emitter1.emit('error',new Error('To be handled by listener'));
emitter1.removeAllListeners('error');
emitter1.emit('error',new Error('To be handled by domain1'));

var domain2 = domain.create();

domain2.on('error', function(err) {
   console.log("domain2 handled this error ("+err.message+")");
});

domain2.run(function() {
   var emitter2 = new EventEmitter();
   emitter2.emit('error',new Error('To be handled by domain2'));   
});

domain1.remove(emitter1);
emitter1.emit('error', new Error('Converted to exception. System will crash!'));