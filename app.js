const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipe');
const userRoutes = require('./routes/user');
const cuisineRoutes = require('./routes/cuisine');
const favoriteRoutes = require('./routes/favorite');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/recipes', recipeRoutes);
app.use('/users', userRoutes);
app.use('/cuisines', cuisineRoutes);
app.use('/favorites', favoriteRoutes);



// Start the server
app.listen(9001, () => {
  console.log(`Server is running on port`);
});


