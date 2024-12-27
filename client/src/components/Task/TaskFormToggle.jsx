import { memo, useState } from "react";
import { IoAdd } from "react-icons/io5";
import TaskForm from "../forms/TaskForm";
import { motion, AnimatePresence } from "framer-motion";

const AddTaskButton = memo(({ onClick }) => (
  <div
    onClick={onClick}
    className="relative rounded-full flex px-4 py-2 items-center gap-2 
      bg-space-primary/10 hover:bg-space-primary/20 backdrop-blur-sm
      border border-space-primary/20 hover:border-space-primary/40
      transition-colors duration-150 group overflow-hidden active:scale-95"
  >
    <div
      className="absolute inset-0 bg-gradient-to-r from-space-primary/0 via-space-primary/10 to-space-primary/0 
      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-300"
    />

    <span className="font-medium text-space-primary text-sm relative z-10">
      Add new task
    </span>
    <IoAdd className="w-5 h-5 text-space-primary relative z-10 group-hover:rotate-180 transition-transform duration-150" />

    <div className="absolute top-1 right-1 w-1 h-1 bg-space-primary/20 rounded-full" />
    <div className="absolute bottom-1 left-1 w-1 h-1 bg-space-primary/20 rounded-full" />
    <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-space-primary/20 to-transparent" />
  </div>
));

AddTaskButton.displayName = "AddTaskButton";

function TaskFormToggle() {
  const [isTaskFormOpen, setTaskFormOpen] = useState(false);

  return (
    <div className="flex items-center gap-3 w-full py-4">
      <AnimatePresence mode="wait" initial={false}>
        {isTaskFormOpen ? (
          <motion.div
            key="form"
            className="w-full"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.15 }}
          >
            <TaskForm
              closeForm={() => setTaskFormOpen(false)}
              isEditing={false}
              isTaskFormOpen={isTaskFormOpen}
            />
          </motion.div>
        ) : (
          <motion.div
            key="button"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            <AddTaskButton onClick={() => setTaskFormOpen(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default memo(TaskFormToggle);
