import { useState } from "react";
import { IoLockClosed, IoEye, IoEyeOff } from "react-icons/io5";

function PasswordInput({name, placeholder, value, onChange}){

    const[isVisible, setIsVisible] = useState(false)
    const changeVisibility = (event) => {
        setIsVisible(s => !s)
    }

    return(
        <div className="relative">
            <IoLockClosed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
                type= {isVisible ? "text": "password" }
                name={name} id={name} value={value} 
                onChange={onChange}
                placeholder={placeholder}
                className="w-full py-4 pl-10 pr-4 border-b-[1px] border-gray-300 bg-transparent focus:outline-none focus:border-green-500 transition-all duration-200"
            />

            {isVisible ? (
                <IoEye  className=" text-black absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={changeVisibility} />
            ) : (
                <IoEyeOff className="text-black absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={changeVisibility} />
            )}


        </div>

    )
}

export default PasswordInput