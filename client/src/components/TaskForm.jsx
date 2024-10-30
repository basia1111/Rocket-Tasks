import { useContext, useState } from "react";
import { TaskContext } from '../contexts/TaskContext';
import { IoAddCircleOutline } from "react-icons/io5";

function TaskForm({ editMode, id, onCancel, title, dueDate, close}) {
    const { addTask, editTask } = useContext(TaskContext);

    const [formTitle, setFormTitle] = useState(editMode ? title : '');
    const [formDate, setFormDate] = useState(editMode && dueDate ? new Date(dueDate).toISOString().split("T")[0] : '');
    const[error, setError] = useState(null)
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

        event.target.reset();
    };

    return (
        <form onSubmit={handleSubmit} className={`flex font-PTSans w-full  gap-4 ${editMode ? "md:flex-row flex-col" : "flex-col"}`}> 
            <input 
                type="text"
                id="title"
                name="title"
                value={formTitle}
                onChange={handleTitleChange}
                className="w-full py-2 px-4 border-b-[1px] border-gray-300 bg-transparent focus:outline-none transition-all duration-200"
                placeholder="Enter task title..."
            />
            <input
                placeholder="Due Date"
                onFocus={(e) => e.target.type = 'date'}
                onBlur={(e) => e.target.type = e.target.value ? 'date' : 'text'}
                id="dueDate"
                name="dueDate"
                value={formDate}
                onChange={handleDateChange}
                className="w-full py-2 px-4 border-b-[1px] border-gray-300 bg-transparent focus:outline-none transition-all duration-200"
            />
            <button
                type="submit"
                onClick={close&&formTitle&&!editMode? close : ''}
                className="bg-green text-white font-semibold py-2 px-4 rounded-md hover:bg-green-dark transition-colors duration-200"
            >
                {editMode ? 'Save' : 'Create Task'}
            </button>

            {error && <div>{error}</div>}
        </form>
    );
}

export default TaskForm;
