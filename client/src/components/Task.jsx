import { useContext, useState } from "react";
import { TaskContext } from '../contexts/TaskContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoCalendarNumberOutline, IoCheckmarkCircle, IoEllipseOutline, IoTrashBin, IoPencil } from "react-icons/io5";

import TaskForm from './TaskForm';

function Task({ task }) {
    const { toggleStatus, deleteTask } = useContext(TaskContext);
    const { title, _id, dueDate, status } = task;
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div 
            className={`w-full flex justify-between items-center py-3 px-4 transition-all duration-300 border-b-[1px] border-gray-200
            ${isEditing ? 'bg-gray-50' : 'bg-white'}`}
        >
            <div className="flex items-center gap-4">
                {status ? (
                    <IoCheckmarkCircle 
                        onClick={() => toggleStatus(_id)} 
                        className="text-green bg-green-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
                        size={24}
                    />
                ) : (
                    <IoEllipseOutline 
                        onClick={() => toggleStatus(_id)} 
                        className="text-coral cursor-pointer hover:scale-110 transition-transform duration-200"
                        size={24}
                    />
                )}
                {isEditing ? (
                    <TaskForm 
                        editMode={true} 
                        id={task._id} 
                        title={task.title} 
                        dueDate={task.dueDate} 
                        onCancel={() => setIsEditing(false)} 
                    />
                ) : (
                    <div className="flex flex-col">
                        <p className={`text-lg font-semibold text-navy transition-transform duration-200 ${status ? "line-through" : "decoration-transparent"}`}>
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
                    </div>
                )}
            </div>
            <div className="flex gap-3 items-center">
                <IoPencil 
                    onClick={() => setIsEditing(true)} 
                    className="text-gray-400 cursor-pointer hover:text-yellow-400 transition-colors duration-200"
                    size={20}
                />
                <IoTrashBin 
                    onClick={() => deleteTask(_id)} 
                    className="text-gray-400 cursor-pointer hover:text-coral transition-colors duration-200"
                    size={20}
                />
            </div>
        </div>
    );
}

export default Task;
