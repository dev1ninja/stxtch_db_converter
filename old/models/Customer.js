const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Customer = sequelize.define(
    "customers",
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
      whiteLabelLogo: {
        type: Sequelize.STRING,
      },
      summary: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  );

  return Customer;
};
