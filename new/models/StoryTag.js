const Sequelize = require("sequelize");

module.exports = (sequelize, {Tag, Story}) => {
  const StoryTag = sequelize.define(
    "storytags",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: Tag,
          key: "id",
        },
      },
      storyId: {
        type: Sequelize.INTEGER,
        references: {
          model: Story,
          key: "id",
        },
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  );

  return StoryTag;
};
