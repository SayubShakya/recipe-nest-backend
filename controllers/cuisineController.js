const { Cuisine } = require('../models');

// Get all cuisines
const getAllCuisines = async (req, res) => {
  try {
    const cuisines = await Cuisine.findAll();
    res.status(200).json(cuisines);
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Error fetching cuisines' });
  }
};

// Get a single cuisine by ID
const getCuisineById = async (req, res) => {
  try {
    const cuisine = await Cuisine.findByPk(req.params.id);
    if (!cuisine) {
      return res.status(404).json({ message: 'Cuisine not found' });
    }
    res.status(200).json(cuisine);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cuisine' });
  }
};

// Create a new cuisine
const createCuisine = async (req, res) => {
  try {
    const { name, image_url } = req.body;
    const newCuisine = await Cuisine.create({ name, image_url });
    res.status(201).json(newCuisine);
  } catch (err) {
    res.status(500).json({ message: 'Error creating cuisine' });
  }
};

// Update a cuisine
const updateCuisine = async (req, res) => {
  try {
    const { name, image_url } = req.body;
    const cuisine = await Cuisine.findByPk(req.params.id);

    if (!cuisine) {
      return res.status(404).json({ message: 'Cuisine not found' });
    }

    cuisine.name = name || cuisine.name;
    cuisine.image_url = image_url || cuisine.image_url;

    await cuisine.save();
    res.status(200).json(cuisine);
  } catch (err) {
    res.status(500).json({ message: 'Error updating cuisine' });
  }
};

// Delete a cuisine
const deleteCuisine = async (req, res) => {
  try {
    const cuisine = await Cuisine.findByPk(req.params.id);
    if (!cuisine) {
      return res.status(404).json({ message: 'Cuisine not found' });
    }
    await cuisine.destroy();
    res.status(200).json({ message: 'Cuisine deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting cuisine' });
  }
};

module.exports = { getAllCuisines, getCuisineById, createCuisine, updateCuisine, deleteCuisine };
