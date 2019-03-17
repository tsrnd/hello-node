console.log('is server')
const app = require('./app');
const http = require('http');

const server = http.createServer(app);

server.listen(8081);

console.log('server is running...')