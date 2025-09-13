import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GrUpdate } from 'react-icons/gr';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllIteam = () => {
const [product,setProducts]= useState([])

      const freceData = async()=>{
   const Data = await axios.get("https://skincare-backend-seven.vercel.app/carid")
             setProducts(Data.data)
             console.log(Data.data);
             
  }


  const hendelDelete =(id)=>{
    console.log(id);
    
    axios.delete(`https://skincare-backend-seven.vercel.app/carid/delete/${id}`)
    .then(()=>{
Swal.fire({
            title: `Delete success`,
            icon: "success",
            draggable: true,
          })
          
    })
    .catch((err)=>
    Swal.fire({
            title: `${err.response.data.message}`,
            icon: "warning",
            draggable: true,
          }) )

          setProducts(product.filter(i=>i._id !==id))
  }




  const hendelupdete=()=>{
    
  }




  useEffect(()=>{
    freceData()
  },[])




    return (
        <div >
           <div className="overflow-x-auto bg-base-200 text-white">
  <table className="table">
    {/* head */}
    <thead>
      <tr className=''>
       
        <th>Name</th>
        <th>Price</th>
        <th></th>
        <th></th>
        <th></th>
        
      </tr>
    </thead>
    <tbody className=''>
      {/* row 1 */}
     {
        product.map((i)=>(
             <tr>
       
        <td>
          <div className="flex items-center gap-3 text-white mt-10">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={i.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{i.name}</div>
              <div className="text-sm opacity-50">{i.stock}</div>
            </div>
          </div>
        </td>
        <td className='text-white'>
          {i.price}
          
        </td>
        <td onClick={()=>hendelDelete(i._id)} className='text-2xl text-red-600 cursor-pointer'><MdDeleteForever /></td>
        <th>
          <Link to={`/dashboard/updete/${i._id}`} className='text-2xl text-green-400 cursor-pointer'><GrUpdate /></Link>
        </th>
      </tr>
        ))
     }
     
    
    </tbody>
    
   
  </table>
</div>
        </div>
    );
};

export default AllIteam;