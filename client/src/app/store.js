import { configureStore } from "@reduxjs/toolkit";
import todos from "../features/todos/todo-slicer";
import user from "../features/user/user-slicer";
import project from "../features/project/project-slicer";

export default configureStore({
  reducer: {
    user,
    project,
    todos,
  },
});
