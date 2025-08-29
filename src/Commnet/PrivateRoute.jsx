import React, { useContext } from 'react';
import Authcontes from '../firebase/Authcontes';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const {user}= useContext(Authcontes)
   
        
            if (!user) {
               return <Navigate to={'/login'}></Navigate> 
            }
            return <Outlet></Outlet>

};

export default PrivateRoute;