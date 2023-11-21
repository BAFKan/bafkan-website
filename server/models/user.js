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
      User.hasMany(models.Project, { foreignKey: "UserId" });
      User.hasMany(models.Project_Todo, { foreignKey: "UserId" });
      // define association here
    }
  }
  User.init(
    {
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "fullname cannot be empty",
          },
          notNull: {
            msg: "fullname cannot be null",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "email already register",
        },
        validate: {
          notEmpty: {
            msg: "email cannot be empty",
          },
          notNull: {
            msg: "email cannot be null",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "password cannot be empty",
          },
          notNull: {
            msg: "password cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
