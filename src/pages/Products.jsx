import React from "react";
import { useState, useEffect } from "react";
import Card from "../components/Card";

const Products = () => {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchdata();
  }, []);
  return (
    <main>
      <div>
        <h2 className="text-2xl text-center font-bold my-8">
          Available Products:{product.length}
        </h2>
        <div className="flex flex-wrap flex-row justify-center gap-y-5">
          {product.map((product, index) => (
            <Card key={index} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Products;
