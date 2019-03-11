var os = require('os');
console.log(os.arch());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.userInfo());

var path = require('path');
console.log(path.basename('week2/unility_module.js', '.js'));
console.log(path.delimiter);
console.log(path.dirname('week2/unility_module.js'));
console.log(path.extname('utility_module.js'));
console.log(path.format({
    root: 'hello-node',
    dir: 'week2',
    base: 'utility_module.js',
    ext: '.js',
    name: 'utility_module',
}));
console.log(path.join('/hello-node', 'week2', '/utility_module.js'));
console.log(path.parse('/hello-node/week2/utility_module.js'));
console.log(path.sep);
console.log(path.resolve('..', 'week1'));
