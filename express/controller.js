var model = require('./model');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
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

exports.roles = function (req, res, next) {
    model.Roles.find().populate('users').exec(function (err, data) {
        if (err) {
            error.statusCode = 400
            next(error)
        }
        console.log(data.users);
        res.render('roles', {
            title: 'Roles',
            data: data,
        });
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
    // var data = {
    //     username: req.body.username,
    //     password: req.body.password,
    //     fullname: req.body.fullname,
    //     email: req.body.email,
    //     avatar: fileName,
    //     age: req.body.age,
    //     status: req.body.status === 'on',
    //     bio: {
    //         w: req.body.w,
    //         h: req.body.h,
    //     }
    // };
    var user = new model.Users(req.body);
    user.status = req.body.status === 'on'
    user.password = bcrypt.hashSync(req.body.password, 10);
    user.save(function (error, data) {
        if (error) {
            if (fileName) {
                fs.unlink(`${__dirname}/public/images/${fileName}`, function (err) {
                    if (err) {
                        next(err);
                    }
                })
            }
            error.statusCode = 400
            next(error)
        }
        res.redirect('/user');
    });
};

exports.edit = async function (req, res, next) {
    // model.Users.findOne({
    //     user_id: req.params.id
    // }, function (error, data) {
    //     if (error) {
    //         error.statusCode = 400
    //         next(error)
    //     }
    //     res.render('edit', {
    //         title: 'Edit Users',
    //         data: data
    //     });
    // })
    try {
        var data = await model.Func.FindOne(model.Users, {
            user_id: req.params.id
        });
        res.render('edit', {
            title: 'Edit Users',
            data: data
        });
    } catch (error) {
        next(error)
    }
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
    }, data, {
        new: false
    }, function (error, result) {
        if (error) {
            next(error)
        }
        console.log(result);
        if (result.avatar) {
            fs.unlink(`${__dirname}/public/images/${result.avatar}`, function (err) {
                if (err) {
                    next(err);
                }
            })
        }
        res.redirect(`/user`);
    });
};

exports.delete = function (req, res, next) {
    model.Users.findOne(function (error, user) {
        if (error) {
            next(error)
        }
        model.Roles.findOne({
            _id: user.role
        }, (error, role) => {
            if (error) {
                next(error);
            }
            var indx = role.users.indexOf(user._id);
            console.log("dsajhdskajhdjsa", indx, ": ", role.users);
            if (indx >= 0) {
                role.users.splice(indx, 1);
            }
            model.Roles.create(role, function (error) {
                if (error) {
                    next(error);
                }
                if (user.avatar) {
                    fs.unlink(`${__dirname}/public/images/${user.avatar}`, function (err) {
                        if (err) {
                            next(err);
                        }
                    })
                }
                model.Users.deleteOne({
                    _id: user.id
                }, function (error, data) {
                    if (error) {
                        next(error)
                    }
                    res.redirect(`/user`);
                });
            })
        })
    });
};

exports.getLogin = function (req, res, next) {
    res.render('login', {
        title: 'Login'
    })
}

exports.login = async function (req, res, next) {
    try {
        var user = await model.Func.FindOne(model.Users, {
            username: req.body.username
        });
        if (!user) {
            // throw new ErrorEvent("user not exist")
            next("usernotexist");
        }
        if (user.comparePassword(req.body.password)) {
            res.send({
                token: jwt.sign({
                    username: user.username,
                    id: user.user_id
                }, 'RESTFULAPIs')
            })
        }
        res.send({
            message: "error"
        })
    } catch (error) {
        next(error);
    }
}
