const express = require('express');
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Routes for User management
router.get('/', authenticate, getAllUsers); // Get all users
router.get('/:id', authenticate, getUserById); // Get a single user
router.post('/', authenticate, createUser); // Create a new user
router.put('/:id', authenticate, updateUser); // Update user info
router.delete('/:id', authenticate, deleteUser); // Delete a user

module.exports = router;
