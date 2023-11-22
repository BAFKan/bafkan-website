const { User, Project, Todo } = require("../models");

const project_authorization = async (req, res, next) => {
  try {
    console.log("masuk nya project");
    // console.log(req.login/Info, 5);
    const { id } = req.loginInfo;
    const { ProjectId } = req.params;
    // console.log(ProjectId);
    const data = await Project.findByPk(ProjectId);
    // console.log(data);
    // console.log(data, 80);
    if (!data) {
      throw new Error("Not Found");
    }
    // console.log(data.UserId, "==========", id);
    if (data.UserId === id) {
      next();
    } else {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  project_authorization,
};
