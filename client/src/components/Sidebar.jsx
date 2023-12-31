import BafkanLogo from "../assets/bafkan_logo.png";
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Alert,
} from "@material-tailwind/react";
import {
  ArrowRightOnRectangleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  CubeTransparentIcon,
  ChatBubbleBottomCenterIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import Chat from "./Chat";
import { useSelector } from "react-redux";
import Toastify from "toastify-js";

const SideBar = () => {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);
  const { project } = useSelector((state) => state);

  const handleLogout = () => {
    localStorage.clear();
    Toastify({
      text: `Your Account Has Been Logout!`,
      duration: 3000,
      position: "center",
      gravity: "top",
      close: true,
      offset: {
        y: 30,
      },
      style: {
        background: "linear-gradient(to right, #900C3F, #F94C10)",
      },
    }).showToast();
    navigate("/login");
  };

  return (
    <>
      <Chat isOpen={isOpen} setIsOpen={setIsOpen} />
      <Card className="h-[100dvh] w-full fixed max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <div className="mb-2 flex items-center gap-4 p-4">
          <Link to={"/"}>
            <img src={BafkanLogo} alt="brand" className="h-16" />
          </Link>
        </div>
        <List>
          <Link to={"/kanban"}>
            <ListItem className="hover:bg-bk-250 hover:text-white group">
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
              <ListItemSuffix>
                <Chip
                  value={
                    project && project.project && project.project.project
                      ? project.project.project.length
                      : 0
                  }
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full group-hover:text-white group-hover:bg-bk-150"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />
          <Link to={"/task"}>
            <ListItem className="hover:bg-bk-250 hover:text-white">
              <ListItemPrefix>
                <RectangleStackIcon className="h-5 w-5" />
              </ListItemPrefix>
              Kanban
            </ListItem>
          </Link>
          <button onClick={() => setIsOpen(true)}>
            <ListItem className="hover:bg-bk-250 hover:text-white">
              <ListItemPrefix>
                <ChatBubbleBottomCenterIcon className="h-5 w-5" />
              </ListItemPrefix>
              Chat
            </ListItem>
          </button>
          <button onClick={() => handleLogout()}>
            <ListItem className="hover:bg-bk-250 hover:text-white">
              <ListItemPrefix>
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </button>
        </List>
        <Alert
          open={openAlert}
          className="mt-auto"
          onClose={() => setOpenAlert(false)}
        >
          {/* <CubeTransparentIcon className="mb-4 h-12 w-12" /> */}
          <Typography variant="h6" className="mb-1">
            Thank You!
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            For choosing Bafkan as your daily task management
          </Typography>
          <div className="mt-4 flex gap-3">
            <Typography as="a" href="#" variant="small" className="font-medium">
              Donate
            </Typography>
          </div>
        </Alert>
      </Card>
    </>
  );
};

export default SideBar;
