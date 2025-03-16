import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://sse-website.s3.ap-south-1.amazonaws.com/home-page/Hero-Image.jpg')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Still paying for electricity?
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Switch to solar. Let the sun pay your bills.
        </motion.p>
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

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-3 bg-white shadow-lg rounded-lg p-3 px-5">
        <img src="/assets/google-logo.png" alt="Google" className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-gray-700 font-semibold">Doctor Electric  is India's trusted solar company</p>
          <p className="text-blue-500 font-semibold">Rated 4.8 on Google with 5000+ customer reviews</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
