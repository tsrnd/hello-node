var express = require('express');
var app = express();
var fs = require("fs");
const multer = require('multer')

// initial multer
const upload = multer()

app.post('/upload', upload.single('image'), function (req, res) {
    let file = fs.writeFileSync(req.file.originalname, req.file.buffer)
    res.status(200).json({
        'message': 'it will be ok'
    })
})

// test router
const userRouter = express.Router()
    bookRouter = express.Router()
userRouter
    .get('/', (req, res) => {
        res.send('well, iam get user')
    })
    .post('/', (req, res) => {
        res.send('post user, ok?')
    })

bookRouter
    .get('/', (req, res) => {
        res.send('oh, hi, iam book')
    })
    .post('/', (req, res) => {
        res.send('iam post book')
    })

app.use('/users', userRouter)
app.use('/books', bookRouter)

var server = app.listen(3000, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})
