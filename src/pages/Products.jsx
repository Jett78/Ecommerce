import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";
const Products = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products/");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchdata();
  }, []);

  const animateProduct = {
    initial:{y:20,opacity:0},
    animate:(index)=>({
      y:0,
      opacity:1,
      transition:{
        delay:0.20*index,
      }
    })
  }
  return (
    <motion.main
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ease:"easeInOut",duration:1}}
    >
      <div>
        <h2 className="text-2xl text-center font-bold my-8">
          Available Products:{product.length}
        </h2>
        <div className="flex flex-wrap flex-row justify-center gap-y-5">
          {product.map((product, index) => (
             <motion.div
             key={index}
             variants={animateProduct}
             custom={index}
             initial="initial"
             whileInView="animate"
             viewport={{once:true,amount:0.5}}
             transition={{ease:"easeIn",duration:2}}
             >
                 <Card product={product} />
             </motion.div>
          ))}
        </div>
      </div>
    </motion.main>
  );
};

export default Products;
