const { Project_Todo, User, Project } = require("../models");
class ProjectTodo {
  static async createProjectTodo(req, res, next) {
    try {
      const { projectId } = req.params;
      const { id } = req.loginInfo;
      const response = await Project_Todo.create({
        UserId: id,
        ProjectId: +projectId,
      });

      //   console.log(response);
      res.status(201).json({
        response,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }
  //   static async getProjectTodo(req, res, next) {
  //     try {
  //       const { id } = req.loginInfo;
  //       //   console.log(id);
  //       const data = await Project_Todo.findAll({
  //         where: { UserId: id },
  //       });
  //       //   console.log(data);
  //       res.status(200).json({
  //         data,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  static async getProjectTodo(req, res, next) {
    try {
      const { id } = req.loginInfo;
      //   console.log(id);
      const data = await Project_Todo.findAll({
        where: { UserId: id },
        include: [
          Project,
          {
            model: User,
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      //   console.log(data);
      res.status(200).json({
        data,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }

  static async deleteProjectTodo(req, res, next) {
    const { projectId } = req.params;
    try {
      const projectTodo = await Project_Todo.findByPk(projectId);
      if (!projectTodo) {
        throw new Error("Not Found");
      } else {
        await Project_Todo.destroy({
          where: { id: projectId },
        });
        res.status(200).json({
          message: `Success delete project with id ${projectId}`,
        });
      }
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }

  static async getProjectTodoDetail(req, res, next) {
    try {
      const { projectId } = req.params;
      const projectTodoDetail = await Project_Todo.findOne({
        where: { id: projectId },
        include: [
          Project,
          {
            model: User,
            attributes: {
              exclude: ["password", "createdAt", "updatedAt"],
            },
          },
        ],
      });
      if (!projectTodoDetail) {
        throw new Error("Not Found");
      }
      res.status(200).json({
        projectTodoDetail,
      });
    } catch (error) {
      next(error);
      console.log(error);
    }
  }
}

module.exports = ProjectTodo;
