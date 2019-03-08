var http = require('http');
http.get(process.argv[2], 'utf8', (res) => {
    res.on('error', (err) => {
        console.log(err);
    }).on('data', (data) => {
        console.log(data.toString());
    })
})
