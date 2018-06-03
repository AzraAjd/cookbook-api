'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.list = function (req, res) {
    User.find({}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.get = function (req, res) {
    if (!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private profile"
        });
    } else {
        // Otherwise continue
        User.findById(req.payload._id, function(err, user) {
            if (err)
                res.send(err);
            res.status(200).json(user);
        });
    }
};

exports.update = function (req, res) {
    User.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.delete = function (req, res) {
    User.remove({
        _id: req.params.userId
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({message: 'User successfully deleted'});
    });
};