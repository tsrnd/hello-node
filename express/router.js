const express = require('express')
require('express-group-routes')
const middleware = require('./http/middleware/middleware')
const webCtrls = require('./http/controllers/web_controller')
const apiCtrls = require('./http/controllers/api_controller')
const path = require('path')
const bodyParser = require('body-parser');

// var multer  = require('multer');

var router = express.Router()

// common middleware setting
router.use(middleware.accessLog)
// static file
router.use('/static', express.static(path.join(__dirname, 'public')))
// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }))

// api route setting
router.group('/api/v1', (router) => {
    router.use((req, res, next) => {
        res.setHeader('Content-Type', 'application/json')
        next()
    })
    router.post('/login', apiCtrls.postLogin)
    router.use(middleware.auth).get('/posts', (req, res) => {
        res.end(JSON.stringify({msg: 'comming soon'}))
    })
})

// web route setting
router.group('/', (router) => {
    router.route('/form')
        .get(webCtrls.getForm)
        .post(webCtrls.postForm)
    router.get('/', webCtrls.home)
    router.get('/*', webCtrls.notFound)
})

module.exports = router