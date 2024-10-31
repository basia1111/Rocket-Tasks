import { useContext, useState } from "react";
import { TaskContext } from '../../contexts/TaskContext';
import { IoCalendarNumberOutline } from "react-icons/io5";
import TaskForm from '../forms/TaskForm';
import TaskActions from "./TaskActions";
import TaskCheckbox from "./TaskCheckbox"

function Task({ task }) {
    const { toggleStatus, deleteTask, modifiedTask } = useContext(TaskContext);
    const { title, _id, dueDate, status } = task;
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState(null)

    const handleDelete = async (id) => {
        setError(null);
        try {
            await deleteTask(id)
        } catch(error) {
            setError(error.message)
        }
    }
    const handleChangeStatus = async (id) => {
        setError(null);
         try {
            await toggleStatus(id)
        } catch(error) {
            setError(error.message)
        }
    }

    return (
        <div className={`w-full flex justify-between items-center py-3 md:px-4 px-2 transition-all duration-300 border-b-[1px] border-gray-200
            ${isEditing ? 'bg-gray-50' : 'bg-white'} ${modifiedTask == task._id ? 'pulse-once' : ''}`}>

            <div className="flex items-center gap-4">
                <TaskCheckbox id={_id}  handleChangeStatus={handleChangeStatus} status={status} />
                {isEditing ? (
                    <TaskForm editMode={true}  id={task._id} title={task.title} dueDate={task.dueDate}  onCancel={() => setIsEditing(false)} />
                ) : (
                    <div className="flex flex-col">
                        <p className={`text-lg font-semibold text-BLACK transition-transform duration-200 ${status ? "line-through" : "decoration-transparent"}`}>
                            {title}
                        </p>
                        {dueDate && (
                            <div className="flex items-center gap-1 text-xs text-yellow bg-light-yellow py-1 px-2 rounded-full ">
                                <IoCalendarNumberOutline className="text-xs text-yellow" />
                                {new Date(dueDate).toLocaleDateString("en-US", {
                                    weekday: "long",  
                                    month: "long", 
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </div>
                        )}
                        {error && <div>{error}</div>}
                    </div>
                )}
            </div>
            <TaskActions id={_id} handleDelete={handleDelete} setIsEditing={setIsEditing}/>
        
        </div>
    );
}

export default Task;
