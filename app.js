const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');
const recipeRoutes = require('./routes/recipe');
const userRoutes = require('./routes/user');
const cuisineRoutes = require('./routes/cuisine');
const favoriteRoutes = require('./routes/favorite');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const defaultPassword = "password1";
bcrypt.hash(defaultPassword, 10).then(hash => {
    console.log(`password: ${defaultPassword}, hashed: : ${hash}`);
})


// Routes
app.use('/api/rest/', authRoutes);
app.use('/api/rest/recipes', recipeRoutes);
app.use('/api/rest/users', userRoutes);
app.use('/api/rest/cuisines', cuisineRoutes);
app.use('/api/rest/favorites', favoriteRoutes);

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


