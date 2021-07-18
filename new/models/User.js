const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      socialUrl: {
        type: Sequelize.STRING,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  );

  return User;
};
