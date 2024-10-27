import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineCircle, MdOutlineCheckCircleOutline, MdOutlineEdit } from "react-icons/md";
import TaskForm from './TaskForm';

function Task({ task }) {
    const { toggleStatus, deleteTask } = useContext(TaskContext);
    const { title, _id, dueDate, status } = task;

    const [isEditing, setIsEditing] = useState(false);

    return (
        <div>
            {status ? (
                <MdOutlineCheckCircleOutline onClick={() => toggleStatus(_id)} />
            ) : (
                <MdOutlineCircle onClick={() => toggleStatus(_id)} />
            )}
            {isEditing ? (
                <TaskForm editMode={true} id={task._id}  title={task.title}  dueDate={task.dueDate} onCancel={() => setIsEditing(false)} />
            ) : (
                <div> 
                    <p>{title}</p>
                    <p>{ dueDate ? `Due date: ${new Date(dueDate).toISOString().split("T")[0]}`: ''}</p>
                </div>
            )}
              
            <RiDeleteBin6Line onClick={() => deleteTask(_id)} />
            <MdOutlineEdit onClick={() => setIsEditing( e => true)}  />
        </div>
    );
}

export default Task;
