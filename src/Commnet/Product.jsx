import React, { useEffect, useState } from "react";
import "../Style/Style.css";
import "../Style/Carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

import axios from "axios";
import Swal from "sweetalert2";

const tabs = [
  { name: "NEW ARRIVAL" },
  { name: "CLEANSING" },
  { name: "ACNE FIGHTER" },
  { name: "ANTI AGGING" },
];

const Product = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [products, setproducts] = useState([]);

  const functionData =async()=>{
const Data = await axios.get("https://skincare-backend-seven.vercel.app/carid")
console.log(Data,'Data');

setproducts(Data)
  }

  useEffect(() => {
   functionData
      
  }, []);

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

  const hendelcard = (id) => {
    console.log(id);
    products.map((item) => {
      console.log(item._id, id);
      if (item._id === id) {
        axios
          .post("https://skincare-backend-seven.vercel.app/sidebarData/add", item)

          .then(() => {
            Swal.fire({
              title: "Product Add to Cart🥰😘",
              icon: "success",
              draggable: true,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: `Error Adding Product 😭😭 ${error.message}`,
              icon: "error",
              draggable: true,
            });
          });
      }
    });
  };

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
      {products.length === 0 ? (
        <div className="text-center text-3xl font-bold mt-20 ">
          {" "}
          Loading
          <span className="">
            <FaRegHeart />
          </span>
        </div>
      ) : null}
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
                    src={product.image}
                    alt={product.name}
                    className="w-full imges5 h-[600px] object-cover"
                  />
                </div>

                <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                    <span className="badge badge-secondary mr-[330px] z-20 mb-0">
              {product.stock}
            </span>
                  <div className="flex justify-between flex-row-reverse items-center -mt-4 text-center gap-4">
                    {
                      product.stock ==='outstock' ? <div
                      disabled={true}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div> : <div
                    
                      onClick={() => hendelcard(product._id)}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div>
                    }
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



        {activeTab === 1 && (
          <div>
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
                      src={product.image}
                      alt={product.name}
                      className="w-full imges5 h-[600px] object-cover"
                    />
                  </div>

                  <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                      <span className="badge badge-secondary mr-[330px] z-20 mb-0">
              {product.stock}
            </span>
                    <div className="flex justify-between flex-row-reverse items-center -mt-4 text-center gap-4">
                      {
                      product.stock ==='outstock' ? <div
                      disabled={true}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div> : <div
                    
                      onClick={() => hendelcard(product._id)}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div>
                    }
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
          </div>
        )}


        {activeTab === 2 && (
          <div>
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
                      src={product.image}
                      alt={product.name}
                      className="w-full imges5 h-[600px] object-cover"
                    />
                  </div>

                  <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                      <span className="badge badge-secondary mr-[330px] z-20 mb-0">
              {product.stock}
            </span>
                    <div className="flex justify-between flex-row-reverse items-center -mt-4 text-center gap-4">
                      {
                      product.stock ==='outstock' ? <div
                      disabled={true}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div> : <div
                    
                      onClick={() => hendelcard(product._id)}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div>
                    }
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
          </div>
        )}


        {activeTab === 3 && (
          <div>
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
                      src={product.image}
                      alt={product.name}
                      className="w-full imges5 h-[600px] object-cover"
                    />
                  </div>

                  <div className="lg:w-[440px] lg:h-[120px] avetar3 bg-white relative lg:-mt-[140px] mb-8 ml-14 text-center">
                      <span className="badge badge-secondary mr-[330px] z-20 mb-0">
              {product.stock}
            </span>
                    <div className="flex justify-between flex-row-reverse items-center -mt-4 text-center gap-4">
                     {
                      product.stock ==='outstock' ? <div
                      disabled={true}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div> : <div
                    
                      onClick={() => hendelcard(product._id)}
                      className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center"
                    >
                      <button className="imges4 text-[30px] text-[#2D3B36] ">
                        <FaShoppingCart />
                      </button>
                    </div>
                    }
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
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Product;
