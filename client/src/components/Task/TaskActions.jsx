import { IoTrashBin, IoPencil } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useState } from "react";

function TaskActions({id, handleDelete, setIsEditing}){

    const[isOpen, setIsOpen] =  useState(false)

    const handleHover = () => {
        setIsOpen(open => !open)
        console.log(isOpen)
    }

    return(
        <div className="relative font-Montserrat text-sm"  onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <HiOutlineDotsHorizontal/>
            <div className={`${isOpen ? "visible" : "hidden" } flex  flex-col  items-start absolute top-2 py-2 px-4 right-0 z-50  gap-3  bg-white rounded-md border-[1px] border-gray-100`}>
                <button 
                    onClick={() => setIsEditing(true)} 
                    className="text-blue-gray cursor-pointer hover:text-yellow hover:text-yellow-400 transition-colors duration-200"
                    size={20}
                >
                    Edit
                </button>
                <button 
                    onClick={() => handleDelete(id)} 
                    className="text-blue-gray text-left cursor-pointer hover:text-coral transition-colors duration-200"
                    size={20}
                >
                    Delete
                </button>
            </div>
        </div>

    )
}

export default TaskActions