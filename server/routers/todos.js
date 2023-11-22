const express = require("express");
const TodoStatic = require("../controllers/todoStatic");
const { todo_authorization } = require("../middleware/authorization");
const router = express.Router();

router.post("/", TodoStatic.createTodo);
router.get("/", TodoStatic.getTodo);
router.get("/:TodoId", TodoStatic.getTodoDetail);
router.delete("/:TodoId", TodoStatic.deleteTodo);
module.exports = router;
