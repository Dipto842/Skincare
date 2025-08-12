import React, { useEffect, useState } from 'react';
import '../Style/Style.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { FaShoppingCart } from 'react-icons/fa';


const products = [
  { id: 1, name: "ALYA SKIN CLEANSER.", price: "$29.99", img:'/icone/cirim.png'},
  { id: 2, name: "RITUAL OF SAKURA.", price: "$27.99", img: '/icone/cirim1.png' },
  { id: 3, name: "THE BODY LOTION.", price: "$19.99", img: '/icone/cirim2.png'},
  { id: 4, name: "THE BODY LOTION.", price: "$19.99", img:'/icone/cirim2.png' }
];

const tabs =[
     {  name:'NEW ARRIVAL'},
     {  name:'CLEANSING'},
     {  name:'ACNE FIGHTER'},
   { name:'ANTI AGGING'}
]
 

const Product = () => {
     const [activeTab, setActiveTab] = useState(2);

     const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);
    return (
        <div>
      <h1 className="lg:w-[778px] text-[30px] lg:text-[60px] font_normal text-center mx-auto">
        Feel Beautiful Inside and Out with Every Product.
      </h1>

      <div className="lg:flex space-x-4  font_normal lg:ml-[450px] mt-10 mb-9">
        {tabs.map((tab, index) => (
          <button
            key={tab.name} // unique key
            onClick={() => setActiveTab(index)}
            className={`px-6 w-[194px] h-[60px] py-2 rounded-3xl font-medium transition-colors duration-300 ${
              activeTab === index
                ? "bg-[#2D3B36] text-white"
                : "bg-[#FEFFF4] text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className="p-6 rounded">
        {activeTab === 0 && (
          <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white w-full font_normal card lg:ml-9 lg:h-[600px] rounded-xl overflow-hidden shadow-md z-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full imges5 h-[600px] object-cover"
                  />
                </div>

                <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                  <div className="flex justify-between flex-row-reverse items-center mt-1 text-center gap-4">
                    <div className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center">
                      <p className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </p>
                    </div>
                    <p className="avaetarName text-[20px] text-start text-[#2D3B36] ml-4 font_normal">
                      {product.name}
                    </p>
                  </div>
                  <p className="avetarPrich text-start ml-4 text-[#2D3B3680] mt-[-30px] text-[16px]">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {activeTab === 1 && <div>
            
              <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white w-full font_normal card lg:ml-9 lg:h-[600px] rounded-xl overflow-hidden shadow-md z-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full imges5 h-[600px] object-cover"
                  />
                </div>

                <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                  <div className="flex justify-between flex-row-reverse items-center mt-1 text-center gap-4">
                    <div className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center">
                      <p className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </p>
                    </div>
                    <p className="avaetarName text-[20px] text-start text-[#2D3B36] ml-4 font_normal">
                      {product.name}
                    </p>
                  </div>
                  <p className="avetarPrich text-start ml-4 text-[#2D3B3680] mt-[-30px] text-[16px]">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            </div>}
        {activeTab === 2 && <div>
              <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white w-full font_normal card lg:ml-9 lg:h-[600px] rounded-xl overflow-hidden shadow-md z-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full imges5 h-[600px] object-cover"
                  />
                </div>

                <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                  <div className="flex justify-between flex-row-reverse items-center mt-1 text-center gap-4">
                    <div className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center">
                      <p className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </p>
                    </div>
                    <p className="avaetarName text-[20px] text-start text-[#2D3B36] ml-4 font_normal">
                      {product.name}
                    </p>
                  </div>
                  <p className="avetarPrich text-start ml-4 text-[#2D3B3680] mt-[-30px] text-[16px]">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            
            </div>}
        {activeTab === 3 && <div>
            
              <Swiper
            modules={[Navigation]}
            onSwiper={setSwiperInstance}
            spaceBetween={20}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white w-full font_normal card lg:ml-9 lg:h-[600px] rounded-xl overflow-hidden shadow-md z-0">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full imges5 h-[600px] object-cover"
                  />
                </div>

                <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                  <div className="flex justify-between flex-row-reverse items-center mt-1 text-center gap-4">
                    <div className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center">
                      <p className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </p>
                    </div>
                    <p className="avaetarName text-[20px] text-start text-[#2D3B36] ml-4 font_normal">
                      {product.name}
                    </p>
                  </div>
                  <p className="avetarPrich text-start ml-4 text-[#2D3B3680] mt-[-30px] text-[16px]">
                    {product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            
            </div>}
      </div>
    </div>
    );
};

export default Product;