const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json').newdb;

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
const Tag = require("./models/Tag")(sequelize, Sequelize.DataTypes);
const GroupTag = require("./models/GroupTag")(sequelize, {Tag, Group});
const StoryTag = require("./models/StoryTag")(sequelize, {Tag, Story});
const Media = require("./models/Media")(sequelize, Sequelize.DataTypes);
const GroupMedia = require("./models/GroupMedia")(sequelize, {Media, Group});
const StoryMedia = require("./models/StoryMedia")(sequelize, {Media, Story});

const db = {
  User,
  Story,
  HomeStory,
  Group,
  Customer,
  Tag,
  GroupTag,
  GroupMedia,
  StoryTag,
  StoryMedia,
  Media,
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

Tag.belongsToMany(Group, {through: GroupTag})
Group.belongsToMany(Tag, {through: GroupTag})
Tag.belongsToMany(Story, {through: StoryTag})
Story.belongsToMany(Tag, {through: StoryTag})

Media.belongsToMany(Group, {through: GroupMedia})
Group.belongsToMany(Media, {through: GroupMedia})
Media.belongsToMany(Story, {through: StoryMedia})
Story.belongsToMany(Media, {through: StoryMedia})
//////////////////////////////////
Story.belongsTo(User, { as: "user" })
Story.belongsTo(Group, { as: "group" })
Group.belongsTo(Customer, { as: "customer" })
Story.hasOne(HomeStory, {
  foreignKey: { name: "storyId", allowNull: true },
})
HomeStory.belongsTo(Story, {as: "story"})

module.exports = { db, sequelize };
