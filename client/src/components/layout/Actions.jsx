import { useState } from "react";
import { RiEditLine, RiDeleteBinLine } from "react-icons/ri";

function Actions({ setIsModalActive, setIsEditing, iconSize = 14, color }) {
  const [hoveredAction, setHoveredAction] = useState(null);

  return (
    <div className="font-Montserrat text-sm">
      <div className="flex items-center gap-1">
        <button
          onClick={() => setIsEditing(true)}
          onMouseEnter={() => setHoveredAction("edit")}
          onMouseLeave={() => setHoveredAction(null)}
          className="p-1 rounded-md hover:bg-gray-50 transition-colors duration-200 relative group"
        >
          <RiEditLine
            size={iconSize}
            className="text-gray-400 group-hover:text-gray-600 transition-colors duration-200"
          />
          {hoveredAction === "edit" && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-gray-500  bg-white border border-gray-100 rounded-md shadow-sm whitespace-nowrap">
              Edit
            </div>
          )}
        </button>

        <button
          onClick={() => setIsModalActive(true)}
          onMouseEnter={() => setHoveredAction("delete")}
          onMouseLeave={() => setHoveredAction(null)}
          className="p-1 rounded-md hover:bg-red-50  transition-colors duration-200 relative group"
        >
          <RiDeleteBinLine
            size={iconSize}
            className="text-gray-400 group-hover:text-red-500 transition-colors duration-200"
          />
          {hoveredAction === "delete" && (
            <div className="absolute -top-8 left-1/2 -translate-x-1/2   px-2 py-1 text-xs text-gray-500  bg-white border border-gray-100  rounded-md shadow-sm whitespace-nowrap">
              Delete
            </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Actions;
