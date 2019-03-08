var listFiles = require('./s6-module.js')

// listFiles(process.argv[2], process.argv[3]).then((result) => {
//     result.forEach(element => {
//         console.log(element);
//     });
// }).catch((err) => {
//     console.log(err);
// });

listFiles(process.argv[2], process.argv[3], (err, result) => {
    if (err) {
        console.log(err);
    } else {
        result.forEach(element => {
            console.log(element);
        });
    }
})
