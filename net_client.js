var net = require('net');
var readline = require('readline');

var client = net.connect({port: 3001}, function() {
   console.log('connected to server!')
   var read = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: false
    })
    read.on('line', (msg) => {
        client.write(msg)
    })
});

client.on('data', function(data) {
   console.log(data.toString())
})

client.on('end', function() { 
   console.log('disconnected from server')
})
