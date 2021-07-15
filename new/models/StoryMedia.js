const Sequelize = require("sequelize");

module.exports = (sequelize, {Media, Story}) => {
  const StoryMedia = sequelize.define(
    "storymedias",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      storyId: {
        type: Sequelize.INTEGER,
        references: {
          model: Story,
          key: "id",
        }
      },
      mediaId: {
        type: Sequelize.INTEGER,
        references: {
          model: Media,
          key: "id",
        }
      },
      isCover: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: true,
    }
  );

  return StoryMedia;
};
