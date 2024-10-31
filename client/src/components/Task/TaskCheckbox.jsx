import { IoCheckmarkCircle, IoEllipseOutline} from "react-icons/io5";

function TaskCheckbox({status, handleChangeStatus, id}){
    return(
        <>
            {status ? (
                <IoCheckmarkCircle 
                    onClick={() => handleChangeStatus(id)} 
                    className="text-green bg-green-100 rounded-full cursor-pointer hover:scale-110 transition-transform duration-200"
                    size={24}
                />
            ) : (
                <IoEllipseOutline 
                    onClick={() => handleChangeStatus(id)} 
                    className="text-coral cursor-pointer hover:scale-110 transition-transform duration-200"
                    size={24}
                />
            )}
        </>
    )
}

export default TaskCheckbox