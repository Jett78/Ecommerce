import React from "react";
import { motion } from "framer-motion";


const Contact = () => {
  return (
    <motion.main
    initial={{opacity:0,x:"-100%"}}
    animate={{opacity:1,x:0}}
    transition={{ease:"easeInOut",duration:0.5}}
    >
     <h2 className="text-4xl text-center font-bold bg-gray-200 p-10">#Contact us</h2>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.318795204058!2d85.3234171252996!3d27.676540176200202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19c679cccbb9%3A0x32c7f2b6d1cff467!2sKumbheshwor%20Temple%2C%20Kwalakhu%20Rd%2C%20Lalitpur%2044700!5e0!3m2!1sen!2snp!4v1711967627436!5m2!1sen!2snp"
            width="800"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-80 sm:w-[50rem]"
          ></iframe>
        </section>

        <section>
          <form
            action="https://formspree.io/f/xzbnrpbe"
            method="post"
            className="grid p-5 max-w-[27rem] max-h-[35rem] mx-2 rounded-lg border-2 border-gray-400 bg-white"
          >
            <h2 className="text-center text-xl font-bold mb-3">Contact us</h2>
            <p className="text-gray-400">If you have any queries regarding us.feel free to ask us!!</p>
            <div className="grid pb-2 gap-2">
              <label htmlFor="email" className="font-semibold text-xl">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 outline-none border-2 border-gray-300"
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="messsage" className="font-semibold text-xl">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Write something here"
                className="p-2 outline-none border-2 border-gray-300"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-500 w-fit px-6 py-1 text-white font-semibold my-4 mx-auto rounded-lg"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </motion.main>
  );
};

export default Contact;
