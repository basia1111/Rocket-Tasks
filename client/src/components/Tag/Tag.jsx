import { useContext, useState } from "react";
import { TagContext } from "../../contexts/TagContext"
import { TaskContext } from "../../contexts/TaskContext"
import Actions from "../layout/Actions";
import TagForm from "../forms/TagForm";
import ConfirmDeleteModal from "../layout/ConfirmDeleteModal";
import { motion } from "framer-motion";

function TagItem({ tag, isSelected, onTagSelect }) {
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

    const handleActionClick = (e) => {
      e.preventDefault();
      e.stopPropagation();
    }


    return (
        <motion.div  onClick={(e) => {
                if (!e.target.closest('.tag-actions')) {
                   onTagSelect(_id)
                }
              }} 
              onMouseEnter={showTagActions} 
              onMouseLeave={hideTagActions}
              initial={{ scale: 0, opacity: 0 }}  
              animate={{ scale: 1, opacity: 1 }}  
              exit={{ scale: 0, opacity: 0 }}      
              transition={{ type: 'spring', stiffness: 280, damping: 25 }}
              layout
        >
            {isEditing ?
              <TagForm hideTagActions={hideTagActions} closeForm={() => setIsEditing(false)} isEditing={isEditing} color={color} name={name} id={_id} />
            :
              <div 
              className={`${isSelected ? ' shadow-custom' : ' hover:bg-gray-50 shadow-md'} tag-actions  flex gap-1 pl-4 items-center rounded-full border-2 py-1 px-2 font-Montserrat font-normal text-sm `}
              style={{ borderColor: color }}
              >
                <div>{name}</div>
                <div  onClick={handleActionClick} className={`${isTagActionsOpen ? "visible" : "opacity-0 pointer-events-none" }`}>
                  <Actions setIsModalActive={setIsModalActive} setIsEditing={setIsEditing} iconSize="15" color="#191f2b"/>
                </div>
              </div>
            }  
          <ConfirmDeleteModal isModalActive={isModalActive} setIsModalActive={setIsModalActive} handleDelete={handleDelete} id={_id}  message={'Are you sure you want to delete tag?'}/>
      </motion.div>
    );
}

export default TagItem;