import axios from "axios";

import { useEffect, useState } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const Sidebar = () => {
  const [selectedIdData, setSelectedIdData] = useState([]);
  const [products, setproducts] = useState([]);

  // Fetch data from the API based on the selected ID
  const fetchData = async () => {
    const Data = await axios.get("http://localhost:5000/sidebarData");
    setSelectedIdData(Data.data || []);
  };

  // Increment and decrement functions
  useEffect(() => {
    // Fetch products data

    axios
      .get("http://localhost:5000/carid")
      .then((res) => setproducts(res.data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const hedelpilas = async (id) => {
    products.map(async (item) => {
      if (item.name === id) {
        console.log(item.name, id);

        await axios.post("http://localhost:5000/sidebarData/add", item);

        fetchData();
      }
    });
  };
  const hedelsub = async (id) => {
    await axios.post("http://localhost:5000/sidebarData/subtract", { _id: id });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalPrice = selectedIdData.reduce((acc, item) => {
    return acc + item.price * (item.quantity || 1);
  }, 0);
// Delete
  const hendelDelete = (id) => {
    axios.delete(`http://localhost:5000/sidebarData/delete/${id}`)
    .then(
      Swal.fire({
        title: "Product Delete",
        icon: "success",
        draggable: true,
      })
    )
    .catch()
    setSelectedIdData(selectedIdData.filter((i) => i._id !== id)).catch();
  };

// whattlist 
  const hendewhattlist = (products) => {
    axios
      .post("http://localhost:5000/whattlist", products)
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

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th></th>
              <th>name</th>
              <th>price</th>
              <th>White list</th>
              <th>Delete</th>
            </tr>
          </thead>
          {selectedIdData.map((i,indx) => (
            <tbody key={indx}>
              {/* row 1 */}
               
              <tr>
                <td>
                  <div className="flex items-center gap-3 bg-opacity-70">
                    
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{i.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {i.price * i.quantity}$
                 
                  <div className="list-col-wrap text-xs flex items-center ">
                    <button
                      onClick={() => hedelpilas(i.name)}
                      className="btn btn-square btn-ghost mr-  text-xl"
                    >
                      +
                    </button>
                    <p className="mr- border w-16 text-center  text-[12px] pt-1 h-6 ">
                      {i.quantity}
                    </p>
                    <button
                      onClick={() => hedelsub(i._id)}
                      className="btn btn-square btn-ghost mr- text-xl"
                    >
                      -
                    </button>
                  </div>
                </td>
                <button
                  onClick={() => hendewhattlist(i)}
                  className="btn btn-dash text-pink-400 w-full mt-6  text-2xl "
                >
                  {" "}
                  <FaRegHeart />
                </button>
                <th>
                  <button
                    onClick={() => hendelDelete(i._id)}
                    className="btn btn-dash hover:text-red-500  w-full text-red-800  text-2xl"
                  >
                    <MdDelete />
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="text-start   mt-4 mx-auto w-full">
          <div className="border border-black w-full border-dashed"></div>
          <div>
            <h1 className=" font-bold ml-[34rem] mb-4 mt-2">
              Total price :{totalPrice}{" "}
            </h1>
          </div>
          <div className="text-center">
            <button className="btn btn-wide bg-lime-600 border-0 mt-0 hover:bg-lime-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
