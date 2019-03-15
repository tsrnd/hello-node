// var user_handler = require(__dirname+'/user/user_handler.js')
var user_handler = require(__dirname+'/user/user_handler')
var middleware = require(__dirname+'/middleware')

module.exports = function(app) {
    app.get('/users', middleware.isAuthorized, user_handler.getAllUsers);
    
    app.get('/users/:id', middleware.isAuthorized, user_handler.getUser);
    
    app.delete('/users/:id', middleware.isAuthorized, user_handler.deleteUser);  

    app.post('/login', user_handler.login)

    app.get('/profile', middleware.isAuthorized, user_handler.profile)
}
