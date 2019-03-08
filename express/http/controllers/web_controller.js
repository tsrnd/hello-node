const path = require('path')

// home controller
var home = (req, res) => {
    res.sendFile(path.join(__dirname + '../../../resources/views/index.html'))
}

var getForm = (req, res) => {
    res.sendFile(path.join(__dirname + '../../../resources/views/form.html'))
}

var postForm = (req, res) => {
    d = {
        first_name: req.body.first_name,
        last_name: req.body.last_name
    }
    res.end(JSON.stringify(d))
}

// not found controller
var notFound = (req, res) => {
    res.status(404).end('Page not found')
}

module.exports = {
    home,
    notFound,
    getForm,
    postForm,
}