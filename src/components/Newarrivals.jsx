import React, { useEffect,useState } from 'react'
import Card from './Card';


const Newarrivals = () => {

    const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://fakestoreapi.com/products/category/women's clothing?limit=5");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    fetchdata();
  }, []);
  return (
    <main>
        <div>
            <p className='text-center font-semibold text-xl text-gray-500 mt-10'>products</p>
            <h2 className='text-center text-4xl font-bold'>New Arrivals</h2>
            <div  className="flex flex-wrap flex-row justify-center gap-y-5 mt-8">
                {product.map((product,index) => (
                    <Card key={index} product={product} />
                ))}
            </div>
        </div>
    </main>
  )
}

export default Newarrivals