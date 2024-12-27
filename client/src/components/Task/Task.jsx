import { useContext, useState, forwardRef } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import {
  IoCheckmarkCircleSharp,
  IoRadioButtonOffOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import TaskForm from "../forms/TaskForm";
import Actions from "../layout/Actions";
import { AnimatePresence, motion } from "framer-motion";
import ConfirmDeleteModal from "../layout/ConfirmDeleteModal";

function Task({ task }, ref) {
  const { toggleStatus, deleteTask } = useContext(TaskContext);
  const { title, _id, dueDate, status, tags } = task;

  const [isEditing, setIsEditing] = useState(false);
  const [isTaskActionsOpen, setIsTaskActionsOpen] = useState(false);
  const [isModalActive, setIsModalActive] = useState(false);
  const [error, setError] = useState(null);

  const showTaskActions = () => setIsTaskActionsOpen(true);
  const hideTaskActions = () => setIsTaskActionsOpen(false);

  const handleDelete = async (id) => {
    setError(null);
    try {
      await deleteTask(id);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChangeStatus = async (id) => {
    setError(null);
    try {
      await toggleStatus(id);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <motion.div
      className="relative mb-3 group"
      onMouseEnter={showTaskActions}
      onMouseLeave={hideTaskActions}
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-full ${status ? "opacity-90" : "opacity-100"}`}>
        <div
          className={` bg-white  backdrop-blur-sm rounded-xl p-4 border border-space-primary/20 transition-all duration-200 font-Montserrat 
          relative
          ${isEditing ? "bg-space-background-opacity-30" : "bg-white"}
          ${status ? "bg-opacity-90" : ""}`}
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-space-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-space-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          {!isEditing ? (
            <div className="flex items-start gap-4 relative">
              <div
                className="flex-shrink-0 mt-1"
                onClick={() => handleChangeStatus(_id)}
              >
                {status ? (
                  <IoCheckmarkCircleSharp className="w-6 h-6 text-space-primary cursor-pointer transition-all duration-200 hover:scale-110" />
                ) : (
                  <div className="relative">
                    <IoRadioButtonOffOutline className="w-6 h-6 text-space-primary/30 cursor-pointer transition-all duration-200 hover:text-space-primary/60" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0 space-y-2">
                <h3
                  className={` text-base font-medium transition-all duration-200
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

              <div
                className={`transition-all duration-200
                ${isTaskActionsOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 pointer-events-none"}`}
              >
                <Actions
                  setIsModalActive={setIsModalActive}
                  setIsEditing={setIsEditing}
                  iconSize="16"
                  color="rgb(135, 206, 235)"
                />
              </div>
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                key="editing-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <TaskForm
                  closeForm={() => setIsEditing(false)}
                  isEditing={isEditing}
                  closeActions={() => setIsTaskActionsOpen(false)}
                  id={task._id}
                  title={task.title}
                  dueDate={task.dueDate}
                  currentTags={tags}
                />
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>

      <ConfirmDeleteModal
        isModalActive={isModalActive}
        setIsModalActive={setIsModalActive}
        handleDelete={handleDelete}
        id={_id}
        message={"Are you sure you want to delete task?"}
      />
    </motion.div>
  );
}

export default forwardRef(Task);
