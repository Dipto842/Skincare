import { Link } from "react-router-dom";
import "../Style/Style.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

import { FaRegHeart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import Sidebar from "../Pages/Sidebar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Authcontes from "../firebase/Authcontes";
import Swal from "sweetalert2";
import { getDocs,collection } from "firebase/firestore";
import { db } from "../firebase/firebase.Config";


const Navbar = () => {
  const [Data, setData] = useState([]);
  const { user,logout } = useContext(Authcontes);
  const [userRoule,setUserRoule]=useState(null)
  

  const Dataface = async () => {
    const data = await axios.get("https://skincare-backend-seven.vercel.app/sidebarData");
    setData(data.data);
  };
  useEffect(() => {
    // Fetch products data
    Dataface();
  }, []);


  const userss = async () => {
  if (!user) return; // user লগইন না থাকলে কিছু করবে না

  const userRouleData = await getDocs(collection(db, "users"));
  const data = userRouleData.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  // logged in user এর সাথে match করবো
  const currentUserData = data.find(i => i.email === user.email);
  setUserRoule(currentUserData || null);
}

useEffect(()=>{
  userss()
},[user])


  const hendelLogout=()=>{
logout()
.then(()=>{
  setUserRoule(null)
  Swal.fire({
            title: "Logout success",
            icon: "success",
            draggable: true,
          });
})
  }



console.log('user',user);

  return (
    <div>
      <div className="navbar bg-[#eff5e1]  shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li className="hover:bg-lime-600 rounded-full">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:bg-lime-600 rounded-full">
                <Link to={"/AllData"}>All Products</Link>
              </li>
              <li className="hover:bg-lime-600 rounded-full">
                <Link to={"/serum"}>FAQ</Link>
              </li>
              <li className="hover:bg-lime-600 rounded-full">
                <Link to={"/sunscreen"}>About</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">skincare</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="hover:bg-lime-600 rounded-full">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:bg-lime-600 rounded-full">
              <Link to={"/AllData"}>All Products</Link>
            </li>
            <li className="hover:bg-lime-600 rounded-full">
              <Link to={"/Bundle"}>FAQ</Link>
            </li>
            <li className="hover:bg-lime-600 rounded-full">
              <Link to={"/about"}>About</Link>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          <div className="flex items-center gap-3">
            <Link to={"/sidbar"}>
              {" "}
              <label
                htmlFor="my-drawer-4"
                onClick={() => {
                  document.getElementById("1");
                }}
                className="  h-10 btn bg-white text-black rounded-full  text-center text-xl"
              >
                <HiOutlineShoppingBag />
              </label>
            </Link>{" "}
            <h1 className="font_normal text-[20px]">cart ({Data.length} )</h1>
          </div>

          <div>
            <Link to={"/whattlist"}>
              {" "}
              <button className=" w-12 btn h-10 bg-white text-black rounded-full text-center pr-[4px] pl-[3px] pt-[5px] text-2xl">
                {" "}
                <FaRegHeart />
              </button>
            </Link>
          </div>
          <div>
            <Link>
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="   avata  w-12 h-10 btn bg-white shadow-md text-black rounded-full text-center pl-[14px] pb-1 text-2xl"
                >
                  <div className="w-12 text-2xl rounded-full">
                    <GoPerson />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 text-white  rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li className="hover:text-zinc-400 ">
                    <Link className="justify-between">Profile</Link>
                    
                  </li>
                  {
  userRoule?.role === 'admin' && <li><Link to={'dashboard'}>dashboard</Link></li>

  
}
                 
                  {user ? (
                    <li className="hover:text-zinc-400">
                      <Link onClick={hendelLogout} to={"/login"}>Logout</Link>
                    </li>
                  ) : (
                    <li className="hover:text-zinc-400">
                      <Link to={"/login"}>Login</Link>
                    </li>
                  )}
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* sidbar */}

      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content"></div>
        <div id="1" className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay "
          ></label>
          <ul className="menu bg-white  min-h-full w-10 lg p-4 ">
            {/* Sidebar content here */}
            <Sidebar></Sidebar>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
