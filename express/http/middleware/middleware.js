const accesslog = require('access-log');

// accessLog access log midlewave
var accessLog = (req, res, next) => {
    accesslog(req, res)
    next()
}

// auth middleware
var auth = (req, res, next) => {
    console.log('comming soon')
    next()
}

module.exports = {
    accessLog,
    auth,
}