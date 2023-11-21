"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todo.belongsTo(models.Project, { foreignKey: "ProjectId" });
      // define association here
    }
  }
  Todo.init(
    {
      name_todo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "name_todo cannot be empty",
          },
          notNull: {
            msg: "name_todo cannot be null",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "description cannot be empty",
          },
          notNull: {
            msg: "description cannot be null",
          },
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "status cannot be empty",
          },
          notNull: {
            msg: "status cannot be null",
          },
        },
      },
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "ProjectId cannot be empty",
          },
          notNull: {
            msg: "ProjectId cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Todo",
    }
  );
  return Todo;
};
