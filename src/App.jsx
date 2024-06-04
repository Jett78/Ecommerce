import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import Footer from "./pages/Footer";
import AnimatedRoutes from "./AnimatedRoutes";

const App = () => {

  return (
    <main className="bg-gray-100 min-h-screen">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
           <AnimatedRoutes/>
          <Footer/>
        </BrowserRouter>
      </Provider>
    </main>
  );
};

export default App;
