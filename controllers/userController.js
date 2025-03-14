const { User, Role } = require('../models');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ include: Role });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

// Get a single user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { include: Role });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user' });
  }
};

// Create a new user
const createUser = async (req, res) => {
  try {
    const { first_name, last_name, email, password, phone_number, role_id } = req.body;
    const newUser = await User.create({ first_name, last_name, email, password, phone_number, role_id });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Update a user
const updateUser = async (req, res) => {
  try {
    const { first_name, last_name, email, phone_number, role_id } = req.body;
    const user = await User.findByPk(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.first_name = first_name || user.first_name;
    user.last_name = last_name || user.last_name;
    user.email = email || user.email;
    user.phone_number = phone_number || user.phone_number;
    user.role_id = role_id || user.role_id;

    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error updating user' });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    await user.destroy();
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting user' });
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };
