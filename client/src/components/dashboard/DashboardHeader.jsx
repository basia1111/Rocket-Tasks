import React from "react";
import { FaRocket } from "react-icons/fa";
import TaskCounter from "../Task/TaskCounter";

export function DashboardHeader() {
  const formattedDate = new Date()
    .toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();

  return (
    <div className="bg-space-background/30  rounded-xl md:rounded-3xl md:p-8 p-4 mb-6 font-Montserrat relative overflow-hidden border border-space-primary/20 backdrop-blur-md">
      <div className="absolute top-0 right-0 w-72 h-72 bg-space-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-space-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-4 right-8 w-2 h-2 bg-space-primary/40 rounded-full"></div>
      <div className="absolute top-12 right-32 w-1.5 h-1.5 bg-space-primary/30 rounded-full"></div>
      <div className="absolute bottom-8 left-24 w-2 h-2 bg-space-primary/20 rounded-full"></div>
      <div className="relative flex w-full justify-between items-center gap-2">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="bg-space-primary/10 p-2 rounded-lg backdrop-blur-sm">
              <FaRocket className="text-space-primary md:size-6 size-4" />
            </div>
            <h1 className="md:text-2xl text-xl font-bold text-white">
              Mission Control
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-space-primary/60 text-xs md:text-sm font-medium tracking-wide">
              {formattedDate}
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-space-primary/10 to-space-primary/5 md:p-4 p-2 rounded-2xl backdrop-blur-sm border border-space-primary/20">
          <TaskCounter />
        </div>
      </div>
    </div>
  );
}

export default DashboardHeader;
