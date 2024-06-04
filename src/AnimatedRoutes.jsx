import React from 'react'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

    const location = useLocation()
  return (
    <div>
        <AnimatePresence>
         <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="Products/SingleProduct/:id" element={<SingleProduct />}></Route>
            <Route path="/SingleProduct/:id" element={<SingleProduct />}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
          </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes