import { Link } from 'react-router-dom' 
import { AuthContext } from '../../contexts/AuthContext' 
import { useContext } from 'react'
import { IoExit } from "react-icons/io5";

function Header(){

    const {user, logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }
    return(
        <>
        <div className="w-full h-14 flex items-center justify-center p-4"> 
            <div className="max-w-[1320px] w-full flex justify-between items-center sm:px-2 pt-2"> 
                <h1 className="font-PTSans text-2xl font-bold text-black">RocketTasks</h1>
                <div> 
                    {user ?
                        <div  className="flex items-center gap-2">
                            <p>👨‍🚀  Hi { user.name } </p>
                            <button className="sm:block hidden bg-blue-gray text-white px-5 py-2 rounded-full hover:scale-105 scale-100 transition-all duration-200 shadow-md" onClick={handleLogout}>Logout</button>
                            <button className="sm:hidden block text-blue-gray text-lg hover:scale-105 scale-100 transition-all duration-200" onClick={handleLogout}><IoExit /></button>
                        </div>
                    :
                        <div className="flex  items-center gap-4">  
                                <Link className='hover:scale-105 scale-100 transition-all duration-200' to="/login"> Login </Link>
                                <Link className="bg-blue-gray text-white px-5 py-2 rounded-full hover:scale-105 scale-100 transition-all duration-200 shadow-md" to="/register"> Register </Link>
                            </div>
                    }             
                </div>
            </div>
        </div>
        </>
    )

}

export default Header