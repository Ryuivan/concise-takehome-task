"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // In the User model
      User.belongsToMany(models.Group, {
        through: "UserGroup", // specify the join table
        foreignKey: "userId", // the foreign key in UserGroup for users
        otherKey: "groupId", // the foreign key in UserGroup for groups
      });

      User.hasMany(models.Task, {
        foreignKey: "userId",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
