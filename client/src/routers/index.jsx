import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import MainPage from "../views/MainPage";
import HomePage from "../views/HomePage";
import KanbanPage from "../views/KanbanPage";
import DashboardPage from "../views/DashboardPage";
import ChatPage from "../views/ChatPage";

const router = createBrowserRouter([
  {
    path: "*",
    loader: async () => {
      return redirect("/");
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    element: <MainPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    element: <DashboardPage />,
    children: [
      {
        path: "/movement/:id",
        element: <KanbanPage />,
      },
      {
        path: "/fruit/:id",
        element: <ChatPage />,
      },
    ],
    // loader: async () => {
    //   if (!localStorage.access_token) {
    //     Toastify({
    //       text: `You need to Login First!`,
    //       duration: 3000,
    //       position: "center",
    //       gravity: "top",
    //       close: true,
    //       offset: {
    //         y: 30,
    //       },
    //       style: {
    //         background: "linear-gradient(to right, #900C3F, #F94C10)",
    //       },
    //     }).showToast();
    //     return redirect("/login");
    //   }

    //   return null;
    // },
  },
]);

export default router;
