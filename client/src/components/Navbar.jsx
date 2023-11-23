import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import BafkanLogo from "../assets/bafkan_logo.png";

const NavbarHome = () => {
  return (
    <>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100 w-screen flex justify-center items-center">
        <div className="container flex justify-between h-16 mx-10">
          <img src={BafkanLogo} alt="" />
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400 hover:border-b-bk-250 hover:text-bk-250 transition-all">
                Kanban
              </a>
            </li>
            <li className="flex">
              <a className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:border-b-bk-250 hover:text-bk-250 transition-all">
                About
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 font-semibold rounded-xl dark:bg-violet-400 dark:text-gray-900 hover:bg-gray-300/40 hover:text-bk-250 transition-all">
              Register Now
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default NavbarHome;
