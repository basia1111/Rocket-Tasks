import React from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import { TaskContextProvider } from "../contexts/TaskContext";
import DashboardTags from "../components/dashboard/DashboardTags";
import DashboardTasks from "../components/dashboard/DashboardTasks";
import { FaStar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <TaskContextProvider>
      <div className="w-full min-h-screen flex flex-col md:p-6">
        <div className="flex-1 flex flex-col rounded-xl md:rounded-3xl items-center relative md:p-6 p-3 overflow-hidden bg-gradient-to-b from-space-background to-[#5e70a2]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

          <div className="absolute top-0 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-space-primary/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-space-primary/10 rounded-full blur-2xl"></div>

          <div className="w-full max-w-[1320px] mx-auto space-y-4 relative z-10 font-Montserrat">
            <DashboardHeader />
            <DashboardTags />
            <DashboardTasks />
          </div>
        </div>
      </div>
    </TaskContextProvider>
  );
};

export default Dashboard;
