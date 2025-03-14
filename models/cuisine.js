module.exports = (sequelize, Sequelize) => {
  const Cuisine = sequelize.define("Cuisine", {
    name: { type: Sequelize.STRING },
    image_url: { type: Sequelize.STRING },
    is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
    created_date: { type: Sequelize.DATE, defaultValue: true },
    updated_date: { type: Sequelize.DATE, defaultValue: true },
  },{
    timestamps: false, // Disable default Sequelize timestamps (createdAt, updatedAt)
  });
  return Cuisine;
};