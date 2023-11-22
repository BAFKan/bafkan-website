import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ProjectProvider, TodoProvider, UserProvider } from "../context";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainPage;
