import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import SingleProduct from "./pages/SingleProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="Products/SingleProduct/:id" element={<SingleProduct />}></Route>
            <Route path="/SingleProduct/:id" element={<SingleProduct />}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </main>
  );
};

export default App;
