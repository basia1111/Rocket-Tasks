import React from "react";

const TagButton = ({ name, color, isSelected, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="px-3 py-1 rounded-full text-sm"
    style={{
      backgroundColor: isSelected ? "white" : "#0A112815",
      borderColor: `${color}60`,
      borderWidth: isSelected ? 2 : 1,
      color,
    }}
  >
    {name}
  </button>
);

export default TagButton;
