import React from 'react';

const Modal = () => {
  return (
    <div
      className='relative bg-[url("/icone/model.png")] bg-cover bg-center h-[1000px]  m-[50px] rounded-2xl overflow-hidden'
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#293330] via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-5">
        <h1 className='lg:text-[80px] text-[40px] max-w-[1037px] pt-[600px] lg:pt-[600px]'>
          Feel Beautiful Inside and Out
          <br />with Every Product.
        </h1>
        <button className='btn hover:bg-lime-600 w-[180px] h-[60px] rounded-3xl lg:mt-20 bg-white text-[#2D3B36] text-[20px]'>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Modal;
