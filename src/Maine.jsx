import { Outlet } from "react-router-dom";
import Navbar from "./Commnet/Navbar";
import Footer from "./Commnet/Footer";
import { useState } from "react";
import gsap from "gsap";

import Loading from "./Pages/Login";

const Maine = () => {
    const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);

    // Smooth reveal animation for page content
    gsap.from(".page-section", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  };
    return (
       

         <div>
      {isLoading ? (
        <Loading onComplete={handleLoadingComplete} />
      ) : (
        <div>
         
       
        
          <div className="page-section">
           
        <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
          </div>
         
        </div>
      )}
    </div>
    );
};

export default Maine;