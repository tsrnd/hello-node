// var user_handler = require(__dirname+'/user/user_handler.js')
import {userhander} from './user/user_handler';
import {isAuthorized} from './middleware/auth_middleware';

export function route(app) {
    app.get('/users', userhander.getAllUsers);
    
    app.get('/users/:id', isAuthorized, userhander.getUser);
    
    app.delete('/users/:id', isAuthorized, userhander.deleteUser);  

    app.post('/login', userhander.login)

    app.post('/register', userhander.register)

    app.get('/profile', isAuthorized, userhander.profile)
}
