import { useContext } from "react";
import { TaskContext } from '../../contexts/TaskContext';
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
        <div className="relative flex flex-col md:w-4/6  w-full md:p-10 p4">
  
            <h1 className="text-4xl font-Montserrat font-bold text-BLACK pb-2">
                Tasks
            </h1>  

            <p className="text-l font-Montserrat font-normal text-BLACK md:pb-8 pb-4">
                {formattedDate}
            </p>

            <div className="font-PTSans flex flex-col h-full overflow-y-scroll md:pb-6 pb-16">
                {tasks.map(task => (
                    <Task key={task._id} task={task} />
                ))}
            </div>
            <div className="absolute bottom-[-1px] left-0 right-0 md:h-24 h-14 bg-gradient-to-b  from-transparent via-white to-white pointer-events-none"></div>
        </div>
    );
}

export default TaskList;
