import React, { useState } from "react";
import HeroSection from "../Commnet/HeroSection";
import BESTCARE from "../Commnet/BESTCARE";
import ProductSlider from "../Commnet/Carousel";
import Modal from "../Commnet/Modal";
import Product from "../Commnet/Product";
import FAQItem from "../Commnet/FAQItem";

import { gsap } from "gsap";
import Loading from "./Login";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);

    // Smooth reveal animation for page content
    gsap.from(".page-section", {
      opacity: 50,
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
            <HeroSection />
          </div>
          <div className="page-section">
            <BESTCARE />
          </div>
          <div className="page-section">
            <ProductSlider />
          </div>
          <div className="page-section">
            <Modal />
          </div>
          <div className="page-section">
            <Product />
          </div>
          <div className="page-section">
            <FAQItem />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
