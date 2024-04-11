import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <main>
      <div className="flex flex-wrap gap-4 sm:justify-around justify-left items-center sm:p-14 pl-2 py-4 bg-gray-200 mt-10">
        <section>
        <h2 className="text-3xl font-bold pb-5">Jet<span className="text-red-600 text-2xl">Shop</span></h2>
          <p className="w-60 font-semibold text-gray-600">
            We handpick each product to ensure the highest standards of quality
            and durability.Enjoy prompt delivery of your orders right to your
            doorstep.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold pb-5">Quick Links</h2>
          <ul className="grid font-semibold text-gray-600">
            <Link to={"/"}>Home</Link>
            <Link to={"/Products"}>Products</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Contact"}>Contact</Link>
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-bold pb-5">Follow Us</h2>
          <div className="grid font-semibold text-gray-600">
           <a href="#">Facebook</a>
           <a href="#">Twitter</a>
           <a href="#">Instagram</a>
           <a href="#">Tiktok</a>
          </div>
        </section>
        <section>
            <h2 className="text-xl font-bold pb-5">Contact</h2>
            <div className="grid gap-3 font-semibold text-gray-600">
                <p>Kumbeshwar-11,Lalitpur</p>
                <p>+977-9898989898</p>
                <p>jetdeula@gmail.com</p>
            </div>
        </section>
      </div>
    </main>
  );
};

export default Footer;
