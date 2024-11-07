import { useContext, useState, forwardRef } from "react";
import { TaskContext } from '../../contexts/TaskContext';
import { IoCalendarNumberOutline } from "react-icons/io5";
import TaskForm from '../forms/TaskForm';
import Actions from "../layout/Actions";
import TaskCheckbox from "./TaskCheckbox";
import { AnimatePresence, backInOut, motion } from "framer-motion";
import ConfirmDeleteModal from "../layout/ConfirmDeleteModal";

function Task({ task }, ref) {
    const { toggleStatus, deleteTask, modifiedTask } = useContext(TaskContext);
    const { title, _id, dueDate, status, tags } = task;

    const [isEditing, setIsEditing] = useState(false);
    const [isTaskActionsOpen, setIsTaskActionsOpen] =  useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [error, setError] = useState(null);

    const showTaskActions = () => {
        setIsTaskActionsOpen(open => true)
    } 
    const hideTaskActions = () => {
        setIsTaskActionsOpen(open => false)
    } 


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
            className={`  w-full flex justify-between items-center py-3 md:px-4 px-2 border-b-[1px]`}
            onMouseEnter={showTaskActions} onMouseLeave={hideTaskActions}
            ref={ref}
            key="editing-task"
            initial={{ x:10 }} 
            animate={{ 
                x:0, 
                backgroundColor: modifiedTask === _id ? ["#ffffff", '#baf4ce', "#ffffff"] : '#ffffff' }}
            exit={{x:-10,  transition:{
                type: "spring",
                duration: 0.2,
                stiffness: 200,
                damping: 30
            }}}
            transition={{
                duration:0.3
            }}
            whileHover={{backgroundColor: '#f9fafc'}}
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
                            <TaskForm closeForm={() => setIsEditing(false)} isEditing={isEditing} closeActions={() => setIsTaskActionsOpen(false)} id={task._id} title={task.title} dueDate={task.dueDate} currentTags={tags}/>
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <div className="flex gap-2 items-center">
                        <div className="flex flex-col">
                            <p className={`md:text-lg tex-md font-normal text-black transition-transform duration-200 font-Montserrat ${status ? "line-through" : "decoration-transparent" }`}>
                                {title}
                            </p>
                            {dueDate && (
                                <div className="flex items-center gap-1 text-xs text-yellow bg-light-yellow py-1 px-2 rounded-full ">
                                    <IoCalendarNumberOutline className="text-xs text-yellow" />
                                    {new Date(dueDate).toLocaleDateString("en-US", {weekday: "long", month: "long", day: "numeric", year: "numeric",})}
                                </div>
                            )}
                            {error && <div>{error}</div>}
                        </div>
                        <div className="flex gap-1 pl-10">
                            {tags.map(tag => (
                                <div key={tag._id}>
                                    <div 
                                        className="flex w-auto gap-1 items-center rounded-full border-2 px-1 font-Montserrat font-normal text-xs shadow-md"
                                        style={{ borderColor: tag.color }}
                                    >
                                        <div>{tag.name}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    )}
                      
            </div>
            <div className={`${isTaskActionsOpen ? "visible" : "hidden" }`}>
                <Actions setIsModalActive={setIsModalActive} setIsEditing={setIsEditing}  iconSize="20" color="#cfcfd1"/>
            </div>
            <ConfirmDeleteModal isModalActive={isModalActive} setIsModalActive={setIsModalActive} handleDelete={handleDelete} id={_id}  message={'Are you sure you want to delete task?'}/>
        </motion.div>
    );
}

export default forwardRef(Task);
