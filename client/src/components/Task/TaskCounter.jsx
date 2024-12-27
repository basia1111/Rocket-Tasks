import { useContext } from "react";
import { TaskContext } from "../../contexts/TaskContext";
import { motion } from "framer-motion";

function TaskCounter() {
  const { tasks } = useContext(TaskContext);
  const donePercentage =
    tasks.length > 0
      ? tasks.filter((task) => task.status).length / tasks.length
      : 0;
  const circumference = 2 * Math.PI * 50;
  const dashArray = circumference * donePercentage;
  const remaining = circumference - dashArray;

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-space-primary/5 rounded-full blur-xl"></div>
      <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-space-primary/30 rounded-full"></div>
      <div className="absolute bottom-2 left-2 w-1 h-1 bg-space-primary/20 rounded-full"></div>
      <svg
        viewBox="0 0 120 120"
        className="relative z-10 w-[80px] h-[80px] md:w-[120px] md:h-[120px]"
      >
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <circle
          cx="60"
          cy="60"
          r="50"
          stroke="url(#gradientBg)"
          strokeWidth="10"
          fill="none"
          opacity="0.2"
        />
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={`${dashArray} ${remaining}`}
          strokeDashoffset="78.5"
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${dashArray} ${remaining}` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          filter="url(#glow)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A7DEFF" />
            <stop offset="100%" stopColor="#87CEEB" />
          </linearGradient>
          <linearGradient id="gradientBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#87CEEB" />
            <stop offset="100%" stopColor="#5DA1C7" />
          </linearGradient>
        </defs>
      </svg>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <span className="font-Montserrat font-bold text-lg md:text-2xl text-white">
          {Math.round(donePercentage * 100)}%
        </span>
        <span className="text-space-primary/60 font-Montserrat font-medium text-[0.5rem] md:text-xs md:mt-1">
          Complete
        </span>
      </motion.div>
    </div>
  );
}
export default TaskCounter;
