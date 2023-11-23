import CardKanban from "../components/Card";
import Card from "../components/Card";
import { BellIcon } from "@heroicons/react/24/outline";
import FormAddProject from "../components/FormAddProject";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProject } from "../features/project/project-slicer";
import { jwtDecode } from "jwt-decode";

const KanbanPage = () => {
  const getToken = localStorage.getItem("access_token");
  const decoded = jwtDecode(getToken);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { project, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProject());
  }, []);
  return (
    <>
      {/* {console.log(
        project.project.project?.at(0),
        "<<<< project form kanban page"
      )} */}
      <FormAddProject isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="fixed left-[370px] my-12 right-20">
        <div className="flex flex-col flex-wrap">
          {/* This is Profile Section */}
          <div class="flex flex-row justify-between items-center font-regular relative mb-4 w-full rounded-lg bg-bk-300 p-4 text-base leading-5 text-white opacity-100">
            <div className="flex space-x-1">
              <p>Welcome to this Kanban </p>
              <p className="underline">{decoded.email}</p>
            </div>
            <BellIcon className="w-6 h-6 text-white" />
          </div>

          <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
            {project &&
              project.project &&
              project.project.project?.map((project, index) => (
                <CardKanban
                  key={project.id}
                  index={index}
                  name={project.name_project}
                  description={project.description}
                />
              ))}
            <div className="mt-6 w-80">
              <div className="absolute">
                <button
                  onClick={() => setIsOpen(true)}
                  className="flex rounded-md bg-gray-50 text-gray-400 w-[330px] h-[215px] items-center justify-center -mx-2 hover:text-gray-600 hover:shadow-xl transition-all"
                >
                  <h1 className="font-bold ">+ Add Project</h1>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KanbanPage;
