const Sequelize = require('sequelize');
const config = require('../config/config.js')['development'];
const sequelize = new Sequelize(config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require('./user')(sequelize, Sequelize);
db.Role = require('./role')(sequelize, Sequelize);
db.Cuisine = require('./cuisine')(sequelize, Sequelize);
db.Recipe = require('./recipe')(sequelize, Sequelize);
db.Favorite = require('./favorite')(sequelize, Sequelize);

// Set associations
db.User.hasMany(db.Recipe, { foreignKey: 'recipe_by' });
db.Recipe.belongsTo(db.User, { foreignKey: 'recipe_by' });

db.Cuisine.hasMany(db.Recipe, { foreignKey: 'cuisine' });
db.Recipe.belongsTo(db.Cuisine, { foreignKey: 'cuisine' });

db.User.hasMany(db.Favorite, { foreignKey: 'user_id' });
db.Recipe.hasMany(db.Favorite, { foreignKey: 'recipe_id' });

module.exports = db;
