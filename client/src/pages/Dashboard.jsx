import TaskList from '../components/Task/TaskList';
import ActionSidebar from '../components/layout/ActionSidebar';
import { TaskContextProvider } from '../contexts/TaskContext';

function Dashboard (){

    return(
        <TaskContextProvider>
                <div className="relative min-w-[320px] max-w-[1320px] h-full w-full flex gap-8 bg-white rounded-xl shadow-md p-4 overflow-x-hidden">         
                    <TaskList />
                    <ActionSidebar />
                </div>
        </TaskContextProvider>
    )
}

export default Dashboard