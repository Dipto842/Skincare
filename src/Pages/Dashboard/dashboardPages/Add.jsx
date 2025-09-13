import React from 'react';
import { useForm } from 'react-hook-form';

const Add = () => {
       const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it
    return (
        <div className='   text-white'>  
         <div className='w-[1200px] mx-auto'>
      

  
     
    <form onSubmit={handleSubmit(onSubmit)}>
    <div className='grid grid-cols-2 gap-5 bg-[#979494] w-[1200px] mx-auto pt-20 pl-10 pr-10 mt-10 pb-10 rounded-2xl'>
      
      <div>
        <label className='text-2xl font-bold text-[#5c4f4f]'>Name</label>
        <input type='text' required placeholder='Enter Name' className="input input-bordered w-full h-[60px] text-white"   {...register("name")} />
        {errors.name && <span>fild is required</span>}
      
      </div>

       <div>
        <label className='text-2xl font-bold text-[#5c4f4f]'>image</label>
        <input type='url' required placeholder='Enter imges url' className="input input-bordered w-full h-[60px]"   {...register("imges")} />
      </div>
      

        
       <div>
        <label className='text-2xl font-bold text-[#5c4f4f]'>price</label>
        <input type='number' required placeholder='enter price' className="input input-bordered w-full h-[60px]"   {...register("price")} />
      </div>

      <div>
        <label className='text-2xl font-bold text-[#5c4f4f]'>peragirap</label>
        <input type='text' required placeholder='Enter peragirap' className="input input-bordered w-full h-[60px]"   {...register("peragirap")} />
      </div>
      
    

        
       <div>
        <label className='text-2xl font-bold text-[#5c4f4f]'>category2</label>
        <select className="select select-primary w-full  h-[60px]">
                <option disabled selected>
                  All
                </option>
                <option>NEW ARRIVAL</option>
                <option>ANTI AGGING</option>
                <option>CLEANSING</option>
                
              </select>
      </div>

      
     <div>
        <label className='text-2xl font-bold text-[#5c4f4f]'>stock</label>
        <select className="select select-primary w-full  h-[60px]">
                <option disabled selected>
                  stock
                </option>
                <option>stock</option>
              
                
              </select>
      </div>
   
     
    </div>
<hr />
      <input className='btn btn-outline btn-primary text-center mx-auto w-full rounded-2xl' type="submit" />
    </form>
         </div>
        </div>
    );
};

export default Add;