import {
  PlusCircleIcon,
  TrashIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
// import { fetchProject } from "../features/project/project-slicer";
import { useEffect } from "react";
import { fetchProject } from "../features/project/project-slicer";

const TaskPage = () => {
  const { project, loading, error } = useSelector((state) => state.project);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchProject());
    // dispatch(projectSlice());
  }, []);

  // console.log(project, "<<< from project task page");
  return (
    <>
      {console.log(project, "<<< project")}
      <div className="fixed left-[370px] my-12 right-20">
        <div className="flex flex-col flex-wrap">
          {/* This is Profile Section */}
          <div class=" flex flex-row justify-between items-center font-regular relative mb-4 w-full rounded-lg bg-bk-300 p-4 text-base leading-5 text-white opacity-100">
            <h1>This is The Project Title</h1>
            <button>
              <PlusCircleIcon className="w-6 h-6 text-white hover:scale-105 transition-all active:scale-90" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 w-full h-screen space-x-6">
          {/* -- Kanban  */}
          <div className="h-full flex flex-col relative bg-green-100/10 items-center px-3 rounded-lg shadow-lg gap-y-4 pt-[70px]">
            {/* -- Title */}
            <div className="absolute top-0 pt-5 w-full flex justify-between items-center rounded-md text-gray-800">
              <div className="flex flex-row gap-x-2">
                <h1 className="ml-4 font-raleway">To Do</h1>
              </div>
              <p className="bg-bk-250 w-8 items-center justify-center flex rounded-lg text-white text-[14px] mr-5">
                2
              </p>
            </div>
            {/* -- Kanban Card */}
            <div className="flex flex-col relative bg-white shadow-md mx-4 h-[175px] w-full rounded-lg transition-all">
              <div className="absolute top-0 left-0 flex justify-center items-center text-white bg-bk-200 m-2 rounded-lg">
                <p className="text-[10px] px-2 py-1">Low</p>
              </div>
              <div className="absolute top-0 right-0 flex justify-center items-center text-gray-500 m-2">
                <p className="text-[12px] px-2 py-1">Created Yesterday</p>
              </div>
              <div className="flex flex-col m-3 mt-12 font-sans">
                <p className="font-bold text-[14px] mb-1">
                  Ngoding di Hari Sabtu
                </p>
                <p className="text-[12px]">
                  Hari ini saya coba ngoding di hari sabtu pukul 9 malam mencoba
                  untuk bisa mengerjakan semampunya dan sebagusnya
                </p>
              </div>
              <div className="flex flex-row items-center justify-end -space-x-3">
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <CheckCircleIcon className="w-6 h-5 text-gray-900 hover:text-bk-250" />
                </button>
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <TrashIcon className="w-6 h-5 text-gray-900 hover:text-bk-150" />
                </button>
              </div>
            </div>
            {/* End of Kanban Card */}

            {/* -- Kanban Card */}
            <div className="flex flex-col relative bg-white shadow-md mx-4 h-[175px] w-full rounded-lg transition-all">
              <div className="absolute top-0 left-0 flex justify-center items-center text-white bg-bk-200 m-2 rounded-lg">
                <p className="text-[10px] px-2 py-1">Low</p>
              </div>
              <div className="absolute top-0 right-0 flex justify-center items-center text-gray-500 m-2">
                <p className="text-[12px] px-2 py-1">Created Yesterday</p>
              </div>
              <div className="flex flex-col m-3 mt-12 font-sans">
                <p className="font-bold text-[14px] mb-1">
                  Ngoding di Hari Sabtu
                </p>
                <p className="text-[12px]">
                  Hari ini saya coba ngoding di hari sabtu pukul 9 malam mencoba
                  untuk bisa mengerjakan semampunya dan sebagusnya
                </p>
              </div>
              <div className="flex flex-row items-center justify-end -space-x-3">
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <CheckCircleIcon className="w-6 h-5 text-gray-900 hover:text-bk-250" />
                </button>
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <TrashIcon className="w-6 h-5 text-gray-900 hover:text-bk-150" />
                </button>
              </div>
            </div>
            {/* End of Kanban Card */}
          </div>
          {/* -- End of Kanban */}
          {/* -- Kanban  */}
          <div className="h-full flex flex-col relative bg-green-100/10 items-center px-3 rounded-lg shadow-lg gap-y-4 pt-[70px]">
            {/* -- Title */}
            <div className="absolute top-0 pt-5 w-full flex justify-between items-center rounded-md text-gray-800">
              <div className="flex flex-row gap-x-2">
                <h1 className="ml-4 font-raleway">In Progress</h1>
              </div>
              <p className="bg-bk-250 w-8 items-center justify-center flex rounded-lg text-white text-[14px] mr-5">
                2
              </p>
            </div>
            {/* -- Kanban Card */}
            <div className="flex flex-col relative bg-white shadow-md mx-4 h-[175px] w-full rounded-lg transition-all">
              <div className="absolute top-0 left-0 flex justify-center items-center text-white bg-bk-200 m-2 rounded-lg">
                <p className="text-[10px] px-2 py-1">Low</p>
              </div>
              <div className="absolute top-0 right-0 flex justify-center items-center text-gray-500 m-2">
                <p className="text-[12px] px-2 py-1">Created Yesterday</p>
              </div>
              <div className="flex flex-col m-3 mt-12 font-sans">
                <p className="font-bold text-[14px] mb-1">
                  Ngoding di Hari Sabtu
                </p>
                <p className="text-[12px]">
                  Hari ini saya coba ngoding di hari sabtu pukul 9 malam mencoba
                  untuk bisa mengerjakan semampunya dan sebagusnya
                </p>
              </div>
              <div className="flex flex-row items-center justify-end -space-x-3">
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <CheckCircleIcon className="w-6 h-5 text-gray-900 hover:text-bk-250" />
                </button>
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <TrashIcon className="w-6 h-5 text-gray-900 hover:text-bk-150" />
                </button>
              </div>
            </div>
            {/* End of Kanban Card */}

            {/* -- Kanban Card */}
            <div className="flex flex-col relative bg-white shadow-md mx-4 h-[175px] w-full rounded-lg transition-all">
              <div className="absolute top-0 left-0 flex justify-center items-center text-white bg-bk-200 m-2 rounded-lg">
                <p className="text-[10px] px-2 py-1">Low</p>
              </div>
              <div className="absolute top-0 right-0 flex justify-center items-center text-gray-500 m-2">
                <p className="text-[12px] px-2 py-1">Created Yesterday</p>
              </div>
              <div className="flex flex-col m-3 mt-12 font-sans">
                <p className="font-bold text-[14px] mb-1">
                  Ngoding di Hari Sabtu
                </p>
                <p className="text-[12px]">
                  Hari ini saya coba ngoding di hari sabtu pukul 9 malam mencoba
                  untuk bisa mengerjakan semampunya dan sebagusnya
                </p>
              </div>
              <div className="flex flex-row items-center justify-end -space-x-3">
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <CheckCircleIcon className="w-6 h-5 text-gray-900 hover:text-bk-250" />
                </button>
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <TrashIcon className="w-6 h-5 text-gray-900 hover:text-bk-150" />
                </button>
              </div>
            </div>
            {/* End of Kanban Card */}
          </div>
          {/* -- End of Kanban */}

          {/* -- Kanban  */}
          <div className="h-full flex flex-col relative bg-green-100/10 items-center px-3 rounded-lg shadow-lg gap-y-4 pt-[70px]">
            {/* -- Title */}
            <div className="absolute top-0 pt-5 w-full flex justify-between items-center rounded-md text-gray-800">
              <div className="flex flex-row gap-x-2">
                <h1 className="ml-4 font-raleway">Success</h1>
              </div>
              <p className="bg-bk-250 w-8 items-center justify-center flex rounded-lg text-white text-[14px] mr-5">
                2
              </p>
            </div>
            {/* -- Kanban Card */}
            <div className="flex flex-col relative bg-white shadow-md mx-4 h-[175px] w-full rounded-lg transition-all">
              <div className="absolute top-0 left-0 flex justify-center items-center text-white bg-bk-200 m-2 rounded-lg">
                <p className="text-[10px] px-2 py-1">Low</p>
              </div>
              <div className="absolute top-0 right-0 flex justify-center items-center text-gray-500 m-2">
                <p className="text-[12px] px-2 py-1">Created Yesterday</p>
              </div>
              <div className="flex flex-col m-3 mt-12 font-sans">
                <p className="font-bold text-[14px] mb-1">
                  Ngoding di Hari Sabtu
                </p>
                <p className="text-[12px]">
                  Hari ini saya coba ngoding di hari sabtu pukul 9 malam mencoba
                  untuk bisa mengerjakan semampunya dan sebagusnya
                </p>
              </div>
              <div className="flex flex-row items-center justify-end -space-x-3">
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <CheckCircleIcon className="w-6 h-5 text-gray-900 hover:text-bk-250" />
                </button>
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <TrashIcon className="w-6 h-5 text-gray-900 hover:text-bk-150" />
                </button>
              </div>
            </div>
            {/* End of Kanban Card */}

            {/* -- Kanban Card */}
            <div className="flex flex-col relative bg-white shadow-md mx-4 h-[175px] w-full rounded-lg transition-all">
              <div className="absolute top-0 left-0 flex justify-center items-center text-white bg-bk-200 m-2 rounded-lg">
                <p className="text-[10px] px-2 py-1">Low</p>
              </div>
              <div className="absolute top-0 right-0 flex justify-center items-center text-gray-500 m-2">
                <p className="text-[12px] px-2 py-1">Created Yesterday</p>
              </div>
              <div className="flex flex-col m-3 mt-12 font-sans">
                <p className="font-bold text-[14px] mb-1">
                  Ngoding di Hari Sabtu
                </p>
                <p className="text-[12px]">
                  Hari ini saya coba ngoding di hari sabtu pukul 9 malam mencoba
                  untuk bisa mengerjakan semampunya dan sebagusnya
                </p>
              </div>
              <div className="flex flex-row items-center justify-end -space-x-3">
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <CheckCircleIcon className="w-6 h-5 text-gray-900 hover:text-bk-250" />
                </button>
                <button className="px-2 pb-3 justify-center items-center rounded-lg text-white py-1 text-sm w-18">
                  <TrashIcon className="w-6 h-5 text-gray-900 hover:text-bk-150" />
                </button>
              </div>
            </div>
            {/* End of Kanban Card */}
          </div>
          {/* -- End of Kanban */}
        </div>
      </div>
    </>
  );
};
export default TaskPage;
