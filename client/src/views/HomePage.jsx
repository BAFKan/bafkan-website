import HomePitcure from "../assets/bafkan_public_asset.svg";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="flex relative w-screen h-[720px]">
        <div className="fixed bottom-0 flex justify-center items-center w-full">
          <img src={HomePitcure} className="h-[500px]" />
        </div>
        <div className="absolute flex flex-col w-full justify-center items-center top-[60px] space-x-2">
          <div className="flex mb-2 space-x-3">
            <h1 className="font-raleway text-[52px] text-gray-700">
              Manage Every
            </h1>
            <h1 className="text-[52px] font-raleway underline text-bk-300">
              Contribution
            </h1>
          </div>
          <Link
            to={"/kanban"}
            className="flex items-center justify-center px-4 py-2 bg-bk-200 rounded-lg text-white space-x-2 hover:bg-bk-250 transition-all hover:scale-105"
          >
            <p className="font-roboto text-[16px]">Explore Now</p>
            <ArrowRightIcon className="h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
