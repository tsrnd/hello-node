var user_handler = require(__dirname+'/user/user_handler.js')

module.exports = function(app) {
    app.get('/users', user_handler.getAllUsers)
    
    app.get('/users/:id', user_handler.getUser);
    
    app.delete('/users/:id', user_handler.deleteUser)    
}
