module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define('Recipe', {
      title: { type: Sequelize.STRING },
      description: { type: Sequelize.TEXT },
      recipe: { type: Sequelize.TEXT },
      ingredients: { type: Sequelize.TEXT },
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      image_url: { type: Sequelize.STRING },
      created_date: { type: Sequelize.DATE, defaultValue: true },
      updated_date: { type: Sequelize.DATE, defaultValue: true },
    },{
      timestamps: false, // Disable default Sequelize timestamps (createdAt, updatedAt)
    });
    return Recipe;
  };
  