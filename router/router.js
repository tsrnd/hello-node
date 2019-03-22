express = require('express')
require('express-group-routes')
middleware = require('../app/http/middleware/middleware')
authCtrls = require('../app/http/controllers/auth_controller')
homeCtrls = require('../app/http/controllers/home_controller')
bookCtrls = require('../app/http/controllers/book_controller')
path = require('path')
bodyParser = require('body-parser')

var router = express.Router()

// router.use(middleware.accessLog)

router.use('/static', express.static(path.join(__dirname, 'public')))

router.use(bodyParser.urlencoded({ extended: false}))

router.group('/api/v1', (router) => {
    router.use((req, res, next) => {
        res.setHeader('Content-Type', 'application/json')
        next()
    })
    router.post('/login', authCtrls.postLogin)
    router.get('/books', bookCtrls.findAll)
    router.group('/book', (route) => {
        route.get('/:bookId', bookCtrls.find)
        route.post('/', bookCtrls.create)
        route.put('/:bookId', bookCtrls.update)
        route.delete('/:bookId', bookCtrls.deleteBook)
    })
    router.use(middleware.auth).get('/posts', (req, res) => {
        res.end(JSON.stringify({msg: 'coming soon'}))
    })
})
router.get('/*', homeCtrls.index)
module.exports = router