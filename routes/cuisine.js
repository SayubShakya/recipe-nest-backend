const express = require('express');
const { getAllCuisines, getCuisineById, createCuisine, updateCuisine, deleteCuisine } = require('../controllers/cuisineController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for Cuisine management
router.get('/', authenticate, getAllCuisines); // Get all cuisines
router.get('/:id', authenticate, getCuisineById); // Get a single cuisine
router.post('/', authenticate, createCuisine); // Create a new cuisine
router.put('/:id', authenticate, updateCuisine); // Update cuisine info
router.delete('/:id', authenticate, deleteCuisine); // Delete a cuisine

module.exports = router;
