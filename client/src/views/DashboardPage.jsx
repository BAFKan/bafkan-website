import { Outlet } from "react-router-dom";
import SideBar from "../components/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
};

export default DashboardPage;
