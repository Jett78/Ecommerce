import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiTwitterXLine } from "react-icons/ri";



const Faces = ({ info }) => {
  return (
    <main>
      <div>
        <section>
          <figure>
            <img
              src={info.img}
              alt="people"
              className="w-40 h-40 rounded-[50px]"
            />
          </figure>
        </section>
        <section className="mt-5">
          <h2 className="font-bold text-l">{info.name}</h2>
          <h2 className="text-gray-500">{info.role}</h2>
          <div className="flex justify-center gap-3 text-2xl text-gray-500 mt-1 cursor-pointer">
            <CiFacebook />
            <FaInstagram />
            <CiLinkedin />
            <RiTwitterXLine />

          </div>
        </section>
      </div>
    </main>
  );
};

export default Faces;
