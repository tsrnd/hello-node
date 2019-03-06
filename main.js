var http = require('http')
var fs = require('fs')


var port = 3001
http.createServer(function (req, resp) {
    resp.writeHead(200, {'Content-Type': 'application/json'})
    
    // fs.readFile('./big.txt', (err, data) => {
    //     if (err) throw err;
    //     resp.end(data)
    // })

    var f = fs.createReadStream('./tmp/big.txt')
    f.pipe(resp)

}).listen(port)

console.log('server running on port ', port)

