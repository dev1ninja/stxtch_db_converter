const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  const Media = sequelize.define(
    "medias",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      url: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM('image', 'video'),
      },
      width: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      height: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
   	  duration: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      filesize: {
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

  return Media;
};
