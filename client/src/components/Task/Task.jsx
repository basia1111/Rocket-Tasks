import { useContext, useState, forwardRef } from "react";
import { TaskContext } from '../../contexts/TaskContext';
import { IoCalendarNumberOutline } from "react-icons/io5";
import TaskForm from '../forms/TaskForm';
import TaskActions from "./TaskActions";
import TaskCheckbox from "./TaskCheckbox";
import { AnimatePresence, backInOut, motion } from "framer-motion";

function Task({ task }, ref) {
    const { toggleStatus, deleteTask, modifiedTask } = useContext(TaskContext);
    const { title, _id, dueDate, status } = task;
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null);

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
            className={`w-full flex justify-between items-center py-3 md:px-4 px-2 border-b-[1px] border-gray-200 
            `}
            ref={ref}
            key="editing-task"
            initial={{ x:10 }} 
            animate={{ x:0, backgroundColor: modifiedTask === _id ? ["#ffffff", '#baf4ce', "#ffffff"] : '#ffffff' }}
            exit={{x:-10,  transition:{
                type: "spring",
                duration: 0.2,
                stiffness: 200,
                damping: 30
            }}}
            layout
        >
            <div className="flex items-center gap-4">
                <TaskCheckbox id={_id} handleChangeStatus={handleChangeStatus} status={status} />
                
                    {isEditing ? (
                        <AnimatePresence>
                        <motion.div
                            key="editing-form"
                            initial={{ y: 0 }}
                            animate={{ y: 0 }}
                            exit={{  y: 20}}
                            transition={{ ease: backInOut, duration: 0.5 }}
                        >
                            <TaskForm
                                editMode={true}
                                id={task._id}
                                title={task.title}
                                dueDate={task.dueDate}
                                onCancel={() => setIsEditing(false)}
                            />
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <div className="flex flex-col">
                        <p
                            className={`text-lg font-semibold text-BLACK transition-transform duration-200 ${
                                status ? "line-through" : "decoration-transparent"
                            }`}
                        >
                            {title}
                        </p>
                        {dueDate && (
                            <div className="flex items-center gap-1 text-xs text-yellow bg-light-yellow py-1 px-2 rounded-full ">
                                <IoCalendarNumberOutline className="text-xs text-yellow" />
                                {new Date(dueDate).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </div>
                        )}
                        {error && <div>{error}</div>}
                    </div>
                    )}
            </div>
            <TaskActions id={_id} handleDelete={handleDelete} setIsEditing={setIsEditing} />
        </motion.div>
    );
}

export default forwardRef(Task);
