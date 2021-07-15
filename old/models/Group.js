const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Group = sequelize.define(
    "groups",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      featured: {
        type: Sequelize.INTEGER,
      },
      customerId: {
        type: Sequelize.INTEGER,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  );

  return Group;
};
