const express = require("express");
const router = express.Router();
const UserStatic = require("../controllers/userStatic");
const projects = require("./projects");
const todos = require("./todos");
const projectTodos = require("./projectTodos");
const authentication = require("../middleware/authentication");

router.post("/register", UserStatic.register);
router.post("/login", UserStatic.login);

router.use(authentication);

router.use("/projects", projects);
router.use("/todos", todos);
router.use("/project-todos", projectTodos);

module.exports = router;
