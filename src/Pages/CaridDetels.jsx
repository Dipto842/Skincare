
import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import {  useParams } from "react-router-dom";
import Swal from "sweetalert2";


const CaridDetels = () => {
     const {id}=useParams()
     const [products, setProducts] = useState({});
     
     
     
       const freceData = async()=>{
   const Data = await axios.get("http://localhost:5000/carid")
   const detels = Data.data.find(product => product._id === id)
             setProducts(detels)
  }

  useEffect(() => {
    freceData();
  }, [id]);
     
     
  const  hendewhattlist = (products)=>{

axios.post('http://localhost:5000/whattlist',products)
.then( ()=>{
   Swal.fire({
        title: "Product Add to Whattlist🥰😘",
        icon: "success",
        draggable: true
      })
     
}


   
)
.catch(Error=>{
  if(Error.response && Error.response.status === 400){
    Swal.fire({
        title: `${Error.response.data.message}`,
        icon: "warning",
        draggable: true
      });
  }
  else(
Swal.fire({
        title: `${Error.message}`,
        icon: "error",
        draggable: true
      })
  )
    
}
  
)

  }
     const hendelcard = (id) => {
    console.log(id);

    if (products._id === id) {
      axios
        .post("http://localhost:5000/sidebarData/add", products)

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
  };

     
    return (
        <div className="mt-10">
            <div className="card lg:card-side  text-slate-400 bg-base-100 shadow-sm grid lg:grid-cols-2 h-[600px]">
  <figure>
    <img
      src={products.image}
      alt="Album" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {products.name}</h2>
    <h2 className=" ">  {products.peragirap}</h2>
    <h2 className=" "> <span className="font-bold text-slate-400 text-[16px]">stock:</span>
            <span className="badge badge-soft text-center pb-1">
              {products.stock}
            </span></h2>
    <p className=""> <span className="font-bold text-slate-400 text-[16px]">Price : </span>{products.price}$</p>
    <div className="card-actions justify-center">
      {
        products.stock==='outstock'?<button disabled={true} className="btn btn-primary w-full text-2xl  "><FaShoppingCart></FaShoppingCart></button>:<button onClick={()=>hendelcard(products._id)} className="btn btn-primary w-full text-2xl "><FaShoppingCart></FaShoppingCart></button>
      }
     <button onClick={()=>hendewhattlist(products)} className='btn btn-primary w-full  text-2xl '> <FaRegHeart /></button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default CaridDetels;