import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <main>
         <div className="flex flex-wrap justify-center items-center bg-gray-200 p-12">
        <section>
          <div>
            <h1 className='sm:text-5xl text-4xl font-bold max-w-[30rem]'>Find The Best fashion style For You</h1>
            <div className="text-xl  my-5 text-gray-500">
              <p>
                A specialist label creating luxury essentials.Ethically crafted
              </p>
              <p>with an unwavering commitment to exceptional quality.</p>
            </div>
          </div>
         <Link to={"/products"}> <button className="bg-green-500 px-5 py-2 text-white font-semibold rounded-xl">Shop Now</button></Link>
        </section>
        <section>
          <figure className="sm:block hidden">
            <img src="./hero.png" alt="hero.image" className=" min-w-[40rem] " />
          </figure>
        </section>
      </div>

      <div className='flex flex-wrap justify-center my-5 gap-4'>
        <figure className='w-[40rem]'>
          <img src="./banner.jpg" alt="wewewe" />
        </figure>
        <figure className='w-[40rem]'>
          <img src="./banner2.jpg" alt="wewew" />
        </figure>
      </div>
    </main>
  )
}

export default Hero