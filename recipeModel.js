const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    idUser: mongoose.Schema.Types.ObjectId,
    name: String,
    type: String,
    Ingredient: [{
        name: String,
        category: String,
        picture: String,
        quantity: Number,
        unit: String,
        season: String
    }],
    cookingTime: Number,
    description: String,
    picture: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;