import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine";
import Home from "../Pages/Home";
import Product from "../Commnet/Product";
import ProductSlider from "../Commnet/Carousel";
import BESTCARE from "../Commnet/BESTCARE";
import FAQItem from "../Commnet/FAQItem";
import Sidebar from "../Pages/Sidebar";
import CaridDetels from "../Pages/CaridDetels";
import Whattlist from "../Pages/Whattlist";
import AllData from "../Pages/AllData";
import AllDataDetels from "../Pages/AllDataDetels";
import About from "../Pages/About";
import Login from "../Commnet/Logen/Logen";
import Register from "../Commnet/Logen/Register";
import PrivateRoute from "../Commnet/PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Add from "../Pages/Dashboard/dashboardPages/Add";

import AllIteam from "../Pages/Dashboard/dashboardPages/AllIteam";
import Up from "../Pages/Dashboard/dashboardPages/Updeate/Up";





 const router = createBrowserRouter([
  {
    path: "/",
    element: <Maine></Maine>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path:'/Allpodak',
        element:<Product></Product>
      },
      {
path:"/serum",
element:<ProductSlider></ProductSlider>

      },
      {
        path: '/sunscreen',
        element:<BESTCARE></BESTCARE>
      },
      {
        path:'/Bundle',
        element:<FAQItem></FAQItem>
      },
      {
        path:'/sidbar',
        element:<Sidebar></Sidebar>
      },
      {
        path:'/deteil/:id',
        element:<PrivateRoute><CaridDetels></CaridDetels></PrivateRoute>,

      
      },
      {
        path:'/whattlist',
        element:<PrivateRoute><Whattlist></Whattlist></PrivateRoute>
      },
      {
        path:'/AllData',
        element:<PrivateRoute><AllData></AllData></PrivateRoute>
      },
      {
        path:'/AllDataDetels/:id',
        element:<AllDataDetels></AllDataDetels>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }

      

    ]
  },
  {
    path:'dashboard',
    element:<Dashboard></Dashboard>,
    children:[
      {
        path:'',
        element:<Add></Add>,
        
      },
      
      
      {
        path:'AllIteam',
        element:<AllIteam></AllIteam>,
        
      },
      {
        path:'updete/:id',
        element:<Up></Up>,
        
      }
      
    ]
  }
]);


export default router