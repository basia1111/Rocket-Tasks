import { useContext, useState } from "react";
import Actions from "../layout/Actions";
import TagForm from "../forms/TagForm";
import { TagContext } from "../../contexts/TagContext"
import { TaskContext } from "../../contexts/TaskContext"
import ConfirmDeleteModal from "../layout/ConfirmDeleteModal";

function TagItem({ tag }) {
    const { name, color, _id } = tag;
    const { deleteTag } = useContext(TagContext)
    const { getTasks } = useContext(TaskContext)
    
    
    const [isEditing, setIsEditing] = useState(false)
    const [isTagActionsOpen, setIsTagActionsOpen] =  useState(false)
    const [isModalActive, setIsModalActive] = useState(false)
    const [error, setError] = useState(null);

    const showTagActions = () => {
        setIsTagActionsOpen(open => true)
    } 
    const hideTagActions = () => {
        setIsTagActionsOpen(open => false)
    } 

    const handleDelete = async (id) => {
        setError(null);
        try {
            await deleteTag(id);
            getTasks()

        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <div onMouseEnter={showTagActions} onMouseLeave={hideTagActions}>
            {isEditing ?
                <TagForm hideTagActions={hideTagActions} closeForm={() => setIsEditing(false)} isEditing={isEditing} color={color} name={name} id={_id} />
            :
                <div 
                className="flex gap-1 pl-4 items-center rounded-full border-2 py-1 px-2 font-Montserrat font-normal text-sm shadow-md"
                style={{ borderColor: color }}
                 >
                    <div>{name}</div>
                    <div className={`${isTagActionsOpen ? "visible" : "opacity-0 pointer-events-none" }`}>
                        <Actions setIsModalActive={setIsModalActive} setIsEditing={setIsEditing} iconSize="15" color="#191f2b"/>
                    </div>
                </div>
            }  
             <ConfirmDeleteModal isModalActive={isModalActive} setIsModalActive={setIsModalActive} handleDelete={handleDelete} id={_id}  message={'Are you sure you want to delete tag?'}/>
        </div>
    );
}

export default TagItem;