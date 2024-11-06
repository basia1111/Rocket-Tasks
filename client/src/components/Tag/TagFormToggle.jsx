import { useState } from "react"
import { IoAdd } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import TagForm from "../forms/TagForm";

function TagFormToggle(){

    const [isOpen, setIsOpen] = useState(false);
    
    const toggleTagForm = () => {
        setIsOpen(open => !open)
    };

     return(
            <div className="flex items-start gap-2 w-full">
                <div className={`${isOpen ? "visible" : "hidden"}`}>
                    <TagForm  toggleTagForm={toggleTagForm} isEditing={false}/>
                </div>
                <button 
                    onClick={toggleTagForm}
                    className="flex items-center justify-center rounded-full 
                            hover:scale-110 transition-transform duration-200 p-2"
                >
                    {isOpen ? (
                        <FcCancel className="text-blue-gray size-6" />
                    ) : (
                        <IoAdd className="text-blue-gray size-6" />
                    )}
                </button>
            </div>
     )
}

export default TagFormToggle