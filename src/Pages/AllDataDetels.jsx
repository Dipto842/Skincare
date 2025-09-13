import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AllDataDetels = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const Datadetels = async () => {
    const Data = await axios.get("https://skincare-backend-seven.vercel.app/AllData");
    const fineData = Data.data.find((i) => i._id === id);

    setData(fineData);
  };

  useEffect(() => {
    Datadetels();
  }, [id]);

  const hendelcard = (id) => {
    console.log(id);

    if (data._id === id) {
      axios
        .post("https://skincare-backend-seven.vercel.app/sidebarData/add", data)

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

//   Whattlist 
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
  return (
    <div>
      <div className="card lg:card-side bg-base-100 text-slate-400 h-[600px] shadow-sm grid lg:grid-cols-2">
        <figure>
          <img src={data.image} alt="Album" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {data.name}</h2>
          <h2 className=""> {data.peragirap}</h2>
          <h2 className="">
            <span className="font-bold text-slate-400 text-[16px]">stock:</span>
            <span className="badge badge-soft text-center pb-1">
              {data.stock}
            </span>
          </h2>

          <p>
            <span className="font-bold text-slate-400 text-[16px]">Price:</span>
            {data.price}$
          </p>

          <div className="card-actions justify-end">
            {data.stock === "outstock" ? (
              <div disabled={true} className="btn btn-dash bg-white hover:bg-black  text-pink-400 w-full mt-6  text-2xl">
                <FaShoppingCart />
              </div>
            ) : (
              <div
                onClick={() => hendelcard(data._id)}
                className="btn btn-dash bg-white hover:bg-black  text-pink-400 w-full mt-6  text-2xl"
              >
                <FaShoppingCart />
              </div>
            )}
            <div onClick={()=>hendewhattlist(data)} className="btn btn-dash bg-white hover:bg-black  text-pink-400 w-full mt-6  text-2xl ">
              {" "}
              <FaRegHeart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDataDetels;
