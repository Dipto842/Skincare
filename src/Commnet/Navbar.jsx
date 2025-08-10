import { Link } from 'react-router-dom';
import '../Style/Style.css'
import { HiOutlineShoppingBag } from "react-icons/hi2";

import {  FaRegHeart } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';

const Navbar = () => {
    return (
        <div>
<div className="navbar bg-[#eff5e1]  shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       
       <li><Link>All Products</Link></li>
      <li><Link>serum</Link></li>
      <li><Link>sunscreen</Link></li>
      <li><Link>Bundle</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">skincare</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        

      <li><Link>All Products</Link></li>
      <li><Link>serum</Link></li>
      <li><Link>sunscreen</Link></li>
      <li><Link>Bundle</Link></li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-3">
   <div className='flex items-center gap-3'>
  <p className=' w-10 h-10 bg-white rounded-full text-center pl-3 pt-2 text-xl'><HiOutlineShoppingBag /></p>  <h1 className='font_normal text-[20px]'>cart (1)</h1>
   </div>

<div>
      <p className=' w-10 h-10 bg-white rounded-full text-center pl-[9px] pt-[9px] text-2xl'> <FaRegHeart /></p>
</div>
<div>
      <p className=' w-10 h-10 bg-white rounded-full text-center pl-[9px] pt-2 text-2xl'> <GoPerson /></p>
</div>

  </div>
</div>
        </div>
    );
};

export default Navbar;