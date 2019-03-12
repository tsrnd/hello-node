// @ts-check

const express = require('express')

const app = express()

const PORT = 3000
const HOST = '127.0.0.1'


// demo middleware
const middlewareWithRouter = express.Router()

middlewareWithRouter.use((req, res, next) => {
    console.log('iam the first man')
    next()
}).get('/fisrt-middleware', (req, res) => {
    console.log('iam the second')
    res.send('end')
})

// all request method allow
app.all('*', (req, res, next) => {
    console.log('whos first')
    next()
})

// router with param
const paramRouter = express.Router()
paramRouter.param('p1', (req, res, next, p1) => {
    console.log("CALL OK", p1)
    next()
}).get('/:p1', (req, res) => {
    res.send('ok')
})

// custom param router
paramRouter.param((param, option) => {
    return (req, res, next, val) => {
        if (val != option) {
            next()
        } else {
            res.sendStatus(404);
        }
    }
})

paramRouter.param('id', 1)

paramRouter.get('/custom/:id', (req, res) => {
    console.log(req.params)
    res.send('oke')
})

// route
const routeRouter = express.Router()
routeRouter.use((req, res, next) => {
    console.log('test middleware')
    next()
})
routeRouter.route('/route/s')
    .get((req, res) => {
        res.send('get list')
    })
    .post((req, res) => {
        res.send('post something')
    })

app.use(middlewareWithRouter)
app.use(paramRouter)
app.use(routeRouter)

app.listen(PORT, HOST, () => {
    console.log('server running ok')
})
