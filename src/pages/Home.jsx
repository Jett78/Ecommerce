import React from "react";
import Hero from "../components/Hero";
import Newarrivals from "../components/Newarrivals";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.main
    initial={{opacity:0,x:40}}
    animate={{opacity:1,x:0}}
    transition={{ease:"easeInOut",duration:0.5}}
    >
     <Hero/>
     <Newarrivals/>
    </motion.main>
  );
};

export default Home;
