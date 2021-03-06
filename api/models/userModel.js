'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var UserSchema = new Schema({
    first_name: {
        type: String,
        required: 'Please enter your first name'
    },
    last_name: {
        type: String,
        required: 'Please enter your last name'
    },
    email: {
        type: String,
        required: 'Please enter your email',
        unique: true
    },
    hash: {
        type: String
    },
    salt: {
        type: String
    },
    city: {
        type: String
    },
    zip: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

UserSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000),
    }, process.env['JWT_SECRET']);
};

module.exports = mongoose.model('User', UserSchema);