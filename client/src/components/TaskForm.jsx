import { useContext, useState } from "react";
import { TaskContext } from '../contexts/TaskContext';
import { IoAddCircleOutline } from "react-icons/io5";

function TaskForm({ editMode, id, onCancel, title, dueDate }) {
    const { addTask, editTask } = useContext(TaskContext);
    const [formTitle, setFormTitle] = useState(editMode ? title : '');
    const [formDate, setFormDate] = useState(editMode && dueDate ? new Date(dueDate).toISOString().split("T")[0] : '');

    const handleTitleChange = (event) => setFormTitle(event.target.value);
    const handleDateChange = (event) => setFormDate(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newTask = { title: formTitle, dueDate: formDate };

        if (editMode && id) {
            editTask(id, newTask);
            onCancel();  
        } else {
            addTask(newTask); 
        }

        event.target.reset();
    };

    return (
        <div className={`${editMode ? "font-PTSans rounded-xl w-full" : "font-PTSans p-6 bg-gray-100 rounded-xl w-2/6"}`}>

            {!editMode && (
                <h2 className= {!editMode ? "text-2xl font-Montserrat font-semibold mb-4" : "hidden"}>
                    Create New Task
                </h2>
            )}

            <form onSubmit={handleSubmit} className={`flex ${editMode ? "flex-row gap-4" : "flex-col gap-4"}`}>
                
                <div className="flex flex-col">
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={formTitle}
                        onChange={handleTitleChange}
                        required
                        className="w-full py-2 px-4 border-b-[1px] border-gray-300 bg-transparent focus:outline-none transition-all duration-200"
                        placeholder="Enter task title..."
                    />
                </div>
                
                <div className="flex flex-col">
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
                </div>

                <button
                    type="submit"
                    className="bg-green text-white font-semibold py-2 px-4 rounded-md hover:bg-green-dark transition-colors duration-200"
                >
                    {editMode ? 'Save' : 'Create Task'}
                </button>
            </form>

          
        </div>
    );
}

export default TaskForm;
