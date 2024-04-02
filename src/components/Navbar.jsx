import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/Products",
  },
  {
    name: "About",
    path: "/About",
  },
  {
    name: "Contact",
    path: "/Contact",
  },
];
const Navbar = () => {
  const item = useSelector((state) => state.cart);

  return (
    <main>
      <div className="flex justify-around items-center p-4 shadow-lg z-10">
        <section className="flex items-center gap-2">
        <div className="pr-2 sm:hidden block">
          <GiHamburgerMenu />
        </div>
        <h2 className="text-3xl font-bold">
          Jet<span className="text-red-600 text-2xl">Shop</span>
        </h2>
        </section>
        <div className="hidden sm:block">
          <ul className="flex gap-8 font-bold">
            {Navigation.map((Navigation, index) => (
              <Link key={index} to={Navigation.path}>
                {Navigation.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-purple-500 text-white px-4 py-1 rounded-lg hidden sm:block">
            Login
          </button>
          <Link to="/Cart" className="flex relative ">
            <FaShoppingCart className="text-2xl" />
            <span className="relative bottom-4 bg-red-500 p-1 w-5 h-5 rounded-[50px] flex items-center justify-center">
              {" "}
              {item.length}
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
