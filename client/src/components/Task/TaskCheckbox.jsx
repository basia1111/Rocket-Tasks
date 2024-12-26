import { IoCheckmarkCircle, IoEllipseOutline } from "react-icons/io5";

function TaskCheckbox({ status, handleChangeStatus, id }) {
  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => handleChangeStatus(id)}
    >
      <div className="w-5 h-5 relative">
        {status ? (
          <>
            <div className="absolute inset-0 border-2 border-space-primary rounded-lg  bg-space-primary transition-all duration-300" />

            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 w-full h-full p-1 text-white
                       transform transition-transform duration-300 ease-out"
            >
              <path
                d="M20 6L9 17L4 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <>
            <div className="absolute inset-0 border-2 border-gray-200 rounded-lg group-hover:border-space-primary-opacity-60 transition-colors duration-200" />

            <div className="absolute inset-0 rounded-lg bg-space-primary opacity-0 group-hover:opacity-10 transition-opacity duration-200" />

            <svg
              viewBox="0 0 24 24"
              className="absolute inset-0 w-full h-full p-1 text-space-primary opacity-0 group-hover:opacity-40 transform scale-90 group-hover:scale-100 transition-all duration-200 ease-out"
            >
              <path
                d="M20 6L9 17L4 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        )}
      </div>
    </div>
  );
}

export default TaskCheckbox;
