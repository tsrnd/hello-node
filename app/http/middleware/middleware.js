const accesslog = require('access-log')
const jwt = require('jsonwebtoken')
const utils = require('../../../utils/http')

// accessLog access log midlewave
var accessLog = (req, res, next) => {
    accesslog(req, res)
    next()
}

// auth middleware
var auth = (req, res, next) => {
    var authorizationHeader = req.headers['authorization']
    if (authorizationHeader == undefined) {
        return utils.unauthorizedResponse(res)
    }
    var tmps = authorizationHeader.split(/Bearer /)
    if (tmps <= 1) return utils.unauthorizedResponse(res)

    var token = tmps[1]
    try {
        var decoded = jwt.verify(token, 'secret')
        if (decoded.id != 0) {
            return next()
        }
    } catch (err) {
        console.log(err)
    }

    utils.unauthorizedResponse(res)
}

module.exports = {
    accessLog,
    auth,
}