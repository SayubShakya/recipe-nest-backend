const express = require('express');
const { register, login, logout } = require('../controllers/authController');

const router = express.Router();

router.post('/register', (req, res) => {console.log("asd")});
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;
