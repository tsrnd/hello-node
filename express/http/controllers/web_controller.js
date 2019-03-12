const path = require('path')
const fs = require('fs')

// home controller
var home = (req, res) => {
    jsonData = ''
    f = fs.ReadStream(path.join(__dirname, './../../../tmp/posts.json'), (err) => {
        if (err) {
            throw err
        }
    })
    f.on('data', (chunk) => {
        jsonData += chunk.toString()
    })
    f.on('end', ()=>{
        console.log(jsonData)
        res.render('main', {posts: JSON.parse(jsonData)});
    })
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