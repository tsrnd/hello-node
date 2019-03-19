module.exports.admin = function(user) {
    return function(req, res, next) {
        // console.log(user);
        // if (req.body.username == 'admin' && req.body.password == '123123') {
        //     req.body.username = 'admin';
        //     image = req.files.image;
        //     if (image != null) {
        //         image.mv('/public/image/' + image.name, function(err) {
        //             if (err) console.log(err);
        //         });
        //         req.body.image == image.name;
        //     }
        //     console.log(req.body.username, req.body.image)
        //     // next();
        // } else {
        //     res.sendFile(__dirname + '/index.html', 'utf8');
        // }
    }
  }