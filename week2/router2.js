var express = require("express");
var router = express.Router();

router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

router.get('/test1', (req, res, next) => {
    next()
    res.send("hello")
});

router.get('/test2', (req, res) => {
    res.send("hello2")
});

module.exports = router;
