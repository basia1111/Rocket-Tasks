import React from "react";

const TagButton = ({ name, color, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="px-3 py-1 rounded-full text-sm"
    style={{
      backgroundColor: isSelected ? `#ffffff50` : "white",
      borderColor: `${color}30`,
      borderWidth: 1,
      color,
    }}
  >
    {name}
  </button>
);

export default TagButton;
