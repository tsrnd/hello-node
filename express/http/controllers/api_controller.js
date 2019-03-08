const fs = require('fs')
const md5 = require('md5');
const path = require('path')
var jwt = require('jsonwebtoken');

var postLogin = (req, res) => {
    // users list
    jsonData = ''
    msgAuthenticateFail = {
        msg: 'authenticate fail'
    }
    user = {
        username: req.body.username,
        password: md5(req.body.password)
    }

    streamFile = fs.ReadStream(path.join(__dirname, './../../../tmp/users.json'), (err) => {
        if (err) {
            throw err
        }
    })
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
            res.status(200).end(JSON.stringify({
                token: token
            }))
        } else {
            res.status(403).end(JSON.stringify(msgAuthenticateFail))
        }
    })
}

module.exports = {
    postLogin,
}