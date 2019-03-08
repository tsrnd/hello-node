var http = require('http');
var fs = require('fs');

// http.createServer((req, res) => {
//     fs.createReadStream(process.argv[3], 'utf8').on('data', (data) => {
//         res.write(data);
//     })
// }).listen(process.argv[2])

http.createServer((req, res) => {
    var rs = fs.createReadStream(process.argv[3]).pipe(res)
}).listen(process.argv[2])
