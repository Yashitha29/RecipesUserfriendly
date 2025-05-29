const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: String,
  difficulty: String,
  rating: Number,
  cuisine: String,
  ingredients: [String],
  instructions: [String],
  prepTimeMinutes: Number,
  cookTimeMinutes: Number,
  caloriesPerServing: Number,
  tags: [String],
  reviewCount: Number,
}, { timestamps: true });

module.exports = mongoose.model('Recipe', RecipeSchema);
