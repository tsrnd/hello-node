const fs = require('fs')
const md5 = require('md5');
const path = require('path')
const jwt = require('jsonwebtoken');
const utils = require('../../../utils/http')


var postLogin = (req, res) => {
    user = {
        username: req.body.username,
        password: md5(req.body.password)
    }

    streamFile = fs.ReadStream(path.join(__dirname, './../../../tmp/users.json'), (err) => {
        if (err) {
            console.error(err)
            utils.internalServerResponse(res)
        }
    })
    jsonData = ''
    streamFile.on('data', (chunk) => {
        jsonData += chunk.toString()
    })
    streamFile.on('end', () => {
        users = JSON.parse(jsonData)
        user = users.find((u) => {
            return u.username == user.username && u.password == user.password
        })
        if (user) {
            // create a token
            var token = jwt.sign({ id: user.id }, 'secret', {
                expiresIn: 86400 // expires in 24 hours
            })
            utils.successResponse(res, {
                token: token
            })
        } else {
            utils.unauthorizedResponse(res)
        }
    })
}

module.exports = {
    postLogin,
}