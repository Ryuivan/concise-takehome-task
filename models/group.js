"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // In the Group model
      Group.belongsToMany(models.User, {
        through: "UserGroup", // specify the join table
        foreignKey: "groupId", // the foreign key in UserGroup for groups
        otherKey: "userId", // the foreign key in UserGroup for users
      });
    }
  }
  Group.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Group",
    }
  );
  return Group;
};
