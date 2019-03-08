var http = require('http');
var bl = require('bl');

var getSite = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, 'utf8', (res) => {
            res.pipe(bl((err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data.toString());
            }))
        })
    });
}

var main = async () => {
    var site1 = await getSite(process.argv[2]);
    var site2 = await getSite(process.argv[3]);
    var site3 = await getSite(process.argv[4]);
    console.log(site1);
    console.log(site2);
    console.log(site3);
}

main();
