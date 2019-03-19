const Developer = require('../model/developers');

exports.index = async function (req, res, next) {
    Developer.find().populate('team').populate('project').exec(function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
};

exports.show = function(req, res, next) {
    Developer.findOne({_id: req.params.id}).populate('team').exec(function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
}

exports.store = function(req, res, next) {
    developer = {
        name: req.body.name,
        project: req.body.project,
        team: req.body.team
    }

    Developer.create(developer, function(err, data) {
        if (err) {
            res.send('err')
        }
        res.send(developer);
    });
}

exports.update = function(req, res, next) {
    var update = {};
    if (req.body.name != undefined) {
        update.name = req.body.name;
    }
    if (req.body.project != undefined) {
        update.project = req.body.project;
    }
    if (req.body.project != undefined) {
        update.project = req.body.project;
    }
    
    Developer.findOneAndUpdate({_id: req.params.id}, update, {new:true}, function(err, data) {
        if (err) {
            res.send('err');
        }
        res.send(data);
    });
}

exports.delete = function(req, res, next) {
    Developer.findOneAndDelete({_id: req.params.id}, function(err, data) {
        if (err) {
            res.send('err');
        }
        res.send();
    });
}
