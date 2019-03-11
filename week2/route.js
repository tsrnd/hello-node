const express = require("express");
const app = express();
const port = 3000;
// Basic Routing

// app.METHOD(Path, Handler)
// app.get('/', (req, res) => res.send('Test basic route'));

app.get('/', function(res, req) {
    req.send("Basic Route");
})

// method All
app.all('/secret', function(req, res, next) {
    console.log("secret");
    next();
});

/* 
    Param callback functions
    When call /user/1 The following will print
    ```
        CALLED ONLY ONCE
        although this matches
        and this matches too
    ```
*/
app.param('id', function(req, res, next, id){
    console.log('Called Only Once');
    next();
})

app.get('/user/:id', function (req, res, next) {
    console.log('although this matches');
    next();
});

app.get('/user/:id', function (req, res) {
    console.log('and this matches too');
    res.end();
});

/* 
    Param callback functions
    When call /user/1/2 The following will print
    ```
        CALLED ONLY ONCE with 1
        CALLED ONLY ONCE with 2
        although this matches
        and this matches too
    ```
*/
app.param(['id', 'page'], function (req, res, next, value) {
    console.log('CALLED ONLY ONCE with', value);
    next();
});

app.get('/user/:id/:page', function (req, res, next) {
    console.log('although this matches');
    next();
});

app.get('/user/:id/:page', function (req, res) {
    console.log('and this matches too');
    res.end();
});


// App.route()
app.route('/book')
    .get(function (req, res) {
        res.send('Get a random book')
    })
    .post(function (req, res) {
        res.send('Add a book')
    })
    .put(function (req, res) {
        res.send('Update the book')
    })

app.listen(port, () => console.log(`${port}`));
