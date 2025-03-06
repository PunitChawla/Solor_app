import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://sse-website.s3.ap-south-1.amazonaws.com/commercial/commercial-banner.png')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
         India's top companies choose SolarSquare.
        </motion.h1>
      
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <Link to="/go-solar">
            <button className="bg-gradient-to-r from-blue-600 to-black text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
              Get a quote
            </button>
          </Link>
        </motion.div>
      </div>


      
    </div>
  );
};

export default HeroSection;
