import { useContext } from "react";
import { TaskContext } from '../contexts/TaskContext';
import Task from "./Task";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',  
        year: 'numeric',  
        month: 'long',     
        day: 'numeric'
    });

    return (
        <div className="task-list-container flex flex-col w-4/6 p-10">
  
            <h1 className="task-list-title text-4xl font-Montserrat font-bold text-navy pb-2">
                Tasks
            </h1>  

            <p className="task-list-date text-l font-Montserrat font-normal text-navy pb-8">
                {formattedDate}
            </p>

            <div className="task-list font-PTSans flex flex-col h-full overflow-y-scroll">
                {tasks.map(task => (
                    <Task key={task._id} task={task} />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
