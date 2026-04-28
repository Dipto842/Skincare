import axios from "axios";
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";



const Whattlist = () => {
    const [Data,setData]=useState([])
    useEffect((()=>{
        axios.get('https://skincare-backend-seven.vercel.app/whattlist/list')
.then(res=>setData(res.data))
.catch()
    }),[])
    console.log(Data);
    

    const hendelcard=(id)=>{
console.log(id);
Data.map((item)=>{
 
  
   
  
   
      axios.post('https://skincare-backend-seven.vercel.app/sidebarData/add',item)
       
      .then( ()=>{
        
        
          Swal.fire({
  title: "Product Add to Cart🥰😘",
  icon: "success",
  draggable: true
});
         
        
      })
      .catch(error=>{
        Swal.fire({
  title: `Error Adding Product 😭😭 ${error.message}`,
  icon: "error",
  draggable: true
});
      });
    
  
    
})
  }


  const hendelDelete =(id)=>{
    axios.delete(`https://skincare-backend-seven.vercel.app/whattlist/delete/${id}`)
    .then(
        Swal.fire({
  title: "Product Delete",
  icon: "success",
  draggable: true
})
)
setData(Data.filter(i=>i._id !==id))
.catch()
}

    return (
        <div>
            <div className="overflow-x-auto ">
  <table className="table">
    {/* head */}
    <thead className="text-black">
      <tr>
       
        <th>Names</th>
        <th>price</th>
        
        <th></th>
        <th></th>
      </tr>
    </thead>
   {
    Data.map(item=>(
         <tbody>
      {/* row 1 */}
      <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.name}</div>
             
            </div>
          </div>
        </td>
        <td>
         {item.price}$
         
        </td>
        
        <th>
          <button onClick={()=>hendelcard(item._id)} className="btn btn-primary hover:bg-black hover:text-pink-600  w-10 h-10 btn-xs text-2xl"><FaShoppingCart></FaShoppingCart></button>
        </th>
        <th>
          <button onClick={()=>hendelDelete(item._id)} className="btn btn-dash hover:text-red-500 h-10 w-10 text-red-800 btn-xs text-2xl"><MdDelete /></button>
        </th>
      </tr>
   
    </tbody>
    ))
   }


  
  </table>
</div>
        </div>
    );
};

export default Whattlist;