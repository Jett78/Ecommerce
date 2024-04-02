import React from 'react'
import {useSelector } from 'react-redux'
import AddCart from '../components/AddCart'
const Cart = () => {

  const products = useSelector((state=>state.cart))
  return (
    <main>
      <div>
        <h2>Cart</h2>
        <div className='grid gap-1'>
          {
             products.map((product,index) => (
              <AddCart key={index} product={product}/>
             ))
          }
        </div>
      </div>
    </main>
  )
}

export default Cart