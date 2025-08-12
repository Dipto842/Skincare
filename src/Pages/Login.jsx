// src/components/LoadingScreen.jsx
import React, { useEffect, } from "react";
import { gsap } from "gsap";

const Loading = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: onComplete, // animation শেষ হলে parent জানাবে
    });

    tl.to(".loading-text", {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    })
      .to(".loading-text", {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
      })
      .to(".loading-screen", {
        y: "-100%",
        duration: 1,
        ease: "power4.inOut",
      });
  }, [onComplete]);

  return (
    <div className="loading-screen fixed top-0 left-0 w-full h-full bg-black z-50 flex items-center justify-center">
      <h1 className="loading-text text-white text-3xl opacity-0">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
