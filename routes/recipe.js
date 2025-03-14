const express = require('express');
const { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe } = require('../controllers/recipeController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for Recipe management
router.get('/', authenticate, getAllRecipes); // Get all recipes
router.get('/:id', authenticate, getRecipeById); // Get a single recipe
router.post('/', authenticate, createRecipe); // Create a new recipe
router.put('/:id', authenticate, updateRecipe); // Update recipe info
router.delete('/:id', authenticate, deleteRecipe); // Delete a recipe

module.exports = router;
