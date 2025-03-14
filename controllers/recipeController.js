const { Recipe, Cuisine, User } = require('../models');

// Get all recipes
const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.findAll({ include: [Cuisine, User] });
    res.status(200).json(recipes);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching recipes' });
  }
};

// Get a single recipe by ID
const getRecipeById = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id, { include: [Cuisine, User] });
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    res.status(200).json(recipe);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching recipe' });
  }
};

// Create a new recipe
const createRecipe = async (req, res) => {
  try {
    const { title, description, recipe, ingredients, cuisine, recipe_by, image_url } = req.body;
    const newRecipe = await Recipe.create({ title, description, recipe, ingredients, cuisine, recipe_by, image_url });
    res.status(201).json(newRecipe);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error creating recipe' });
  }
};

// Update a recipe
const updateRecipe = async (req, res) => {
  try {
    const { title, description, recipe, ingredients, cuisine, image_url } = req.body;
    const recipeToUpdate = await Recipe.findByPk(req.params.id);

    if (!recipeToUpdate) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    recipeToUpdate.title = title || recipeToUpdate.title;
    recipeToUpdate.description = description || recipeToUpdate.description;
    recipeToUpdate.recipe = recipe || recipeToUpdate.recipe;
    recipeToUpdate.ingredients = ingredients || recipeToUpdate.ingredients;
    recipeToUpdate.cuisine = cuisine || recipeToUpdate.cuisine;
    recipeToUpdate.image_url = image_url || recipeToUpdate.image_url;

    await recipeToUpdate.save();
    res.status(200).json(recipeToUpdate);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error updating recipe' });
  }
};

// Delete a recipe
const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByPk(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    await recipe.destroy();
    res.status(200).json({ message: 'Recipe deleted successfully' });
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error deleting recipe' });
  }
};

module.exports = { getAllRecipes, getRecipeById, createRecipe, updateRecipe, deleteRecipe };
