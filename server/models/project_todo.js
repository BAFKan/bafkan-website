"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project_Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project_Todo.belongsTo(models.Project, { foreignKey: "ProjectId" });
      Project_Todo.belongsTo(models.User, { foreignKey: "UserId" });
      // define association here
    }
  }
  Project_Todo.init(
    {
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
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "UserId cannot be empty",
          },
          notNull: {
            msg: "UserId cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Project_Todo",
    }
  );
  return Project_Todo;
};
