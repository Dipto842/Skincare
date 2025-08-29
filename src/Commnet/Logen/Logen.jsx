import { useContext } from "react";

import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import AuthContes from "../../firebase/Authcontes";
import Swal from "sweetalert2";









const Login = () => {

  const {singin}=useContext(AuthContes)

  const nebegat = useNavigate()
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
 

  const onSubmit = (data) => {
    singin(data.email,data.Password)
     .then(() => {
     Swal.fire({
               title: "Login success🥰😘",
               icon: "success",
               draggable: true,
             });
      nebegat('/')
      
    })
    .catch((err) => {
      console.error("Login error:", err.message);
    });
    
  }


  return (
    <div>
      <div className="  bg-[#eff5e1] min-h-screen  flex    justify-center items-center  ">
        <div className=" border-gray-300 bg-[#f7f8f9] text-black border  grid  items-start justify-center  lg:w-[440px] shadow min-h-screen mt-5 mb-2 ">
        
           

         
          
          <form onSubmit={handleSubmit(onSubmit)} className="   mt-7">
             <h1 className="text-3xl  font-bold leading-[135%] mx-auto">
              
               Signin to your <br></br>Skincare  account 
            </h1>
            
            {/* register your input into the hook by invoking the "register" function */}
            <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Email Address</label>
              <input {...register("email", { required: true })} className="border-2 rounded-lg w-full p-3 px-5 text-sm bg-[#f7f8f9]" type="email" placeholder="Enter email address"  />
               {errors.email && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>

           
             <div>
              <label className="inline-block transform translate-x-3 translate-y-3 bg-[#f7f8f9] text-[#6c25ff] text-sm px-1 pr-3 "> Password</label>
              <input {...register("Password", { required: true })} className="border-2 rounded-lg w-full p-3 px-5 text-sm bg-[#f7f8f9]" type="password" placeholder="Enter your Password"  />
               {errors.Password && <p style={{ color: "red" }}>{errors.name.message}</p>}
            </div>
           

            <div className=" mx-auto mt-6">
             <input type="submit" className="mx-auto btn btn-secondary  h-11 rounded-lg  text-white   w-full"></input>
            </div>
          </form>
       <div className="-mt-[190px] text-pink-500"> <a href="/register">Create a new account</a></div>
        </div>

      
      </div>

    </div>
  );
};

export default Login;