'use strict';

var express = require('express');
var recipeCategories = require('../controllers/categoriesController');
var recipes = require('../controllers/recipeController');
var users = require('../controllers/userController');
var authentication = require('../controllers/authenticationController');
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env['JWT_SECRET'],
    userProperty: 'payload'
});

var router = express.Router();

//recipe routes
router.route('/recipes')
    .get(recipes.list)
    .post(recipes.create);

router.route('/recipes/:recipeId')
    .get(recipes.get)
    .put(recipes.update)
    .delete(recipes.delete)

router.route('/users')
    .get(users.list)
    .post(authentication.register);

router.get('/users/:userId', auth, users.get);
router.put('/users/:userId', auth, users.update);
router.delete('/users/:userId', auth, users.delete);

router.route('/recipe-categories')
    .get(recipeCategories.list)

module.exports = router;