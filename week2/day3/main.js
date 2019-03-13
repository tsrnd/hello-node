// @ts-check

const express = require('express')
const fs = require('fs')

// define constant for server app
const PORT = 3000
const HOST = '127.0.0.1'

// intial app instance
const app = express()

// first error throw
const router = express.Router()

router.get('/first-error', (req, res) => {
    throw new Error('will be error soon')
})

router
    .get('/file-error', (req, res, next) => {
        try {
            fs.writeFileSync('/file.js', 'some data')
        } catch (e) {
            console.log(e.name)
            next(e)
        }
    })
    .get('/otherway', [
        (req, res, next) => {
            fs.writeFileSync('/file.js', 'some data')
        },
        (req, res) => {
            res.send('OK')
        }
    ])

router.get('/promise-handle', (req, res, next) => {
    new Promise((rel, rej) => {
        fs.writeFile('/test.json', 'some data', (err) => {
            if (err) rej(err)
        })
    }).catch(next)
})

// return error handler
router.use((err, req, res, next) => {
    console.log("This is err stack", err.stack)
    res.status(500).send('What problem?')
})

app.use(router)

app.listen(PORT, HOST, () => {
    console.log('Server running ok');
})
