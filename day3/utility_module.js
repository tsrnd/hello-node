var os = require("os");
var path = require("path");
console.log("endianness: " + os.endianness());
console.log("type: "+ os.type());
console.log("platform: "+ os.platform);
console.log('total memory : ' + os.totalmem() + " bytes.");
console.log('free memory : ' + os.freemem() + " bytes.");
console.log("resolve: " + path.resolve('utility_module.js'));
console.log("ext name: " + path.extname('utility_module.js'));

