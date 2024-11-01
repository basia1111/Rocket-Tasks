import { IoTrashBin, IoPencil } from "react-icons/io5";
function TaskActions({id, handleDelete, setIsEditing}){

    return(
        <div className="flex gap-3 items-center">
            <IoPencil 
                onClick={() => setIsEditing(true)} 
                className="text-blue-gray cursor-pointer hover:text-yellow-400 transition-colors duration-200"
                size={20}
            />
            <IoTrashBin 
                onClick={() => handleDelete(id)} 
                className="text-blue-gray cursor-pointer hover:text-coral transition-colors duration-200"
                size={20}
            />
     </div>
    )
}

export default TaskActions