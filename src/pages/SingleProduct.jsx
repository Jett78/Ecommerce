import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { add } from "../redux/cartSlice";
import { useDispatch } from "react-redux";
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import Card from "../components/Card.jsx";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const handleAdd = (product) => {
    dispatch(add(product));
  };
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { title, image, price, category, description } = product;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      console.log(data);
      setProduct(data);
    };
    fetchProduct();
  }, []);

  
  return (
    <main>
      <h2 className="bg-white text-2xl font-bold p-4 ">Category: {category}</h2>
      <div className=" bg-white p-16 flex flex-wrap sm:flex  justify-center gap-6 ">
        <section>
          <figure className="max-w-80 border-2 p-2">
            <img src={image} alt="singleproduct" className="min-w-60 sm:w-full" />
          </figure>
        </section>

        <section className="grid min-h-[30rem] items-center p-2">
          <div>
            <h2 className="text-4xl font-bold my-5 max-w-[35rem]">{title}</h2>
            <div className="flex gap-2 text-yellow-400 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <p className="max-w-[35rem] font-semibold text-l text-gray-400 mt-2 ">
              {description}
            </p>
            <section className="flex items-center gap-5 mt-2">
              <div class="flex mt-5">
                <span class="mr-3 font-semibold">Color</span>
                <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button class="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>

              <div class="flex items-end">
                <span class="mr-3 font-semibold">Size</span>
                <div class="relative">
                  <select class="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-8">
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                </div>
              </div>

            </section>
            <h3 className="text-3xl font-bold mt-5">${price}</h3>
            <button
              onClick={() => handleAdd(product)}
              className="bg-purple-500 text-white px-4 py-1 rounded-lg mt-5"
            >
              Add to Cart
            </button>
          </div>
        </section>
      </div>
 
    </main>
  );
};

export default SingleProduct;
