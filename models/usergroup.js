"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserGroup.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user", 
      });

      UserGroup.belongsTo(models.Group, {
        foreignKey: "groupId",
        as: "group", 
      });
    }
  }
  UserGroup.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      groupId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Group",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserGroup",
    }
  );
  return UserGroup;
};
