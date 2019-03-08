var path = require("path");

pathFile = __dirname;
// Chuan hoa duong dan voi phuong thuc normalize()
console.log('Phuong thuc NORMALIZE : ' + path.normalize(pathFile));

// Ket hop cac tham so dau vao de tao mot duong dan
console.log('Phuong thuc JOIN : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve mot duong dan tuyet doi
console.log('Phuong thuc RESOLVE : ' + path.resolve('main.js'));

// Lay thong tin cua duoi duong dan
console.log('Phuong thuc EXTNAME : ' + path.extname('main.js'));