import { useContext, useState } from "react";
import { TaskContext } from '../../contexts/TaskContext';
import { IoCalendarNumber } from "react-icons/io5";
import { PiSubtitlesFill } from "react-icons/pi";
import CreateFormInput from "./forms-components/CreateFormInput";
import SubmitButton from "./forms-components/SubmitButton";


function TaskForm({ editMode, id, onCancel, title, dueDate, close}) {
    const { addTask, editTask } = useContext(TaskContext);

    const [formTitle, setFormTitle] = useState(editMode ? title : '');
    const [formDate, setFormDate] = useState(editMode && dueDate ? new Date(dueDate).toISOString().split("T")[0] : '');
    const [error, setError] = useState(null)
    const handleTitleChange = (event) => setFormTitle(event.target.value);
    const handleDateChange = (event) => setFormDate(event.target.value);

    const handleUpdate = async(id, newTask) => {
        setError(null);
        try {
            await editTask(id, newTask);
            onCancel();
        } catch(error) {
            setError(error.message);
        }
    }

    const handleCreate = async(newTask) => {
        setError(null);
        try {
            await addTask(newTask);
            close()
            setFormTitle(t => '')
            setFormDate( d => d)
        } catch (error) {
            setError(error.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newTask = { 
            title: formTitle, 
            dueDate: formDate 
        };
 
        if (editMode && id) {
            handleUpdate(id, newTask);
        } else {
            handleCreate(newTask); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex font-Montserrat text-navy w-full  gap-4 ${editMode ? "md:flex-row flex-col md:items-end" : "flex-col"}`}> 
         
            <CreateFormInput value={formTitle} type="text" name="title" onChange={handleTitleChange} placeholder="Enter task title..."/>
            <CreateFormInput value={formDate} type="date" name="dueDate" onChange={handleDateChange} />
            
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            {editMode ?
            <div className="min-h-full flex items-center py-2">
                <button type="submit" className="h-full text-white py-1 px-2 bg-black rounded-full"> Save </button>
            </div>
                
            :
                <SubmitButton content="Create task" />
            }
            

        </form>
    );
}

export default TaskForm;
