'use strict';

var mongoose = require('mongoose'),
    Role = mongoose.model('Role');

exports.list = function (req, res) {
    Role.find({}, function (err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.create = function (req, res) {
    var new_role = new Role(req.body);
    new_role.save(function (err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.get = function (req, res) {
    Role.findById(req.params.roleId, function (err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.update = function (req, res) {
    Role.findOneAndUpdate({_id: req.params.roleId}, req.body, {new: true}, function (err, role) {
        if (err)
            res.send(err);
        res.json(role);
    });
};

exports.delete = function (req, res) {
    Role.remove({
        _id: req.params.roleId
    }, function (err, role) {
        if (err)
            res.send(err);
        res.json({message: 'Role successfully deleted'});
    });
};