'use strict';
module.exports = function(app) {
    var recipes = require('../controllers/recipeController');
    var users = require('../controllers/userController');

    //recipe routes
    app.route('/recipes')
        .get(recipes.list)
        .post(recipes.create);

    app.route('/recipes/:recipeId')
        .get(recipes.get)
        .put(recipes.update)
        .delete(recipes.delete)

    //user routes
    app.route('/users')
        .get(users.list)
        .post(users.create);

    app.route('/users/:userId')
        .get(users.get)
        .put(users.update)
        .delete(users.delete)
};