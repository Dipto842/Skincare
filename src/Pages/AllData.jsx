import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../Style/AllData.css'
import Swal from "sweetalert2";
import { div } from "framer-motion/client";

const AllData = () => {
    const [Data,setData]=useState([])
    const [selekt,setselekt]=useState("All")
    const [stock,setstock]=useState("All")
    useEffect(()=>{
        axios.get('https://skincare-backend-seven.vercel.app/AllData')
        .then(data=>setData(data.data))

    },[])
   
    // add carid
    
  const hendelcard=(id)=>{
console.log(id);
Data.map((item)=>{
 console.log(item._id, id);
  if( item._id === id){
   
  
   
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
    
  
    }
})
  }
  // whattlist 
  const hendewhattlist = (products) => {
    axios
      .post("https://skincare-backend-seven.vercel.app/whattlist", products)
      .then(() => {
        Swal.fire({
          title: "Product Add to Whattlist🥰😘",
          icon: "success",
          draggable: true,
        });
      })
      .catch((Error) => {
        if (Error.response && Error.response.status === 400) {
          Swal.fire({
            title: `${Error.response.data.message}`,
            icon: "warning",
            draggable: true,
          });
        } else
          Swal.fire({
            title: `${Error.message}`,
            icon: "error",
            draggable: true,
          });
      });
  };

  // category 
  const NEWARRIVAL = selekt ==="All"? Data : Data.filter(i=>i.category2===selekt)
  const selektstock = stock ==="All"? NEWARRIVAL : NEWARRIVAL.filter(i=>i.stock===stock)
  


if(Data.length===0){
  return <div className="text-center text-4xl font-bold">Loading...</div>
}
    return (
      <div>
        <div>
          <div className="navbar bg-base-100 shadow-sm grid lg:grid-cols-3  text-center  md:grid-cols-3 grid-cols-1">
  
  
  <div className="lg:ml-10 text-slate-300 ">
    <select
    value={stock}
    onChange={e=>setstock(e.target.value)}
    
    defaultValue="Pick a language" className="select select-secondary w-full bg-base-100">
  <option >All</option>
  <option>outstock</option>
  <option>instock</option>

</select>
  </div>
  <div className="lg:ml-10 text-slate-300 ">
    <select
value={selekt}
onChange={e=>setselekt(e.target.value)}
     defaultValue="All" className="select select-secondary w-full bg-base-100">
  <option >All</option>
  <option>NEW ARRIVAL</option>
  <option>CLEANSING</option>
  <option>ACNE FIGHTER</option>
  
  

</select>
  </div>
</div>
        </div>
          <div className="grid alldata lg:grid-cols-4 gap-10  mb-10 bg-base-100 ">
          
         {
        selektstock.map(i=>(
            <div className="">
                   <div className="card bg-base-100 w-full lg:w-96 shadow-2xl h-[700px] ">
  <Link to={`/AllDataDetels/${i._id}`}  className="h-[400px] cursor-pointer">

    <img
    className="bg-cover h-[390px] w-full"
      src={i.image}
      alt="Shoes" />
  
  </Link>
  <div className="card-body opacity-">
    <h2 className="card-title text-white">
      {i.name}
      <div className="badge badge-secondary">{i.stock}</div>
    </h2>
    <p className="text-orange-50">{i.price}$</p>
    <p className="text-orange-50">{i.peragirap}</p>
    <div className="card-actions justify-end">
     {
      i.stock==='outstock'?  <div  className="btn disabled: btn-dash bg-white hover:bg-black  text-pink-400 w-full mt-6  text-2xl"><FaShoppingCart/></div>: <div onClick={()=>hendelcard(i._id)} className="btn btn-dash bg-white hover:bg-black  text-pink-400 w-full mt-6  text-2xl"><FaShoppingCart/></div> 
     }
      <div onClick={()=>hendewhattlist(i)} className="btn btn-dash bg-white hover:bg-black  text-pink-400 w-full mt-6  text-2xl "> <FaRegHeart /></div>
    </div>
  </div>
</div>
            </div>
        ))
         }
        </div>
      
      </div>
    );
};

export default AllData;