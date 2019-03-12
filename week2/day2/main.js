// @ts-check

const express = require('express')
const bodyParser = require('body-parser')
const multer = require('multer')
const pug = require('pug')
const path = require('path')

/** initial app */
const app = express()

/** initial middleware for server app */
app.use(bodyParser.urlencoded({ extended: false }))

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './storage/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.filename}_${Date.now()}.${file.originalname.split('.')[1]}`)
    }
})
const upload = multer({ storage: storage })

/** initial template engine */
app.set('view engine', 'pug')
app.set('views', path.join(process.cwd(), 'wheres'))

/** define router */
const router = express.Router()
router.route('/')
    .get((req, res) => {
        res.render('index', { title: 'Hello', message: 'Hi' })
    })

router.route('/form')
    .get((req, res) => {
        res.render('users/form')
    })
    .post(upload.single('image'), (req, res) => {
        console.log(req.body)
        console.log('your file here', req.file)
        res.send('receive data')
    })

app.use(router)

/** run server on port 3000 */
const PORT = 3000
const HOST = '127.0.0.1'

app.listen(PORT, HOST, () => {
    console.log('Server running ok')
})
