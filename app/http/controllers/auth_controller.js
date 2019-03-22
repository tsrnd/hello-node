md5 = require('md5')
jwt = require('jsonwebtoken')
utils = require('../../../utils/http')
User = require('../../../models/user')

var postLogin = (req, res) => {
    User.findOne({
        username: req.body.username,
        password: md5(req.body.password)
    })
        .then(user => {
            if (!user) {
                return utils.unauthorizedResponse(res)
            }
            // create a token
            var token = jwt.sign({ id: user.id}, 'secret', {
                expiresIn: 86400 // 24h
            })
            return utils.successResponse(res, {
                token: token
            })
        })
        .catch(err => {
            console.log(err)
            utils.internalServerResponse(res)
        })
}

module.exports = {
    postLogin,
}