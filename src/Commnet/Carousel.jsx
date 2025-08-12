import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef, useEffect, useState } from "react";
import '../Style/Style.css'
import '../Style/Carousel.css'
import { FaShoppingCart } from "react-icons/fa";


const products = [
  { id: 1, name: "ALYA SKIN CLEANSER.", price: "$29.99", img:'/icone/cirim.png'},
  { id: 2, name: "RITUAL OF SAKURA.", price: "$27.99", img: '/icone/cirim1.png' },
  { id: 3, name: "THE BODY LOTION.", price: "$19.99", img: '/icone/cirim2.png'},
  { id: 4, name: "THE BODY LOTION.", price: "$19.99", img:'/icone/cirim2.png' }
];



export default function ProductSlider() {
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
    <div className="bg-[#FAFAF0] p-8 rounded-lg mt-20">
      <div className="lg:flex  items-center justify-between mb-32 ">
         <div className=" w-[200px] h-[40px] rounded-full border border-black justify-evenly items-center flex text-center ml-12 ">
                <div className="border border-[#2D3B36] w-[15px] bg-[#2D3B36]  h-[15px] rounded-full"></div>
                <h1 className="text-[#2D3B36] ">Best Selling Products</h1>

            </div>
        <h2 className="text-[50px] Products font-bold w-[678px] h-[117px]">
          Skincare That Brings Out Your Natural Radiance
        </h2>
        <div className="flex gap-10 buton">
          <button  ref={prevRef} className="bg-white w-[80px] h-[80px] hover:bg-[#2D3B36] hover:text-white text-6xl pl-[35px] text-black border border-black pb-4 rounded-full">←</button>
          <button ref={nextRef} className="bg-white  hover:bg-[#2D3B36] hover:text-white w-[80px] h-[80px] text-6xl pr-[65px] text-black pb-3 rounded-full  border border-black">→</button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={setSwiperInstance}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
      >
       <div className="overflow-hidden">
         {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className="bg-white w-full card lg:h-[600px] rounded-xl overflow-hidden shadow-md z-0">
              <img src={product.img} alt={product.name} className="w-full imges5 h-[600px] object-cover" />
             



            </div>
             <div className=' lg:w-[440px] lg:h-[120px] avetar3 bg-white  relative lg:-mt-[140px] mb-8 ml-4 text-center'>
            
            <div className='flex justify-between  flex-row-reverse items-center mt-1  text-center gap-4 '>
                <div className="lg:w-[80px] btn hover:bg-lime-600 imgesbox imges4 lg:h-[80px] bg-[#2D3B361A] mr-5 mt-4 text-center flex justify-center items-center">
               <p className='  imges4 text-[30px]  text-[#2D3B36] '> <FaShoppingCart /></p>

                </div>
                <p className=' avaetarName text-[20px] text-start text-[#2D3B36] ml-4  font_normal'>{product.name}</p>
               
            </div>
             <p className="avetarPrich text-start ml-4 text-[#2D3B3680] mt-[-30px] text-[16px]">{product.price}</p>
                          </div>
          </SwiperSlide>
        ))}
       </div>
      </Swiper>
    </div>
  );
}
