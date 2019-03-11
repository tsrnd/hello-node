const accesslog = require('access-log');
const jwt = require('jsonwebtoken')

// accessLog access log midlewave
var accessLog = (req, res, next) => {
    accesslog(req, res)
    next()
}

msgAuthFail = {
    msg: 'auth fail'
}

// auth middleware
var auth = (req, res, next) => {
    var authorizationHeader = req.headers['authorization']
    if (authorizationHeader == undefined) {
        return res.end(JSON.stringify(jwt.verify(token, 'secret')))
    }
    var tmps = authorizationHeader.split(/Bearer /)
    if (tmps <= 1) return res.end(JSON.stringify(jwt.verify(token, 'secret')))

    var token = tmps[1]
    try {
        var decoded = jwt.verify(token, 'secret')
        if (decoded.id != 0) {
            return next()
        }
    } catch (err) {
        console.log(err)
    }

    res.end(JSON.stringify(msgAuthFail))
}

module.exports = {
    accessLog,
    auth,
}