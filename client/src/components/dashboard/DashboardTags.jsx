import React from "react";
import TagFormToggle from "../Tag/TagFormToggle";
import Taglist from "../Tag/TagList";
import { FaTags } from "react-icons/fa";

const BackgroundEffect = ({ position, size, blur }) => (
  <div
    className={`absolute ${position} ${size} bg-space-primary/5 rounded-full ${blur} pointer-events-none`}
  />
);

const DashboardTags = () => {
  const backgroundEffects = [
    {
      position: "top-0 right-0",
      size: "w-48 md:w-64 h-48 md:h-64",
      blur: "blur-2xl md:blur-3xl",
    },
    {
      position: "bottom-0 left-0",
      size: "w-36 md:w-48 h-36 md:h-48",
      blur: "blur-2xl md:blur-3xl",
    },
    { position: "top-4 right-12", size: "w-1.5 md:w-2 h-1.5 md:h-2", blur: "" },
    {
      position: "bottom-8 left-16",
      size: "w-1 md:w-1.5 h-1 md:h-1.5",
      blur: "",
    },
  ];

  return (
    <div className="bg-space-background/30 rounded-xl md:rounded-3xl px-4 py-5 md:p-8 mb-4 md:mb-6 font-Montserrat relative overflow-hidden border border-space-primary/20 backdrop-blur-md">
      {backgroundEffects.map((effect, index) => (
        <BackgroundEffect key={index} {...effect} />
      ))}

      <div className="relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 mb-4 md:mb-6">
          <div className="space-y-1 md:space-y-2">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="bg-space-primary/10 p-1.5 md:p-2 rounded-lg backdrop-blur-sm">
                <FaTags className="text-space-primary w-4 h-4 md:w-5 md:h-5" />
              </div>
              <h2 className="text-lg md:text-xl font-bold text-white">
                Mission Tags
              </h2>
            </div>
            <p className="text-space-primary/60 text-xs md:text-sm font-medium pl-8 md:pl-12">
              Organize your tasks with custom tags
            </p>
          </div>
          <TagFormToggle />
        </div>

        <div className="flex gap-2 md:gap-4 flex-wrap relative">
          <Taglist />
        </div>
      </div>
    </div>
  );
};

export default DashboardTags;
