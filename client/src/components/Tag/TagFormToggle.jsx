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
            <div className="flex items-center gap-2 w-full py-4">
                <div className={`${isTagFormOpen ? "visible" : "hidden"}`}>
                    <TagForm  closeForm={hideTagForm} isEditing={false} isTagFormOpen={isTagFormOpen}/>
                </div>
                <button 
                    className="flex items-center justify-center rounded-full 
                            hover:scale-105 transition-transform duration-200 "
                >
                    {isTagFormOpen ? (
                        <FcCancel onClick={hideTagForm} className="text-blue-gray size-6" />
                    ) : (
                        <div onClick={showTagForm} className=" bg-blue-gray rounded-full flex px-4 py-1 font-Montserrat text-sm items-center gap-2 text-white">
                            <span> Add new tag</span>
                            <IoAdd  className="text-white size-6" />
                        </div>
                    )}
                </button>
            </div>
     )
}

export default TagFormToggle