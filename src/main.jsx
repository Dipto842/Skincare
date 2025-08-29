import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
 
  RouterProvider,
} from "react-router-dom";
import './index.css'

import router from "./router/router.jsx";
import AthoProvadar from "./firebase/AthoProvadar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AthoProvadar>

    <RouterProvider router={router} />
    </AthoProvadar>
  </React.StrictMode>
);
