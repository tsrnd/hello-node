var http = require('http');
var url = require('url');

http.createServer((req, res) => {
    var reqUrl = url.parse(req.url, true);
    var date = new Date(reqUrl.query.iso);
    switch (reqUrl.pathname) {
        case '/api/parsetime':
            var resp = JSON.stringify({
                "hour": date.getHours(),
                "minute": date.getMinutes(),
                "second": date.getSeconds()
            });
            res.end(resp);
            break;
        case '/api/unixtime':
            res.end(JSON.stringify({
                "unixtime": date.getTime(),
            }));
            break;
        default:
            res.writeHead(404)
            res.end();
            break;
    }
}).listen(process.argv[2])
