var http = require('http');
var bl = require('bl');

http.get(process.argv[2], 'utf8', (res) => {
    res.pipe(bl((err, data) => {
        if (err) console.log(err);
        console.log(data.toString().length);
        console.log(data.toString());
    }))
})
