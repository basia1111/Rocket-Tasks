import { useState } from "react";
import { IoAdd, IoCloseOutline } from "react-icons/io5";
import TaskForm from "../forms/TaskForm";
import { motion, AnimatePresence } from "framer-motion";

function TaskFormToggle() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);

  const showTaskModal = () => setIsFormModalOpen(true);
  const hideTaskModal = () => setIsFormModalOpen(false);

  return (
    <>
      <button
        onClick={showTaskModal}
        className={`flex items-center justify-center ${isFormModalOpen ? "hidden" : ""}  w-14 h-14 rounded-full bg-gradient-to-br  from-space-primary-light to-space-primary hover:scale-105 active:scale-95 transition-all duration-200 fixed md:absolute right-6 bottom-6 shadow-sm`}
      >
        <IoAdd className="text-white size-8" />
      </button>

      <AnimatePresence mode="popLayout">
        {isFormModalOpen && (
          <motion.div
            onClick={hideTaskModal}
            className="flex items-center justify-center fixed inset-0  bg-space-background/5 backdrop-blur-sm  z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              duration: 0.2,
              stiffness: 200,
              damping: 30,
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="sm:max-w-[500px] w-full bg-white md:p-10 p-6  rounded-3xl border border-space-primary-opacity-20  shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                type: "spring",
                duration: 0.2,
                stiffness: 280,
                damping: 20,
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-bold  text-xl text-space-background">
                  Create Task
                </h2>
                <button
                  onClick={hideTaskModal}
                  className="text-space-background/60  hover:text-space-background transition-colors duration-200 p-2 rounded-full hover:bg-space-primary-opacity-20"
                >
                  <IoCloseOutline className="size-6" />
                </button>
              </div>

              {/* Form */}
              <TaskForm closeForm={hideTaskModal} isEditing={false} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default TaskFormToggle;
