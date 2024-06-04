import { useDisclosure } from '@chakra-ui/react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Modal, ModalContent,} from '@chakra-ui/react'
import { useState } from 'react';

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
  const { isOpen, onOpen,onClose } = useDisclosure()
  const [activeLink,setActiveLink] = useState(window.location.pathname)

  const handleSetActive = (path) => {
    setActiveLink(path);
  }

  //toggle
  const handleToggleModal = () => {
    if (isOpen) {
      onClose();
    } else {
      onOpen();
    }
  };

  return (
    <main>
      <div className="flex justify-around items-center p-4 shadow-lg z-10">
        <section className="flex items-center gap-2">
        <div className="pr-2 sm:hidden block">
          <GiHamburgerMenu  onClick={handleToggleModal}/>
        </div>
       <Link to={"/"}> <h2 className="sm:text-3xl text-2xl font-bold">
          Jet<span className="text-red-600 sm:text-2xl text-xl">Shop</span>
        </h2></Link>
        </section>

        <div className="hidden sm:block">
        <ul className="flex gap-8 font-bold">
            {Navigation.map((Navigation, index) => (
              <Link 
              key={index} 
              to={Navigation.path} 
              onClick={() => handleSetActive(Navigation.path)}
              className={activeLink === Navigation.path ? "text-red-600" : ""}>
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

  {/* sidebar  */}
      <Modal isOpen={isOpen}>
        <ModalContent >
        <div>
        {<ul className="sm:hidden grid text-center absolute top-[4rem] py-1 gap-8 font-bold bg-white w-full" >
            {Navigation.map((Navigation, index) => (
              <Link key={index} to={Navigation.path}>
                {Navigation.name}
              </Link>
            ))}
          </ul>}
      </div>
        </ModalContent>
      </Modal>
    </main>
  );
};

export default Navbar;
