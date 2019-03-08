var http = require('http');
var map = require('through2-map');
http.createServer((req, res) => {
    req.pipe(map((chunk) => {
        return chunk.toString().toUpperCase();
    })).pipe(res).on('end', () => {
        res.end();
    })
}).listen(process.argv[2])
