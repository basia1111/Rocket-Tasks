import { Link, Outlet, useLocation } from 'react-router-dom' 
import { AuthContext } from '../../contexts/AuthContext' 
import { useContext } from 'react'
import Header from './Header';

function Layout(){

    const location = useLocation();
    
    return(
        <div className={`w-full h-full flex flex-col items-center ${location.pathname =='/' ? 'bg-gray-100' : ''}`}>
            <Header />
            <Outlet />
        </div>
    )

}

export default Layout