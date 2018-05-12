'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    title: {
        type: String,
        required: 'Please enter the recipe title'
    },
    category: {
        type: [{
            type: String,
            enum: ['Breakfast', 'Lunch', 'Beverages', 'Appetizers', 'Soups', 'Salads', 'Maindishes: Beef',
                   'Maindishes: Poultry', 'Maindishes: Pork', 'Maindishes: Seafood', 'Maindishes: Vegetarian',
                   'Sidedishes: Vegetables', 'Sidedishes: Other', 'Desserts', 'Canning/Freezing', 'Breads',
                   'Holidays', 'Entertaining']
        }],
        default: ['Lunch']
    },
    ingredients: {
        type: String,
        required: 'Please enter ingredients'
    },
    directions: {
        type: String,
        required: 'Please provide dish preparation instructions'
    },
    ready_in: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Recipe', RecipeSchema);