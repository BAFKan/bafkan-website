import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";
import { ProjectProvider, TodoProvider, UserProvider } from "../context";

const DashboardPage = () => {
  return (
    <>
      <ProjectProvider>
        <TodoProvider>
          <UserProvider>
            <SideBar />
            <Outlet />
          </UserProvider>
        </TodoProvider>
      </ProjectProvider>
    </>
  );
};

export default DashboardPage;
