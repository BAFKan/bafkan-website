import { createContext } from "react";

export const UserContext = createContext();
export const ProjectContext = createContext();
export const TodoContext = createContext();
export const ProjectTodoContext = createContext();

export const UserProvider = ({ children }) => {
  return (
    <>
      <UserContext.Provider>{children}</UserContext.Provider>
    </>
  );
};

export const ProjectProvider = ({ children }) => {
  return (
    <>
      <ProjectContext.Provider>{children}</ProjectContext.Provider>
    </>
  );
};

export const TodoProvider = ({ children }) => {
  return (
    <>
      <TodoContext.Provider>{children}</TodoContext.Provider>
    </>
  );
};

export const ProjectTodoProvider = ({ children }) => {
  return (
    <>
      <ProjectTodoContext.Provider>{children}</ProjectTodoContext.Provider>
    </>
  );
};
