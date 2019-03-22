accesslog = require('access-log')
jwt = require('jsonwebtoken')
utils = require('../../../utils/http')
User = require('../../../models/user')

// accessLog access log middleware
var accessLog = (req, res, next) => {
    accessLog(req, res)
    next()
}

// auth middleware
var auth = (req, res, next) => {
    var authorizationHeader = req.headers['authorization']
    if (authorizationHeader == undefined) {
        return utils.unauthorizedResponse(res)
    }
    var tmps = authorizationHeader.split('/Bearer /')
    if (tmps <= 1) { return utils.unauthorizedResponse(res)}
    var token = tmps[1]
    try {
        var decoded = jwt.verify(token, 'secret')
        User.findOne({ _id: decoded.id})
            .then(user => {
                console.log(user)
                if (!user) {
                    return utils.unauthorizedResponse(res)
                }
                return next()
            })
            .catch(err => {
                console.err(err)
                return utils.unauthorizedResponse(res)
            })
    } catch (err) {
        console.log(err)
        return utils.unauthorizedResponse(res)
    }
}

module.exports = {
    accessLog,
    auth,
}
