import TaskCounter from "../Task/TaskCounter";

function DashboardHeader(){

    const formattedDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',  
        year: 'numeric',  
        month: 'long',     
        day: 'numeric'
    });
    return(
        <div className="flex w-full justify-between">
            <div>
                <h1 className="md:text-4xl text-2xl font-Montserrat font-bold text-BLACK pb-2">
                    Tasks
                </h1>  
                <p className="md:text-base text-sm font-Montserrat font-normal text-BLACK  ">
                    {formattedDate}
                </p>
            </div>
            <TaskCounter /> 
        </div>
    )
}

export default DashboardHeader