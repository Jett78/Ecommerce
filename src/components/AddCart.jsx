import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/cartSlice';

const AddCart = ({product}) => {
    const{title,image,price,id} = product;
    const dispatch = useDispatch()
    const products = useSelector((state=>state.cart))
    const handleRemove = (productId) => {
       dispatch(remove(productId))
    }
  return (
    <main>
        <div className='flex flex-wrap justify-around sm:gap-8 w-[20rem] sm:w-fit mx-auto bg-white shadow-sm items-center border px-20 py-2'>
            <figure className='w-10'>
                <img src={image} alt="addcartimage" />
            </figure>
            <div className='flex flex-wrap sm:gap-10'>
                <h2 className='font-bold w-60'>{title}</h2>
                <p className='font-bold'>${price}</p>
            </div>
            <button className='bg-red-500 text-white rounded-lg font-semibold px-3 py-1' onClick={()=>handleRemove(product.id)}>
                remove
            </button>
        </div>
    </main>
  )
}

export default AddCart