import { Outlet } from "react-router-dom";
import Navbar from "./Commnet/Navbar";


const Maine = () => {
    return (
        <div>
<Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Maine;