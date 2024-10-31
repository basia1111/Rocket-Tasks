import { Link } from 'react-router-dom' 
import { AuthContext } from '../../contexts/AuthContext' 
import { useContext } from 'react'

function Header(){

    const {user, logout} = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }
    return(
        <div className="w-full h-14 flex items-center justify-center p-4"> 
            <div className="max-w-[1320px] w-full flex justify-between items-center px-2 pt-2"> 
              <h1 className="font-PTSans text-2xl font-bold text-black">TodoHub</h1>
                <div> 
                    {user ?
                        <div  className="flex items-center gap-4">
                            <p>Hello { user.name } </p>
                            <button className="bg-black text-white px-5 py-2 rounded-full" onClick={handleLogout}>Logout</button>
                        </div>
                    :
                        <div className="flex  items-center gap-4">  
                                <Link to="/login"> Login </Link>
                                <Link className="bg-black text-white px-5 py-2 rounded-full" to="/register"> Register </Link>
                            </div>
                    }             
                </div>
            </div>
        </div>
    )

}

export default Header