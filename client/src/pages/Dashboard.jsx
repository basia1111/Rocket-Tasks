import React from "react";
import TaskList from "../components/Task/TaskList";
import TagList from "../components/Tag/TagList";
import DashboardHeader from "../components/layout/DashboardHeader";
import { TaskContextProvider } from "../contexts/TaskContext";
import TaskFormToggle from "../components/Task/TaskFormToggle";
import TagFormToggle from "../components/Tag/TagFormToggle";

const Dashboard = () => {
  return (
    <TaskContextProvider>
      <div className="min-w-[320px] max-w-[1320px] w-full p-4 font-Montserrat">
        <DashboardHeader />
        {/* Mission Tags Section */}
        <div className="bg-white/85 backdrop-blur-md rounded-xl p-8 mb-6 border border-space-primary/30 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1E3A6E] mb-1">
                Mission Tags
              </h2>
              <p className="text-sm text-gray-400 font-medium">
                Organize your tasks with custom tags
              </p>
            </div>
            <TagFormToggle />
          </div>
          <div className="flex gap-4 flex-wrap">
            <TagList />
          </div>
        </div>

        {/* Active Missions Section */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 mb-6 border border-space-primary/30 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-[#1E3A6E] mb-1">
                Active Missions
              </h2>
              <p className="text-sm text-gray-400 font-medium">
                Track your ongoing tasks
              </p>
            </div>
          </div>
          <TaskList />
        </div>

        {/* Task Toggle Button */}
        <div className="fixed bottom-8 right-8">
          <TaskFormToggle />
        </div>
      </div>
    </TaskContextProvider>
  );
};

export default Dashboard;
