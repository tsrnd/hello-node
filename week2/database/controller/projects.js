const Developer = require('../model/developers');
const Project = require('../model/projects');

exports.index = function (req, res, next) {
    Project.find().exec(function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
};

exports.show = function(req, res, next) {
    Project.findOne({_id: req.params.id}).exec(function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
}

exports.store = function(req, res, next) {
    project = {
        name: req.body.name,
    }

    Project.create(project, function(err, data) {
        if (err) {
            next(err);
        }
        res.send(project);
    });
}

exports.update = function(req, res, next) {
    var update = {};
    if (req.body.name != undefined) {
        update.name = req.body.name;
    }
    
    Project.findOneAndUpdate({_id: req.params.id}, update, {new:true}, function(err, data) {
        if (err) {
            next(err);
        }
        res.send(data);
    });
}

exports.delete = function(req, res, next) {
    Project.findOneAndDelete({_id: req.params.id}, function(err, data) {
        if (err) {
            next(err);
        }
    });

    Developer.update({project: req.params.id}, {project: null}, function(err, data) {
        if (err) {
            next(err);
        }
    });

    res.send();
}
