const { Todo } = require("../models");
class TodoStatic {
  static async createTodo(req, res, next) {
    try {
      const { name_todo, description, status, ProjectId } = req.body;
      const payload = {
        name_todo,
        description,
        status,
        ProjectId,
      };
      const newTodo = await Todo.create(payload);
      res.status(201).json({
        todo: newTodo,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }

  static async getTodo(req, res, next) {
    try {
      const todo = await Todo.findAll();
      res.status(200).json({
        todo,
      });
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }

  static async getTodoDetail(req, res, next) {
    try {
      const id = req.params.TodoId;

      const todo = await Todo.findByPk(id);

      if (!todo) {
        throw new Error("Not Found");
      }

      res.status(200).json({
        todo,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTodo(req, res, next) {
    const id = req.params.TodoId;
    console.log(id, "================");
    try {
      const todo = await Todo.findByPk(id);
      if (!todo) {
        throw new Error("Not Found");
      } else {
        await Todo.destroy({
          where: { id },
        });
        res.status(200).json({
          message: `Success delete todo with id ${id}`,
        });
      }
    } catch (error) {
      next(error);
      //   console.log(error);
    }
  }
}

module.exports = TodoStatic;
