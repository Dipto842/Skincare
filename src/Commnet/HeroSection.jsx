import img from '/icone/benar.jpg'
import img1 from '/icone/ChatGPT Image Jun 15, 2025, 10_24_47 PM 2.png'
import '../Style/Style.css'
import '../Style/HeroSection.css'
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {

    const paraRef = useRef(null);

  useEffect(() => {
    const words = paraRef.current.querySelectorAll("span");

    gsap.fromTo(
      words,
      { opacity: 0.2, color: "#9ca3af" }, // Light gray text before animation
      {
        opacity: 1,
        color: "#2D3B36", // Dark greenish text
        stagger: 0.15,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top 80%", // Animation starts when 80% viewport reached
        },
      }
    );
  }, []);
  
  const text ="Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin. Combining the finest natural ingredients with advanced science, our collection ensures every skin type can achieve a radiant, healthy glow. Embrace your beauty with confidence every day. Experience the ultimate in skincare with our expertly formulated products, crafted to nourish, protect, and rejuvenate your skin."
    return (
      <div>

  <div className="bg-[#eff5e1] herro relative z-10 overflow-hidden"> 

        <div  style={{ backgroundImage: `url(${img})` }}  className='lg:flex bg-no-repeat bg-cover bg-center  lg:justify-around items-center bg-url(`${}`) '>
             <div className=' h-[700px] items-center text-center '>
                 <h1 className=' lg:mt-32 font_bold_700 font-bold text-[100px] bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 
bg-clip-text text-transparent drop-shadow-lg leading-[100px]'>GLOW
NATUR-ALLY</h1>
            <p className=' peragirap3 text-neutral-300 lg:mt-3 font_normal mx-auto lg:w-[500px] text-[20px] text-start'>Transform your skincare routine with premium products that restore, protect, and enhance your nautural glow every day.</p>
          
             </div>



        </div>



        <div className='lg:flex Herro1  items-center gap-52 mt-20  lg:ml-28 '>
            <button className='btn bg-[#2D3B36] rounded-full w-[180px] hover:bg-lime-600 button1 h-[60px]'> Shop Now</button>
          <div className='z-10 relative'>
              <img className='lg:w-[610px] lg:h-[680px] z-10  imges2' src={img1} alt="" />
               
              <div>

<div className='flex justify-evenly items-center mt-1 lg:absolute lg:left-[20%]  lg:bottom-[5%] bg-white rounded-3xl  z-10 gap-3  avetar'>
    <img className='w-[50px] h-[50px] rounded-full ml-3 ' src={img} alt="" />
    <p className='lg:w-[304px] text-[16px] text-start text-[#2D3B36] leading-[20px] font_normal'>While giving you an invigorating cleansing experience.</p>
</div>
             </div>
          </div>

        </div>
        <div>
            <h1 className='font_bold_800 SKINEARE2 font-extrabold lg:text-[305px] text-[#2D3B36] z-0 lg:absolute top-[79%] '> SKINEARE</h1>

        </div>
            
        </div>

{/* peragerap */}


  
    <div className="bg-[#FEFFF4] pragirap2">
      <p
        ref={paraRef}
        className="font_normal  lg:text-[40px] lg:pt-24 lg:leading-[78px] text-[#2D3B36] lg:mr-[5rem] lg:ml-20"
      >
        {text.split(" ").map((word, index) => (
          <span key={index} className="inline-block mr-1">
            {word}
          </span>
        ))}
      </p>
    </div>

      </div>
    );
};

export default HeroSection;