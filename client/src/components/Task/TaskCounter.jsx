import { useContext, useEffect, useRef } from "react"
import { TaskContext } from "../../contexts/TaskContext"
import { ToastContext } from "../../contexts/ToastContext";
import { motion } from "framer-motion";

function TaskCounter(){
    const { tasks } = useContext(TaskContext);
    const { addToast } = useContext(ToastContext);
    const  doneTasks = tasks.filter(task => (task.status === true ))
    const showedToast = useRef(false)
    const doneTasksPercentege =  tasks.length > 0 ? (doneTasks.length/tasks.length) : 0;
    
    const circumference = 2 * Math.PI * 40;
    const dashArray = circumference * doneTasksPercentege;
    const remaining = circumference - dashArray;

    useEffect(() => {
        if (tasks.length === doneTasks.length && tasks.length !== 0 && showedToast.current === false ){
            addToast('Congratulations!', 'All tasks are completed!', )
            showedToast.current = true
        }else if(tasks.length !== doneTasks.length){
            showedToast.current = false
        }
    }, [tasks, doneTasks, addToast])


    return(
        <svg width="90" height="90" viewBox="0 0 90 90">
            <circle cx="45" cy="45" r="40" stroke="#f3f4f6" strokeWidth="10" fill="none" />
            <motion.circle 
                cx="45" cy="45" r="40" stroke="#05edaf" strokeWidth="6" fill="none" 
                strokeDasharray={`${dashArray} ${remaining}`}
                strokeDashoffset="63" 
                initial={{strokeDasharray:`${dashArray} ${remaining}`}}
                animate={{strokeDasharray:`${dashArray} ${remaining}`}}
                transition={{ duration: 0.5 }}
            />
            <text x="45" y="45" fill="#191f2b" textAnchor="middle" alignmentBaseline="middle" dominantBaseline="middle" className=" font-Montserrat font-semibold">
                {Math.round(doneTasksPercentege * 100)}%
            </text>
        </svg>
    )
}

export default TaskCounter