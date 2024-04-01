import React from 'react'

const Hero = () => {
  return (
    <main>
         <div className="flex flex-wrap justify-center items-center bg-gray-200 p-12">
        <section>
          <div className="text-5xl font-bold">
            <h1>Find The Best Fashion</h1>
            <h1>Style For</h1>
            <h1>You</h1>
            <div className="text-xl font-normal my-5 text-gray-500">
              <p>
                A specialist label creating luxury essentials.Ethically crafted
              </p>
              <p>with an unwavering commitment to exceptional quality.</p>
            </div>
          </div>
          <button className="bg-green-500 px-5 py-2 text-white font-semibold rounded-xl">Shop Now</button>
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