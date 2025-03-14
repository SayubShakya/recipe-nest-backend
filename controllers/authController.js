const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User, Role} = require('../models');
const e = require("express");

const register = async (req, res) => {
    try {
        const {first_name, last_name, email, password, phone_number} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            email,
            password: hashedPassword,
            phone_number,
            role_id: 3, // Default role 'FOOD_LOVER'
        });

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(201).json({token, user});
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Error registering user'});
    }
};

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({where: {email}, include: {model: Role, as: 'role'}, attributes: { exclude: ['created_date', 'updated_date', 'is_active'] }});

        if (!user) {
            return res.status(400).json({message: 'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({message: 'Invalid credentials'});
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});

        const userData = {
            name: user.first_name + ' ' + user.last_name,
            role: user.role.name,
            email: user.email,
            phone_number: user.phone_number,
            image_url: user.image_url,
        }
        res.status(200).json({data: {token, user: userData}});
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Error logging in'});
    }
};

const logout = (req, res) => {
    res.status(200).json({message: 'Logged out successfully'});
};

module.exports = {register, login, logout};
