import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const Up = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  // Fetch single product
  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://skincare-backend-seven.vercel.app/carid");
      const found = data.find(i => i._id === id);
      setProduct(found || {});
    } catch (error) {
      console.error("Fetch data failed:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Set default form values when product is loaded
  useEffect(() => {
    if (product) {
      setValue("name", product.name || "");
      setValue("image", product.image || "");
      setValue("price", product.price || "");
      setValue("peragirap", product.peragirap || "");
      setValue("category2", product.category2 || "");
      setValue("stock", product.stock || "");
    }
  }, [product, setValue]);

  const onSubmit = async (data) => {
    try {
      const upred = {
        name: data.name,
        image: data.image,
        price: data.price,
        peragirap: data.peragirap,
        category2: data.category2,
        stock: data.stock,
      };

      const response = await axios.put(
        `https://skincare-backend-seven.vercel.app/carid/update/${id}`, // backend route spelling fixed
        upred
      );

      console.log("Updated:", response.data);
      alert("Product updated successfully!");
    } catch (error) {
      console.error("Update failed:", error);
      alert("Update failed!");
    }
  };

  return (
    <div className="text-white">
      <div className="w-[1200px] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-5 bg-[#979494] w-[1200px] mx-auto pt-20 pl-10 pr-10 mt-10 pb-10 rounded-2xl">

            <div>
              <label className="text-2xl font-bold text-[#5c4f4f]">Name</label>
              <input
                type="text"
                placeholder={product.name || ""}
                className="input input-bordered w-full h-[60px] text-white"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Field is required</span>}
            </div>

            <div>
              <label className="text-2xl font-bold text-[#5c4f4f]">Image</label>
              <input
                type="url"
                placeholder={product.image || ""}
                className="input input-bordered w-full h-[60px]"
                {...register("image", { required: true })} // fixed
              />
            </div>

            <div>
              <label className="text-2xl font-bold text-[#5c4f4f]">Price</label>
              <input
                type="number"
                placeholder={product.price || ""}
                className="input input-bordered w-full h-[60px]"
                {...register("price", { required: true })}
              />
            </div>

            <div>
              <label className="text-2xl font-bold text-[#5c4f4f]">Peragirap</label>
              <input
                type="text"
                placeholder={product.peragirap || ""}
                className="input input-bordered w-full h-[60px]"
                {...register("peragirap", { required: true })}
              />
            </div>

            <div>
              <label className="text-2xl font-bold text-[#5c4f4f]">Category</label>
              <select
                className="select select-primary w-full h-[60px]"
                {...register("category2")}
              >
                <option value="" disabled>Select category</option>
                <option value="NEW ARRIVAL">NEW ARRIVAL</option>
                <option value="ANTI AGGING">ANTI AGGING</option>
                <option value="CLEANSING">CLEANSING</option>
              </select>
            </div>

            <div>
              <label className="text-2xl font-bold text-[#5c4f4f]">Stock</label>
              <select
                className="select select-primary w-full h-[60px]"
                {...register("stock")}
              >
                <option value="" disabled>Select stock</option>
                <option value="stock">stock</option>
                <option value="instock">instock</option>
              </select>
            </div>

          </div>

          <hr />
          <input
            className="btn btn-outline btn-primary text-center mx-auto w-full rounded-2xl"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Up;
