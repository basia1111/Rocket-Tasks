import { useContext, useState } from "react";
import { TaskContext } from '../../contexts/TaskContext';
import { TagContext } from '../../contexts/TagContext';
import CreateFormInput from "./forms-components/CreateFormInput";
import SubmitButton from "./forms-components/SubmitButton";


function TaskForm({ closeForm, isEditing, title, dueDate, id, currentTags, closeActions}) {
    
    const { addTask, editTask } = useContext(TaskContext);
    const [formTitle, setFormTitle] = useState(isEditing ? title : '');
    const [formDate, setFormDate] = useState(isEditing && dueDate ? new Date(dueDate).toISOString().split("T")[0] : '');
    const [error, setError] = useState(null)

    const { tags } = useContext(TagContext);
    const [selectedTags, setSelectedTags] = useState(isEditing && tags ? currentTags.map( t => t._id) : []);

    const handleTitleChange = (event) => setFormTitle(event.target.value);
    const handleDateChange = (event) => setFormDate(event.target.value);

    const handleTagChange = async(event) => {

        let tag = event.target.value

        if (selectedTags.includes(tag)){
            setSelectedTags(prevTags => prevTags.filter( t => (
                t !== tag
            )))
        } else{
            setSelectedTags(prevTags => [...prevTags, tag])
        }
    }

    const handleUpdate = async(id, newTask) => {
        setError(null);
        try {
            await editTask(id, newTask);
            closeForm();
        } catch(error) {
            setError(error.message);
        }
    }

    const handleCreate = async(newTask) => {
        setError(null);
        try {
            await addTask(newTask);
            closeForm()
            setFormTitle(t => "")
            setFormDate( d => "")
            setSelectedTags(t => [])
        } catch (error) {
            setError(error.message);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const newTask = { 
            title: formTitle, 
            dueDate: formDate, 
            tags: selectedTags
        };
 
        if (isEditing && id) {
            handleUpdate(id, newTask);
            closeActions()
        } else {
            handleCreate(newTask); 
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`flex font-Montserrat text-navy w-full  gap-4 ${isEditing ? "md:flex-row flex-col md:items-center items-start" : "flex-col"}`}> 
         
            <CreateFormInput value={formTitle} type="text" name="title" onChange={handleTitleChange} placeholder="Enter task title..."/>
            <CreateFormInput value={formDate} type="date" name="dueDate" onChange={handleDateChange} />

            <div className="flex gap-2 items-center flex-wrap" >
                {tags.map(tag => (
                    <div key={tag._id} >
                        <label htmlFor={tag._id}>
                            <div 
                                className={`${selectedTags.includes(tag._id) ? "shadow-custom bg-gray-50" : "shadow-md"} flex w-auto gap-1 items-center rounded-full border-2 px-2 font-Montserrat font-normal text-sm `}
                                style={{ borderColor: tag.color }}
                            >
                                <div>{tag.name}</div>
                            </div>
                        </label>
                        <input onChange={handleTagChange} type="checkbox"  id={tag._id} name={tag._id} value={tag._id} className="hidden"/>
                    </div>
                ))}
            </div>
            
            
            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            {isEditing ?
            <div className="min-h-full flex items-center py-2">
                <button type="submit" className="h-full text-white py-1 px-2 bg-blue-gray rounded-full"> Save </button>
            </div>
                
            :
                <SubmitButton content="Create task" />
            }
            

        </form>
    );
}

export default TaskForm;
