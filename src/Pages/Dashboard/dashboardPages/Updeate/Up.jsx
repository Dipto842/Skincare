
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Up = () => {
    const {id}= useParams()


    const [product,setProducts]= useState()

      const freceData = async()=>{
   const Data = await axios.get("http://localhost:5000/carid")

   const filtarData = Data.data.filter(i=>i._id==id)
   setProducts(filtarData)

             
  }

  
  useEffect(()=>{
    freceData()
  },[])


    console.log(product);
    
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
               <input type='text' required placeholder={product[0].name} className="input input-bordered w-full h-[60px] text-white"   {...register("name")} />
               {errors.name && <span>fild is required</span>}
             
             </div>
       
              <div>
               <label className='text-2xl font-bold text-[#5c4f4f]'>image</label>
               <input type='url' required placeholder='Enter imges url' className="input input-bordered w-full h-[60px]"   {...register("imges")} />
             </div>
             
       
               
              <div>
               <label className='text-2xl font-bold text-[#5c4f4f]'>price</label>
               <input type='number' required placeholder={product[0].price} className="input input-bordered w-full h-[60px]"   {...register("price")} />
             </div>
       
             <div>
               <label className='text-2xl font-bold text-[#5c4f4f]'>peragirap</label>
               <input type='text' required placeholder={product[0].peragirap} className="input input-bordered w-full h-[60px]"   {...register("peragirap")} />
             </div>
             
           
       
               
              <div>
               <label className='text-2xl font-bold text-[#5c4f4f]'>category2</label>
               <select className="select select-primary w-full  h-[60px]">
                       <option disabled selected>
                         {product[0].category2}
                       </option>
                       <option>"NEW ARRIVAL</option>
                       <option>ANTI AGGING</option>
                       <option>CLEANSING</option>
                       
                     </select>
             </div>
       
             
            <div>
               <label className='text-2xl font-bold text-[#5c4f4f]'>stock</label>
               <select className="select select-primary w-full  h-[60px]">
                       <option disabled selected>
                        {product[0].stock}
                       </option>
                       <option>stock</option>
                       <option>instock</option>
                     
                       
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

export default Up;