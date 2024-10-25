import { useContext } from 'react';
import { TaskContext } from '../contexts/TaskContext';
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineCircle, MdOutlineCheckCircleOutline } from "react-icons/md";

function Task({ task }) {
    const { toggleStatus, deleteTask } = useContext(TaskContext);
    const { title, _id, dueDate, status } = task;

    return (
        <div>
            {status ? (
                <MdOutlineCheckCircleOutline onClick={() => toggleStatus(_id)} />
            ) : (
                <MdOutlineCircle onClick={() => toggleStatus(_id)} />
            )}
            <span>{title} </span>
            <span>Due date: {dueDate} </span>
            <RiDeleteBin6Line onClick={() => deleteTask(_id)} />
        </div>
    );
}

export default Task;
