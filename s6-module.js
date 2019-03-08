var fs = require('fs')

// module.exports = async (path, ext) => {
//     return await new Promise((resolve, reject) => {
//         fs.readdir(path, (err, input) => {
//             if (err) reject(err);
//             resolve(input.filter((name) => {
//                 return name.endsWith('.' + ext);
//             }))
//         })
//     });
// }

module.exports = (path, ext, cb) => {
    fs.readdir(path, (err, input) => {
        if (err) return cb(err);
        return cb(null, input.filter((item) => {
            return item.endsWith('.' + ext);
        }))
    })
}
