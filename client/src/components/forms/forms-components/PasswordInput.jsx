import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";

const PasswordInput = ({ ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative group mb-4">
      <div className="relative flex items-center">
        <input
          {...props}
          type={showPassword ? "text" : "password"}
          className="w-full py-3 px-10 rounded-lg bg-space-background/40 border border-space-primary-opacity-20 text-space-primary placeholder-space-primary-opacity-40 outline-none focus:border-space-primary-opacity-50 hover:border-space-primary-opacity-30 transition-all duration-300 backdrop-blur-sm"
        />
        <IoLockClosed className="absolute z-50 left-3 text-space-primary-opacity-40 w-5 h-5 group-hover:text-space-primary transition-colors duration-300" />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 text-space-primary-opacity-40 hover:text-space-primary transition-colors duration-300 focus:outline-none"
        >
          {showPassword ? (
            <IoEyeSharp className="w-5 h-5" />
          ) : (
            <IoEyeOffSharp className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
