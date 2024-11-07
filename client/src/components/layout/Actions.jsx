import { useState } from "react";
import { CiEdit, CiCircleRemove} from "react-icons/ci";

function Actions({setIsModalActive, setIsEditing, iconSize, color}){


    return(
        <div className="font-Montserrat text-sm">
            <div className="flex items-start right-0 z-50 gap-2">
                <CiEdit 
                    onClick={() => setIsEditing(true)} 
                    className={`text-[${color}] cursor-pointer hover:text-yellow transition-colors duration-200`}
                    size={iconSize}
                />
                <CiCircleRemove 
                    onClick={() => setIsModalActive(true)} 
                    className={`text-[${color}] text-left cursor-pointer hover:text-coral transition-colors duration-200`}
                    size={iconSize}
                />
            </div>
        </div>

    )
}

export default Actions