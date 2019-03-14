const md5 = require('md5')
const jwt = require('jsonwebtoken')
const utils = require('../../../utils/http')
const User = require('../../../models/user')


var postLogin = (req, res) => {
    User.findOne({
        username: req.body.username,
        password: md5(req.body.password)
    }).then(user => {
        if (!user) {
            return utils.unauthorizedResponse(res)
        }
        // create a token
        var token = jwt.sign({ id: user.id }, 'secret', {
            expiresIn: 86400 // expires in 24 hours
        })
        return utils.successResponse(res, {
            token: token
        })
    }).catch(err => {
        console.error(err)
        return utils.internalServerResponse(res)
    })

}

module.exports = {
    postLogin,
}