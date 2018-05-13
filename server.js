'use strict';

require('./api/helpers/helper.js')

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Recipe = require('./api/models/recipeModel'),
    User = require('./api/models/userModel'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL, {
    user: process.env.MONGO_USER, pass: process.env.MONGO_PASS});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/appRoutes');
routes(app);

app.listen(port);

console.log('cookbook RESTful API server started on: ' + port);