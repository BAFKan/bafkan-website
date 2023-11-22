const { Project } = require("../models");
class ProjectStatic {
  static async createProject(req, res, next) {
    try {
      const { name_project, description } = req.body;
      const payload = {
        name_project,
        description,
        UserId: req.loginInfo.id,
      };
      const newProject = await Project.create(payload);
      res.status(201).json({
        project: newProject,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }

  static async getProject(req, res, next) {
    try {
      const project = await Project.findAll();
      res.status(200).json({
        project,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }

  static async getProjectDetail(req, res, next) {
    try {
      const id = req.params.ProjectId;

      const project = await Project.findByPk(id);

      if (!project) {
        throw new Error("Not Found");
      }

      res.status(200).json({
        project,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteProject(req, res, next) {
    const id = req.params.ProjectId;
    try {
      const project = await Project.findByPk(id);
      if (!project) {
        throw new Error("Not Found");
      } else {
        await Project.destroy({
          where: { id },
        });
        res.status(200).json({
          message: `Success delete project with id ${id}`,
        });
      }
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }
}

module.exports = ProjectStatic;
