const express = require("express");
const ProjectTodo = require("../controllers/projectTodoStatic");
const router = express.Router();

router.get("/", ProjectTodo.getProjectTodo);
router.get("/:projectId", ProjectTodo.getProjectTodoDetail);
router.post("/:projectId", ProjectTodo.createProjectTodo);
router.delete("/:projectId", ProjectTodo.deleteProjectTodo);
module.exports = router;
