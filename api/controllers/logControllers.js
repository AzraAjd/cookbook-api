'use strict';

var mongoose = require('mongoose'),
    Log = mongoose.model('Log');

exports.list = function (req, res) {
    Log.find({}, function (err, log) {
        if (err)
            res.send(err);
        res.json(log);
    });
};

exports.create = function (req, res) {
    var new_log = new Log(req.body);
    new_log.save(function (err, log) {
        if (err)
            res.send(err);
        res.json(log);
    });
};

exports.get = function (req, res) {
    Log.findById(req.params.logId, function (err, log) {
        if (err)
            res.send(err);
        res.json(log);
    });
};

exports.update = function (req, res) {
    Log.findOneAndUpdate({_id: req.params.logId}, req.body, {new: true}, function (err, log) {
        if (err)
            res.send(err);
        res.json(log);
    });
};

exports.delete = function (req, res) {
    Log.remove({
        _id: req.params.logId
    }, function (err, log) {
        if (err)
            res.send(err);
        res.json({message: 'Log successfully deleted'});
    });
};