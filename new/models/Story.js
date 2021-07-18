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
      },
      summary: {
        type: Sequelize.TEXT,
      },
      full: {
        type: Sequelize.TEXT,
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
