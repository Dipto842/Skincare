import { Link } from "react-router-dom";


const DashboardNavbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to={''}>Add Iteam</Link></li>
        
        <li><Link to={'Alliteam'}>All Iteam</Link></li>
        <li><Link to={'PieChart'}>Pie Chart</Link></li>
        <li><Link to={'alluser'}>AllUser</Link></li>
      </ul>
    </div>
  </div>
    <div className="text-center">
<h1>Admin Pages</h1>
    </div>
  
  
</div>
        </div>
    );
};

export default DashboardNavbar;