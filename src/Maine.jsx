import { Outlet } from "react-router-dom";
import Navbar from "./Commnet/Navbar";
import Footer from "./Commnet/Footer";


const Maine = () => {
    return (
        <div>
<Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Maine;