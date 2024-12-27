import { useContext, useState, forwardRef, useCallback, memo } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import {
  IoCheckmarkCircleSharp,
  IoRadioButtonOffOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import TaskForm from "../forms/TaskForm";
import Actions from "../layout/Actions";
import { motion, AnimatePresence } from "framer-motion";
import DeleteModal from "../layout/DeleteModal";

const Task = forwardRef(({ task }, ref) => {
  const { toggleStatus, deleteTask } = useContext(TaskContext);
  const { title, _id, dueDate, status, tags } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);

  const handleDelete = useCallback(
    async (id) => {
      try {
        await deleteTask(id);
      } catch (error) {
        console.error(error.message);
      }
    },
    [deleteTask]
  );

  const handleChangeStatus = useCallback(
    async (id) => {
      try {
        await toggleStatus(id);
      } catch (error) {
        console.error(error.message);
      }
    },
    [toggleStatus]
  );

  const variants = {
    initial: { opacity: 0, y: 5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -5 },
  };

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="relative mb-3 group"
      ref={ref}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.15 }}
    >
      <div className={`w-full ${status ? "opacity-90" : "opacity-100"}`}>
        <div
          className={`bg-white backdrop-blur-sm rounded-xl p-4 border border-space-primary/20 transition-colors duration-150 font-Montserrat 
          relative `}
        >
          <AnimatePresence mode="wait" initial={false}>
            {!isEditing ? (
              <motion.div
                key="normal"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.15 }}
                className="flex items-start gap-4 relative"
              >
                <div
                  className="flex-shrink-0 mt-1"
                  onClick={() => handleChangeStatus(_id)}
                >
                  {status ? (
                    <IoCheckmarkCircleSharp className="w-6 h-6 text-space-primary cursor-pointer transition-transform duration-150 hover:scale-110" />
                  ) : (
                    <div className="relative">
                      <IoRadioButtonOffOutline className="w-6 h-6 text-space-primary/30 cursor-pointer transition-colors duration-150 hover:text-space-primary/60" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0 space-y-2">
                  <h3
                    className={`text-base font-medium transition-colors duration-150
                    ${status ? "text-space-background/90 line-through" : "text-space-background"}`}
                  >
                    {title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {dueDate && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-space-primary/10 text-space-primary rounded-full text-xs font-medium backdrop-blur-sm">
                        <IoCalendarOutline className="w-3.5 h-3.5" />
                        {new Date(dueDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    )}

                    {tags.map((tag) => (
                      <span
                        key={tag._id}
                        className="inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full backdrop-blur-sm"
                        style={{
                          backgroundColor: `${tag.color}20`,
                          color: tag.color,
                        }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="transition-all duration-150 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  <Actions
                    setIsModalActive={setIsModalActive}
                    setIsEditing={setIsEditing}
                    iconSize="16"
                    color="rgb(135, 206, 235)"
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="editing"
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.15 }}
              >
                <TaskForm
                  closeForm={() => setIsEditing(false)}
                  isEditing={isEditing}
                  id={task._id}
                  title={task.title}
                  dueDate={task.dueDate}
                  currentTags={tags}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <DeleteModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        handleDelete={handleDelete}
        id={_id}
        message="Are you sure you want to delete task?"
      />
    </motion.div>
  );
});

Task.displayName = "Task";

export default memo(Task);
