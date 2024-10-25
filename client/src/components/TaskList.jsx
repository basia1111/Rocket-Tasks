import { useEffect, useContext } from "react";
import { TaskContext } from '../contexts/TaskContext';
import Task from "./Task";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    return (
        <div> 
            <h1>Task List</h1>
            {tasks.map(task => (
                <Task key={task._id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
