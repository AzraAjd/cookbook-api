'use strict';

require('./api/config/helper.js')

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Recipe = require('./api/models/recipeModel'),
    User = require('./api/models/userModel'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    cors = require('cors');

// mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, {
    user: process.env.MONGO_USER, pass: process.env.MONGO_PASS});

app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({"message" : err.name + ": " + err.message});
    }
});

var routes = require('./api/routes/appRoutes');
app.use('/api', routes);

app.listen(port);

console.log('cookbook RESTful API server started on: ' + port);