module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define('Role', {
      name: { type: Sequelize.STRING },
      is_active: { type: Sequelize.BOOLEAN, defaultValue: true },
      created_date: { type: Sequelize.DATE, defaultValue: true },
      updated_date: { type: Sequelize.DATE, defaultValue: true },
    },{
      timestamps: false, // Disable default Sequelize timestamps (createdAt, updatedAt)
    });
    return Role;
  };
  