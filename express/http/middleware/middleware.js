const accesslog = require('access-log');

// accessLog access log midlewave
var accessLog = (req, res, next) => {
    accesslog(req, res)
    next()
}

module.exports = {
    accessLog,
}