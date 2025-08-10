import { createBrowserRouter } from "react-router-dom";
import Maine from "../Maine";
import Home from "../Pages/Home";




 const router = createBrowserRouter([
  {
    path: "/",
    element: <Maine></Maine>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      }
    ]
  },
]);


export default router