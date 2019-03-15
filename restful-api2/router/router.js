// var express = require("express");
// var app = express();
module.exports = function(app) {
    var user = require('../controllers/usercontroller');
    var post = require('../controllers/postcontroller');

    app.route('/users')
        .get(user.listAllUser)
        .post(user.createUser);

    app.route('/user/:userID')
        .get(user.readUser)
        .put(user.updateUser)
        .delete(user.deleteUser);

    app.route('/posts')
        .get(post.listPosts)
        .post(post.createPost);
}

