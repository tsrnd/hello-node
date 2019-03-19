const Team = require('../model/teams');
const Developer = require('../model/developers');

exports.index = function (req, res, next) {
    Team.find().exec(function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
};

exports.show = function(req, res, next) {
    Team.findOne({_id: req.params.id}).exec(function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
}

exports.store = function(req, res, next) {
    team = {
        name: req.body.name,
    }

    Team.create(team, function(err, data) {
        if (err) {
            next(err);
        }
        res.send(team);
    });
}

exports.update = function(req, res, next) {
    var update = {};
    if (req.body.name != undefined) {
        update.name = req.body.name;
    }
    
    Team.findOneAndUpdate({_id: req.params.id}, update, {new:true}, function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
}

exports.delete = function(req, res, next) {
    Team.findOneAndDelete({_id: req.params.id}, function(err, data) {
        if (err) {
            next(err);
        }
    });

    Developer.update({team: req.params.id}, {team: null}, function(err, data) {
        if (err) {
            next(err);
        }
    });

    res.send();
}
