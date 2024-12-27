import { useContext, useEffect } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import Task from "./Task";
import { motion, AnimatePresence } from "framer-motion";

function TaskList() {
  const { tasks, getTasks } = useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <motion.div
      className="font-PTSans pt-8 flex flex-col h-full  md:pb-6 pb-16 pr-2 scrollbar-thin scrollbar-thumb-space-primary-opacity-20 scrollbar-track-transparent"
      layout
    >
      {tasks.length !== 0 ? (
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </AnimatePresence>
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-4 font-Montserrat px-4">
          <h2 className="font-bold text-2xl text-space-primary">
            No Tasks Yet
          </h2>
          <p className="text-base max-w-sm text-center text-space-primary/60">
            Click the + button to add your first task and start managing your
            workflow.
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default TaskList;
