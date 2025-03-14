module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define('Favorite', {
      rating: { type: Sequelize.ENUM('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'), defaultValue: '0' },
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      is_favourite: { type: Sequelize.BOOLEAN, defaultValue: false },
      created_date: { type: Sequelize.DATE, defaultValue: true },
      updated_date: { type: Sequelize.DATE, defaultValue: true },
    },{
      timestamps: false, // Disable default Sequelize timestamps (createdAt, updatedAt)
    });
    return Favorite;
  };
  