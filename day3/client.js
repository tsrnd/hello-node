var net = require('net');
var client = net.connect({port: 8080}, function() {
   console.log('Da ket noi voi Server!');  
});
client.on('data', function(data) {
   console.log(data.toString());
   client.end();
});
client.on('end', function() { 
   console.log('Mat ket noi voi Server');
});