var model = require('./model');
var fs = require('fs');

exports.list = function (req, res, next) {
    var currentPage = req.query.page || 1;
    var limit = 5;
    model.Users.collection.countDocuments(function (err, count) {
        model.Users.find().sort({
            user_id: -1
        }).limit(limit).skip(limit * (currentPage - 1)).exec(function (error, data) {
            if (err || error) {
                error.statusCode = 400
                next(error)
            }
            var pages = Math.ceil(count / limit);
            res.render('users', {
                title: 'List Users',
                data: data,
                total: count,
                pages: pages
            });
        })
    })
};

exports.view = function (req, res, next) {
    model.Users.findOne({
        user_id: req.params.id
    }, function (error, data) {
        if (error) {
            error.statusCode = 400
            next(error)
        }
        res.render('user', {
            title: 'User',
            data: data
        });
    })
};

exports.add = function (req, res, next) {
    res.render('add', {
        title: 'Add user'
    })
};

exports.store = function (req, res, next) {
    var fileName = "";
    if (req.files && req.files.length) {
        var file = req.files[0];
        fileName = file.originalname
        var path = `${__dirname}/public/images/${fileName}`;
        fs.readFile(file.path, function (err, data) {
            if (err) {
                next(err);
            }
            fs.writeFile(path, data, function (err) {
                if (err) {
                    next(err);
                }
            })
        })
    }
    var data = {
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        email: req.body.email,
        avatar: fileName,
        age: req.body.age,
        status: req.body.status === 'on',
        bio: {
            w: req.body.w,
            h: req.body.h,
        }
    };
    model.Users.create(data, function (error, data) {
        if (error) {
            if (fileName) {
                fs.unlink(`${__dirname}/public/images/${fileName}`, function (err) {
                    next(err);
                })
            }
            error.statusCode = 400
            next(error)
        }
        res.redirect('/user');
    });
};

exports.edit = function (req, res, next) {
    model.Users.findOne({
        user_id: req.params.id
    }, function (error, data) {
        if (error) {
            error.statusCode = 400
            next(error)
        }
        res.render('edit', {
            title: 'Edit Users',
            data: data
        });
    })
};

exports.update = function (req, res, next) {
    var data = {
        username: req.body.username,
        password: req.body.password,
        fullname: req.body.fullname,
        email: req.body.email,
        age: req.body.age,
        status: req.body.status === 'on',
        bio: {
            w: req.body.w,
            h: req.body.h,
        }
    };
    if (req.files && req.files.length) {
        var file = req.files[0];
        data.avatar = file.originalname
        var path = `${__dirname}/public/images/${file.originalname}`;
        fs.readFile(file.path, function (err, data) {
            if (err) {
                next(err);
            }
            fs.writeFile(path, data, function (err) {
                if (err) {
                    next(err);
                }
            })
        })
    }
    model.Users.findOneAndUpdate({
        user_id: req.params.id
    }, data, function (error, result) {
        if (error) {
            if (data.avatar) {
                fs.unlink(`${__dirname}/public/images/${fileName}`, function (err) {
                    next(err);
                })
            }
            error.statusCode = 500
            next(error)
        }
        res.redirect(`/user`);
    });
};

exports.delete = function (req, res, next) {
    model.Users.deleteOne({
        user_id: req.params.id
    }, function (error) {
        if (error) {
            error.statusCode = 500
            next(error)
        }
        res.redirect(`/user`);
    });
};
