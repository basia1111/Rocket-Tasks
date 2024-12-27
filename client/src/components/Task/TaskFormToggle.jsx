import { useState } from "react";
import { IoAdd, IoClose } from "react-icons/io5";
import TaskForm from "../forms/TaskForm";

function TaskFormToggle() {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);

  const showTaskForm = () => setTaskFormOpen(true);
  const hideTaskForm = () => setTaskFormOpen(false);

  return (
    <div className="flex items-center gap-3 w-full py-4">
      <div className={`${isTaskFormOpen ? "block" : "hidden"} w-full`}>
        <TaskForm
          closeForm={hideTaskForm}
          isEditing={false}
          isTaskFormOpen={isTaskFormOpen}
        />
      </div>
      <button className="relative group">
        {isTaskFormOpen ? null : (
          <div
            onClick={showTaskForm}
            className="relative rounded-full flex px-4 py-2 items-center gap-2 
            bg-space-primary/10 hover:bg-space-primary/20 backdrop-blur-sm
            border border-space-primary/20 hover:border-space-primary/40
            transition-all duration-200 group overflow-hidden active:scale-95"
          >
            <div
              className="absolute inset-0 bg-gradient-to-r from-space-primary/0 via-space-primary/10 to-space-primary/0 
            translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
            ></div>

            <span className="font-medium text-space-primary text-sm relative z-10">
              Add new task
            </span>
            <IoAdd className="w-5 h-5 text-space-primary relative z-10 group-hover:rotate-180 transition-transform duration-300" />

            <div className="absolute top-1 right-1 w-1 h-1 bg-space-primary/20 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-1 h-1 bg-space-primary/20 rounded-full"></div>

            <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-space-primary/20 to-transparent"></div>
          </div>
        )}
      </button>
    </div>
  );
}

export default TaskFormToggle;
