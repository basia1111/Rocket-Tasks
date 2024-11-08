import { Outlet, useLocation } from 'react-router-dom' 
import Header from './Header';
import ToastList from '../Toast/ToastList';

function Layout(){
    const location = useLocation();
    
    return(
        <div className={`w-full h-full h pb-4 px-2 flex flex-col gap-4 items-center ${location.pathname =='/' ? 'bg-gray-100' : 'bg-gray-100'}`}>
            <Header />
            <Outlet />
            <ToastList />
        </div>
    )
}

export default Layout