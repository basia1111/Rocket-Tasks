import { IoCheckmarkCircle, IoEllipseOutline } from "react-icons/io5";

function TaskCheckbox({ status, handleChangeStatus, id }) {
  return (
    <div
      className="relative cursor-pointer group"
      onClick={() => handleChangeStatus(id)}
    >
      <div className="w-5 h-5 relative">
        {status ? <IoEllipseOutline /> : <IoCheckmarkCircle />}
      </div>
    </div>
  );
}

export default TaskCheckbox;
