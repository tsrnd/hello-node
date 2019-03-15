var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.listAllUser = (req, res) => {
    console.log("aaaa")
    User.find({}, (err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    });
}
exports.createUser = (req, res) => {
    var newUser = new User(req.body);
    newUser.save((err, data) => {
        if (err) {
            res.send(err)
        }
        res.json(data)
    })
}

exports.readUser = (req, res) => {
    User.findById(req.params.userID, (err, data) => {
        if (err)
            res.send(err);
        res.json(data)
    })
}

exports.updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.userID}, req.body, {new: true}, (err, data) => {
        if(err)
            res.send(err);
        res.json(data);
    });
};

exports.deleteUser = (req, res) => {
    User.remove({
        _id: req.params.userID
    }, (err, data) => {
        if (err)
            res.send(err);
        res.json({message: 'delete user successful'});
    });
}
