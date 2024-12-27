import React from "react";
import TaskList from "../Task/TaskList";
import TaskFormToggle from "../Task/TaskFormToggle";
import { FaSpaceShuttle } from "react-icons/fa";

const DashboardTasks = () => {
  return (
    <div className="bg-space-background/30 backdrop-blur-2xl md:backdrop-blur-3xl rounded-xl md:rounded-3xl px-3 py-4 md:p-8 mb-4 md:mb-6 border border-space-primary/20 flex flex-col h-[calc(100vh-240px)] md:h-[calc(100vh-280px)] font-Montserrat relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-space-primary/5 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 md:w-72 h-48 md:h-72 bg-space-primary/10 rounded-full blur-2xl md:blur-3xl pointer-events-none"></div>
      <div className="absolute top-6 right-24 w-1.5 md:w-2 h-1.5 md:h-2 bg-space-primary/30 rounded-full"></div>
      <div className="absolute bottom-12 left-32 w-1 md:w-1.5 h-1 md:h-1.5 bg-space-primary/20 rounded-full"></div>

      <div className="flex flex-col justify-between mb-4 md:mb-6 relative">
        <div className="space-y-1 md:space-y-2">
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
            <div className="bg-space-primary/10 p-1.5 md:p-2 rounded-lg backdrop-blur-sm">
              <FaSpaceShuttle className="text-space-primary w-4 h-4 md:w-5 md:h-5" />
            </div>
            <h2 className="text-lg md:text-xl font-bold text-white">
              Active Missions
            </h2>
          </div>
          <p className="text-space-primary/60 text-xs md:text-sm font-medium pl-8 md:pl-12">
            Track your ongoing tasks
          </p>
        </div>
        <div className="mt-3 md:mt-4">
          <TaskFormToggle />
        </div>
      </div>

      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-y-auto custom-scrollbar">
          <TaskList />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-16 bg-gradient-to-t from-space-background/30 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default DashboardTasks;
