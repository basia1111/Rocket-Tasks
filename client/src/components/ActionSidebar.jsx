import TaskForm from "./TaskForm";

function ActionSidebar(){
    return(
        <div className="p-6 bg-gray-100 rounded-xl w-2/6">
            <h2 className= "text-2xl font-Montserrat font-semibold mb-4"> Create New Task</h2>
            <TaskForm /> 
        </div>
    )
}

export default ActionSidebar