import { useContext } from "react";
import { TaskContext } from '../../contexts/TaskContext';
import Task from "./Task";
import { motion, AnimatePresence } from "framer-motion";

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
            <h1 className="md:text-4xl text-2xl font-Montserrat font-bold text-BLACK pb-2">
                Tasks
            </h1>  

            <p className="md:text-base text-sm font-Montserrat font-normal text-BLACK md:pb-8 pb-4">
                {formattedDate}
            </p>

            <motion.div className="font-PTSans flex flex-col h-full overflow-y-scroll md:pb-6 pb-16" layout>
                { tasks.length === 0 ? 
                    <div className="h-full w-full flex flex-col items-center justify-center font-Montserrat"> 
                        <h2 className="font-semibold text-2xl max-w-sm">Ready for Liftoff?</h2>
                        <span className= "text-5xl max-w-sm">🛸</span>
                        <p className="text-base max-w-sm text-center font-normal" >It looks like your task list is currently orbiting in silence. Enter your first task to kick off your adventure through the galaxy of productivity!</p>
                    </div>
                :
                <AnimatePresence mode="popLayout">
                    {tasks.map(task => (
                        <Task key={task._id} task={task} />
                    )) }  
                </AnimatePresence>   
                }
                
            </motion.div>
            <div className="absolute bottom-[-1px] left-0 right-0 md:h-24 h-14 bg-gradient-to-b  from-transparent via-white to-white pointer-events-none"></div>
        </div>
    );
}

export default TaskList;
