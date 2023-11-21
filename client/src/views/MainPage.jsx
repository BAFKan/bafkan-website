import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ProjectProvider, TodoProvider, UserProvider } from "../context";

const MainPage = () => {
  return (
    <>
      <ProjectProvider>
        <TodoProvider>
          <UserProvider>
            <Navbar />
            <Outlet />
          </UserProvider>
        </TodoProvider>
      </ProjectProvider>
    </>
  );
};

export default MainPage;
