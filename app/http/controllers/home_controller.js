pug = require('pug')

var index = (req, res) => {
    res.render('index', {title: 'hello world', posts: ['a', 'b', 'c']})
}

module.exports = {
    index,
}