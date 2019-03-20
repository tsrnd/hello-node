User = require('../models/userModel');

exports.index = function(req, res, next) {
    var limit = 2;
    User.find().sort({ firstName: -1}).limit(limit).exec(function(err, users){
        if (err) 
            next(err);
        res.render('index',{
            title: "List Users",
            data: users,
        })
    })
}

exports.add = function(req, res, next){
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.save(function(err){
        if (err){
            next(err);
        }
        res.json({
            message: "Created successfully!",
            data: user
        });
    });
};
exports.detail = function(req, res, next){
    User.findById(req.params.userId, function(err, user){
        if(err) 
            next(err);
        res.render('detail',{
            data: user
        })
    })
}
exports.update = function(req, res, next) {
    User.findById(req.params.userId, function(err, user){
        if(err)
            next(err);
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.phone = req.body.phone;

        user.save(function(err,next){
            if(err)
                next(err);
            res.json({
                message: "Updated Successfully!",
                data: user
            });
        });
    });
}

exports.delete = function(req, res,next){
    User.remove({_id:req.params.userId}, function(err){
        if(err)
            next(err);
        res.json({
            message:"Deleted Successfully!"
        })

    })
}
