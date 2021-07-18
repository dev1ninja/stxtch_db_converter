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
      },
      description: {
        type: Sequelize.STRING,
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
