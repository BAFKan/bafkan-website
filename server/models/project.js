"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Project.hasMany(models.Todo, { foreignKey: "ProjectId" });
      Project.hasMany(models.Project_Todo, { foreignKey: "ProjectId" });
      Project.belongsTo(models.User, { foreignKey: "UserId" });
      // define association here
    }
  }
  Project.init(
    {
      name_project: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "name_project cannot be empty",
          },
          notNull: {
            msg: "name_project cannot be null",
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
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "cascade",
        onUpdate: "cascade",
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
      modelName: "Project",
    }
  );
  return Project;
};
