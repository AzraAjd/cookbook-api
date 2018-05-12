var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Recipe = require('./api/models/recipeModel'),
    bodyParser = require('body-parser');

// mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Recipesdb')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/recipeRoutes');
routes(app);

app.listen(port);

console.log('cookbook RESTful API server started on: ' + port);