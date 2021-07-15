const Sequelize = require("sequelize");

module.exports = (sequelize, {Media, Group}) => {
  const GroupMedia = sequelize.define(
    "groupmedias",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: Group,
          key: "id",
        },
      },
      mediaId: {
        type: Sequelize.INTEGER,
        references: {
          model: Media,
          key: "id",
        },
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

  return GroupMedia
};
