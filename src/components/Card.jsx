import React from "react";

import { Link } from "react-router-dom";

const Card = ({ product }) => {

  const { title, image, price,id } = product;

 
  return (
    <main className="px-2">
     <Link to={`SingleProduct/${id}`}>
     <div className=" bg-white shadow-md p-8 w-[15rem] h-[25rem] flex flex-col justify-center items-center text-left ">
       
       <figure className="w-[8rem]">
         <img src={image} alt="images"/>
       </figure>

       <div className="mt-5">
         <h2 className="font-bold ">{title}</h2>
         <p className="font-bold text-l pt-2 text-red-500 ">${price}</p>
       </div>
     </div>
     </Link>
    </main>
  );
};

export default Card;
