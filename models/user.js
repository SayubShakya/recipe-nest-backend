module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
      first_name: { type: Sequelize.STRING },
      last_name: { type: Sequelize.STRING },
      phone_number: { type: Sequelize.STRING },
      image_url: { type: Sequelize.STRING },
      about: { type: Sequelize.TEXT },
      email: { type: Sequelize.STRING, unique: true },
      password: { type: Sequelize.STRING },
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      created_date: { type: Sequelize.DATE, defaultValue: true },
      updated_date: { type: Sequelize.DATE, defaultValue: true },
    },{
      timestamps: false, // Disable default Sequelize timestamps (createdAt, updatedAt)
    });
    return User;
  };
  