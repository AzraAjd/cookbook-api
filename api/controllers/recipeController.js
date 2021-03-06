'use strict';

var mongoose = require('mongoose'),
    Recipe = mongoose.model('Recipe');

exports.list = function (req, res) {
    Recipe.find({}, function (err, recipe) {
        if (err)
            res.send(err);
        res.json(recipe);
    });
};

exports.create = function (req, res) {
    var new_recipe = new Recipe(req.body);
    new_recipe.save(function (err, recipe) {
        if (err)
            res.send(err);
        res.json(recipe);
    });
};

exports.get = function (req, res) {
    Recipe.findById(req.params.recipeId, function (err, recipe) {
        if (err)
            res.send(err);
        res.json(recipe);
    });
};

exports.update = function (req, res) {
    Recipe.findOneAndUpdate({_id: req.params.recipeId}, req.body, {new: true}, function (err, recipe) {
        if (err)
            res.send(err);
        res.json(recipe);
    });
};

exports.delete = function (req, res) {
    Recipe.remove({
        _id: req.params.recipeId
    }, function (err, recipe) {
        if (err)
            res.send(err);
        res.json({message: 'Recipe successfully deleted'});
    });
};