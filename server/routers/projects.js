const express = require("express");
const ProjectStatic = require("../controllers/projectStatic");
const { project_authorization } = require("../middleware/authorization");
const router = express.Router();

router.post("/", ProjectStatic.createProject);
router.get("/", ProjectStatic.getProject);
router.get("/:ProjectId", ProjectStatic.getProjectDetail);
router.delete(
  "/:ProjectId",
  project_authorization,
  ProjectStatic.deleteProject
);
module.exports = router;
