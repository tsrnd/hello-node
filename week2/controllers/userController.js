User = require('../models/userModel');

exports.index = function(req, res) {
    User.find().sort({ firstName: -1}).exec(function(err, users){
        if (err) 
            res.json({
                status: "Error",
                message:err
            });
        res.render('index',{
            title: "List Users",
            data: users,
        })
    })
}

exports.add = function(req, res){
    var user = new User();
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.save(function(err){
        if (err){
            res.send(err);
        }
        res.json({
            message: "Created successfully!",
            data: user
        });
    });
};
exports.detail = function(req, res){
    User.findById(req.params.userId, function(err, user){
        if(err) 
            res.send(err);
        res.render('detail',{
            data: user
        })
    })
}
exports.update = function(req, res) {
    User.findById(req.params.userId, function(err, user){
        if(err)
            res.send(err)
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.phone = req.body.phone;

        user.save(function(err){
            if(err)
                res.send(err);
            res.json({
                message: "Updated Successfully!",
                data: user
            });
        });
    });
}

exports.delete = function(req, res){
    User.remove({_id:req.params.userId}, function(err){
        if(err)
            res.send(err);
        res.json({
            message:"Deleted Successfully!"
        })

    })
}
