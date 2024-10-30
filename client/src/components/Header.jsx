import { Link, Outlet } from 'react-router-dom' 
import { AuthContext } from '../contexts/AuthContext' 
import { useContext } from 'react'

function Header(){

    const {user, logout} = useContext(AuthContext)
    const token = localStorage.getItem('token'); 

    const handleLogout = () => {
        logout()
    }
    return(
        <div className="w-full h-full flex flex-col items-center">
            <div className="w-full h-14 flex items-center p-4"> 
                <div className="max-w-[1320px] w-full flex justify-between items-center"> 
                    <h1 className="font-Montserrat font-bold">To Do App</h1>
                    <div> 
                        {user ?
                            <div  className="flex gap-4">
                                <p>Hello { user.name } </p>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                            :
                            <div className="flex gap-4">  
                                <Link to="/login"> Login </Link>
                                <Link to="/register"> Register </Link>
                            </div>
                        }             
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )

}

export default Header