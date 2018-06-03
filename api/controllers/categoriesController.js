'use strict';

exports.list = function (req, res) {
    res.json(['Breakfast', 'Lunch', 'Beverages', 'Appetizers', 'Soups', 'Salads', 'Maindishes: Beef',
        'Maindishes: Poultry', 'Maindishes: Pork', 'Maindishes: Seafood', 'Maindishes: Vegetarian',
        'Sidedishes: Vegetables', 'Sidedishes: Other', 'Desserts', 'Canning/Freezing', 'Breads',
        'Holidays', 'Entertaining']);
};