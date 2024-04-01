import React from 'react'

const Contact = () => {
  return (
   <main>
    <div className='flex flex-wrap justify-center items-center gap-4 mt-10'>
      <section>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.318795204058!2d85.3234171252996!3d27.676540176200202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c679cccbb9%3A0x32c7f2b6d1cff467!2sKumbheshwor%20Temple%2C%20Kwalakhu%20Rd%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1711967627436!5m2!1sen!2snp" width="800" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <section >
        <form action="#" className='grid bg-gray-300 p-5 w-[27rem] h-[30rem] rounded-lg'>
         <div className='grid py-5'>
         <label htmlFor="email" className='font-semibold text-xl'>Email</label>
           <input type="email" placeholder='Enter your Email' className='p-2 outline-none' />
         </div>
           <div className='grid'>
           <label htmlFor="messsage" className='font-semibold text-xl'>Message</label>
           <textarea name="message" id="message" cols="30" rows="10" placeholder='Write something here' className='p-2 outline-none' ></textarea>
           </div>
           <button type='submit'>Submit</button>
        </form>
      </section>
    </div>
   </main>
  )
}

export default Contact