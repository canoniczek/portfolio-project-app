import {useAuth} from './supabase/authHook.js';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


const Middleware = () => {
    const isAuth = useAuth();

    if (!isAuth) {
        return <Navigate to="/sign-in" />;
    }


    return <Outlet />
    
}

export default Middleware;