import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase.Config";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

 

const AllUser = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const userList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setUsers(userList);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    loadUsers();
  }, [])
  const handleDelete = async (id) => {
  try {
    await deleteDoc(doc(db, "users", id));
    Swal.fire({
                title: `Delete success`,
                icon: "success",
                draggable: true,
              })
              
    
      
    setUsers(prev => prev.filter(user => user.id !== id));
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
  
    return (
        <div>
            <div className="overflow-x-auto text-black">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-black">
       
        <th>Name</th>
        <th>Email</th>
        
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
    {
        users.map(user=>(
              <tr>
        
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.displayName}</div>
              <div className="text-sm opacity-50">{user.role}</div>
            </div>
          </div>
        </td> 
        <td>
         {user.email}
      
         
        </td>
        
        <th>
           <td onClick={()=>handleDelete(user.id)} className='text-2xl btn btn-circle hover:shadow-lg hover:bg-opacity-65 bg-white text-red-600 cursor-pointer'><MdDeleteForever /></td>
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

export default AllUser;