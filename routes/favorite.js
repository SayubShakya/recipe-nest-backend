const express = require('express');
const { getAllFavorites, getFavoriteById, addFavorite, updateFavorite, deleteFavorite } = require('../controllers/favoriteController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for Favorite management
router.get('/', authenticate, getAllFavorites); // Get all favorites
router.get('/:id', authenticate, getFavoriteById); // Get a single favorite
router.post('/', authenticate, addFavorite); // Add a new favorite
router.put('/:id', authenticate, updateFavorite); // Update favorite info
router.delete('/:id', authenticate, deleteFavorite); // Delete a favorite

module.exports = router;
