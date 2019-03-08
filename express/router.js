const express = require('express')
require('express-group-routes')
const middleware = require('./http/middleware/middleware')
const ctrls = require('./http/controllers/web_controller')
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

// route setting
router.group('/', (router) => {
    router.route('/form')
        .get(ctrls.getForm)
        .post(ctrls.postForm)
    router.get('/', ctrls.home)
    router.get('/*', ctrls.notFound)
})

module.exports = router