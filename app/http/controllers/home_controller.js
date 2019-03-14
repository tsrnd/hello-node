const pug = require('pug');

var index = (req, res) => {
    res.render('index', { title: 'Hello node', posts: ['1', '2', '3']})
}

module.exports = {
    index,
}