import TaskList from '../components/Task/TaskList';
import TagList from '../components/Tag/TagList'
import DashboardHeader from '../components/layout/DashboardHeader';
import { TaskContextProvider } from '../contexts/TaskContext';
import TaskFormToggle from '../components/Task/taskFormToggle';
import TagFormToggle from '../components/Tag/TagFormToggle';
import ConfirmDeleteModal from '../components/layout/ConfirmDeleteModal';

function Dashboard (){

    return(
        <TaskContextProvider>
                <div className="relative min-w-[320px] max-w-[1320px] h-full w-full flex gap-8 bg-white rounded-xl shadow-md p-4 overflow-x-hidden">         
                    <div className="flex flex-col  w-full md:p-10 p4">     
                        <DashboardHeader />
                        <TagList />
                        <TagFormToggle />
                        <TaskList />
                    </div>   
                    <TaskFormToggle />
                </div>     
        </TaskContextProvider>
    )
}


export default Dashboard