import CardKanban from "../components/Card";
import Card from "../components/Card";
import { BellIcon } from "@heroicons/react/24/outline";
import FormAddProject from "../components/FormAddProject";

const KanbanPage = () => {
  return (
    <>
      <FormAddProject />
      <div className="fixed left-[370px] my-12 right-20">
        <div className="flex flex-col flex-wrap">
          {/* This is Profile Section */}
          <div class=" flex flex-row justify-between items-center font-regular relative mb-4 w-full rounded-lg bg-bk-300 p-4 text-base leading-5 text-white opacity-100">
            <h1>Welcome to this Kanban Farach Diba</h1>
            <BellIcon className="w-6 h-6 text-white" />
          </div>

          <div className="flex flex-row flex-wrap gap-x-6 gap-y-2">
            <CardKanban />
            <CardKanban />
            <CardKanban />
            <CardKanban />
            <CardKanban />
            <CardKanban />
          </div>
        </div>
      </div>
    </>
  );
};

export default KanbanPage;
