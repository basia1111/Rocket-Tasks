import { useState } from "react"
import { IoAdd } from "react-icons/io5";
import { FcCancel } from "react-icons/fc";
import TagForm from "../forms/TagForm";

function TagFormToggle(){

    const [isTagFormOpen, setTagFormOpen] = useState(false);
    
    const showTagForm = () => {
        setTagFormOpen(open => true)
    } 
    const hideTagForm = () => {
        setTagFormOpen(open => false)
    } 

     return(
            <div className="flex items-start gap-2 w-full">
                <div className={`${isTagFormOpen ? "visible" : "hidden"}`}>
                    <TagForm  closeForm={hideTagForm} isEditing={false}/>
                </div>
                <button 
                    className="flex items-center justify-center rounded-full 
                            hover:scale-110 transition-transform duration-200 p-2"
                >
                    {isTagFormOpen ? (
                        <FcCancel onClick={hideTagForm} className="text-blue-gray size-6" />
                    ) : (
                        <IoAdd onClick={showTagForm} className="text-blue-gray size-6" />
                    )}
                </button>
            </div>
     )
}

export default TagFormToggle