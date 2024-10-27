import { useEffect, useContext, useState } from "react";
import { TaskContext } from '../contexts/TaskContext';
import Task from "./Task";

function TaskForm({editMode, id, onCancel, title, dueDate}){

    const{addTask, editTask} = useContext(TaskContext)
    const[formTitle, setFormTitle] = useState(editMode ? title : '')
    const[formDate, setFormDate] = useState(editMode && dueDate ? new Date(dueDate).toISOString().split("T")[0] : '')

    const handleTitleChange = (event) =>{
        setFormTitle(t => event.target.value)
    }
    const handleDateChange = (event) => {
        setFormDate(t => event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const title = event.target.title.value; 
        const dueDate = event.target.dueDate.value; 

        const newTask = {
            title,
            dueDate,
        };

        if(editMode && id){
            editTask(id, newTask)
            onCancel()
        } else {
            addTask(newTask)
        }
        
        event.target.reset(); 
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id="title" name="title" value={formTitle} onChange={handleTitleChange} required/>
                <input type="date" id="dueDate" name="dueDate" value={formDate} onChange={handleDateChange} />
                <button type ="submit"> Add task</button>
            </form>
        </div>
    )
}

export default TaskForm