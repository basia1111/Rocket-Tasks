import { useContext, useRef } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { motion } from "framer-motion";

function TaskCounter() {
  const { tasks } = useContext(TaskContext);
  const doneTasks = tasks.filter((task) => task.status === true);
  const showedToast = useRef(false);

  const doneTasksPercentege =
    tasks.length > 0 ? doneTasks.length / tasks.length : 0;

  const circumference = 2 * Math.PI * 50;
  const dashArray = circumference * doneTasksPercentege;
  const remaining = circumference - dashArray;

  return (
    <div className="relative">
      <div className="relative">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <defs>
            <linearGradient
              id="backgroundGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#A7DEFF" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient
              id="progressGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#A7DEFF" />
            </linearGradient>
          </defs>

          <circle
            cx="60"
            cy="60"
            r="50"
            stroke="url(#backgroundGradient)"
            strokeWidth="10"
            fill="none"
          />

          <motion.circle
            cx="60"
            cy="60"
            r="50"
            stroke="url(#progressGradient)"
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${dashArray} ${remaining}`}
            strokeDashoffset="78.5"
            initial={{ strokeDasharray: `0 ${circumference}` }}
            animate={{ strokeDasharray: `${dashArray} ${remaining}` }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <span className="font-Montserrat font-bold text-2xl text-space-background bg-clip-text text-transparent">
              {Math.round(doneTasksPercentege * 100)}%
            </span>
          </div>
          <span className="text-gray-400 font-Montserrat font-medium text-xs tracking-wide   mt-1">
            Complete
          </span>
        </div>
      </div>
    </div>
  );
}

export default TaskCounter;
