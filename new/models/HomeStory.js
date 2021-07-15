const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const HomeStory = sequelize.define(
    "homeStories",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      spot: {
        type: Sequelize.INTEGER,
      },
      ratio: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: true,
    }
  );

  return HomeStory;
};
