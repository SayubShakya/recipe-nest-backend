const { Favorite, User, Recipe } = require('../models');

// Get all favorites
const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.findAll({ include: [User, Recipe] });
    res.status(200).json(favorites);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching favorites' });
  }
};

// Get a favorite by ID
const getFavoriteById = async (req, res) => {
  try {
    const favorite = await Favorite.findByPk(req.params.id, { include: [User, Recipe] });
    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }
    res.status(200).json(favorite);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching favorite' });
  }
};

// Add a recipe to favorites
const addFavorite = async (req, res) => {
  try {
    const { user_id, recipe_id, is_favourite, rating } = req.body;
    const newFavorite = await Favorite.create({ user_id, recipe_id, is_favourite, rating });
    res.status(201).json(newFavorite);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error adding favorite' });
  }
};

// Update a favorite
const updateFavorite = async (req, res) => {
  try {
    const { is_favourite, rating } = req.body;
    const favorite = await Favorite.findByPk(req.params.id);

    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    favorite.is_favourite = is_favourite || favorite.is_favourite;
    favorite.rating = rating || favorite.rating;

    await favorite.save();
    res.status(200).json(favorite);
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error updating favorite' });
  }
};

// Delete a favorite
const deleteFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findByPk(req.params.id);
    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }
    await favorite.destroy();
    res.status(200).json({ message: 'Favorite deleted successfully' });
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error deleting favorite' });
  }
};

module.exports = { getAllFavorites, getFavoriteById, addFavorite, updateFavorite, deleteFavorite };
