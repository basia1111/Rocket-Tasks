import React from "react";
import TaskCounter from "../Task/TaskCounter";

function DashboardHeader() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white/50 shadow-lg backdrop-blur-md rounded-xl p-8 mb-6 border border-space-primary/20 relative overflow-hidden">
      <div className="relative flex w-full justify-between items-start">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#1E3A6E] mb-2">
            Your Mission Control
          </h1>
          <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
            {formattedDate}
          </p>
        </div>
        <div className="relative">
          <TaskCounter />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
