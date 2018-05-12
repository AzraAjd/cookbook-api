'use strict';
module.exports = function(app) {
    var recipes = require('../controllers/recipeController');

    //recipe routes
    app.route('/recipes')
        .get(recipes.list)
        .post(recipes.create);

    app.route('/recipes/:recipeId')
        .get(recipes.get)
        .put(recipes.update)
        .delete(recipes.delete)
};