var userModel = require('./model');

exports.list = function (req, res, next) {
    var currentPage = req.query.page || 1;
    var limit = 5;
    userModel.User.collection.countDocuments(function (err, count) {
        userModel.User.find().sort({
            qty: -1
        }).limit(limit).skip(limit * (currentPage - 1)).exec(function (error, data) {
            if (err || error) {
                error.statusCode = 400
                next(error)
            }
            var pages = Math.ceil(count / limit);
            res.render('users', {
                title: 'List Users',
                data: data,
                pages: pages
            });
        })
    })
};

exports.view = function (req, res, next) {
    userModel.User.findOne({
        _id: req.params.id
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
    var data = {
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size: {
            w: req.body.w,
            h: req.body.h,
            uom: req.body.uom
        }
    };
    userModel.User.create(data, function (error, data) {
        if (error) {
            error.statusCode = 400
            next(error)
        }
        res.redirect('/user');
    });
};

exports.edit = function (req, res, next) {
    userModel.User.findOne({
        _id: req.params.id
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
        item: req.body.item,
        qty: req.body.qty,
        status: req.body.status,
        size: {
            w: req.body.w,
            h: req.body.h,
            uom: req.body.uom
        }
    };
    userModel.User.update({
        _id: req.params.id
    }, data, function (error, data) {
        if (error) {
            error.statusCode = 500
            next(error)
        }
        res.redirect(`/user`);
    });
};

exports.delete = function (req, res, next) {
    console.log(req.params.id);
    userModel.User.deleteOne({
        _id: req.params.id
    }, function (error) {
        if (error) {
            error.statusCode = 500
            next(error)
        }
        res.redirect(`/user`);
    });
};
