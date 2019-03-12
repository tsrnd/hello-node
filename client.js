// var net = require('net');

// var client = net.connect({port: 8080}, function() {
//     console.log('connected to server');
//     for (i = 0; i < 5; i++) {
//         client.write('something  ');    
//     }
// });

// client.on('data', function(data) {
//     console.log('data here: ' + data.toString());
//     client.end();
// });

// client.on('end', function() {
//     console.log('disconnnection server');
// });
var http = require('http');
var options = {
    host: 'localhost',
    port: '8081',
    path: '/index.html'  
 };
var callback = function(res) {
    var body = '';
    res.on('data', function(data) {
        body += data;
    });
    res.on('end', function() {
        console.log(body);
    });
};
var req = http.request(options, callback);
req.end();
