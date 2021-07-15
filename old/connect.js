const Sequelize = require("sequelize");
var config = require(__dirname + '/../config/config.json').dev;

let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  { host: config.host, dialect: config.dialect }
);

const User = require("./models/User")(sequelize, Sequelize.DataTypes);
const Story = require("./models/Story")(sequelize, Sequelize.DataTypes);
const HomeStory = require("./models/HomeStory")(sequelize, Sequelize.DataTypes);
const Group = require("./models/Group")(sequelize, Sequelize.DataTypes);
const Customer = require("./models/Customer")(sequelize, Sequelize.DataTypes);

const db = {
  User,
  Story,
  HomeStory,
  Group,
  Customer,
};



Customer.hasMany(User, {
  foreignKey: { name: "customerId", allowNull: false },
  as: "userCustomer",
});
Customer.hasMany(Group, {
  foreignKey: { name: "customerId", allowNull: false },
  as: "groups"
})
User.hasMany(Story, {
  foreignKey: { name: "userId", allowNull: false },
  as: "storyUser",
});
Group.hasMany(Story, {
  foreignKey: { name: "groupId", allowNull: false },
  as: "stories",
});

Story.belongsTo(User, { as: "user" })
Story.belongsTo(Group, { as: "group" })
Group.belongsTo(Customer, { as: "customer" })
Story.hasOne(HomeStory, {
  foreignKey: { name: "storyId", allowNull: true },
})
HomeStory.belongsTo(Story, {as: "story"})

module.exports = { db, sequelize };
