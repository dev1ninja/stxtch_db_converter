const Sequelize = require("sequelize");

module.exports = (sequelize, {Tag, Group}) => {
  const GroupTag = sequelize.define(
    "grouptags",
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
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: Group,
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

  return GroupTag;
};
