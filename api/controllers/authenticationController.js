'use strict'

var passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.register = function(req, res) {
    var user = new User();

    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function(err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        });
    });
};

exports.login = function(req, res) {
    passport.authenticate('local', function(err, user, info){
        var token;

        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if(user){
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);
};