import { useEffect, useContext } from "react";
import { TaskContext } from '../contexts/TaskContext';
import Task from "./Task";
import TaskForm from "./TaskForm";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    return (
        <div> 
            <h1>Task List</h1>
            <TaskForm />
            <div>
                {tasks.map(task => (
                    <Task key={task._id} task={task} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
