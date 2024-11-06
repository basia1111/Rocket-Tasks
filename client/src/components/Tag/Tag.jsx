import { useContext, useState } from "react";
import TaskActions from "../Task/TaskActions";
import TagForm from "../forms/TagForm";
import { TagContext } from "../../contexts/TagContext"

function TagItem({ tag }) {
    const { name, color, _id } = tag;
    const [isEditing, setIsEditing] = useState(false)
    const [isOpen, setIsOpen] =  useState(false)
    const { deleteTag } = useContext(TagContext)
    const [error, setError] = useState(null);

    const handleHoverShow = () => {
        setIsOpen(open => true)
    } 
    const handleHoverHide = () => {
        setIsOpen(open => false)
    } 


    const handleDelete = async (id) => {
        setError(null);
        try {
            await deleteTag(id);
        } catch (error) {
            setError(error.message);
        }
    };

    const toggleTagForm = () => {
        setIsEditing(edit => !edit)
    }

    return (
        <div onMouseEnter={handleHoverShow} onMouseLeave={handleHoverHide}>
            {isEditing ?
                <TagForm setIsOpen={setIsOpen} toggleTagForm={toggleTagForm} isEditing={true} color={color} name={name} id={_id} />
            :
                <div 
                className="flex gap-1 rounded-full border-2 px-2 font-Montserrat font-normal text-sm shadow-md"
                style={{ borderColor: color }}
                 >
                    <div>#{name}</div>
                    <div className={`${isOpen ? "visible" : "hidden" }`}>
                        <TaskActions id={_id} handleDelete={handleDelete} setIsEditing={setIsEditing}/>
                    </div>
                </div>
            }  
        </div>
    );
}

export default TagItem;