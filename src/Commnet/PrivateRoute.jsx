import React, { useContext } from 'react';
import Authcontes from '../firebase/Authcontes';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const {user,loading }= useContext(Authcontes)
    console.log(user);
    
   
          if (loading) {
    return <div>Loading...</div>; // বা spinner
  }
            if (!user) {
               return <Navigate to={'/login'}></Navigate> 
            }
            return <Outlet></Outlet>

};

export default PrivateRoute;