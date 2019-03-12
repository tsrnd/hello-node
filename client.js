var net = require('net');

var client = net.connect({port: 8080}, function() {
    console.log('connected to server');
    for (i = 0; i < 5; i++) {
        client.write('something  ');    
    }
});
client.on('data', function(data) {
    console.log('data here: ' + data.toString());
    client.end();
});
client.on('end', function() {
    console.log('disconnnection server');
});

