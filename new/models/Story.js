const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Story = sequelize.define(
    "stories",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      summary: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      full: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      featured: {
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

  return Story;
};
