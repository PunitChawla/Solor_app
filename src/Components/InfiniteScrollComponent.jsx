import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const imageData = [
  ["/src/assets/logo1.png", "/src/assets/logo2.png", "/src/assets/logo3.png"],
  ["/src/assets/logo4.png", "/src/assets/logo5.png", "/src/assets/logo6.png"],
  ["/src/assets/logo7.png", "/src/assets/logo8.png", "/src/assets/logo9.png"]
];

const InfiniteScrollComponent = () => {
  return (
    <div className="flex w-full h-screen bg-white p-10">
      {/* Left Side Text */}
      <div className="w-1/3 flex flex-col justify-center p-6">
        <h2 className="text-4xl font-bold text-gray-800">TRUSTED BY</h2>
        <p className="text-lg text-gray-600 mt-4">
          "WeAd Media elevates brands through social media management, content creation, and targeted digital advertising."
        </p>
      </div>
      
      {/* Right Side Scrolling Images */}
      <div className="w-2/3 relative overflow-hidden flex bg-gradient-to-r from-yellow-300 to-pink-300 p-6 rounded-lg">
        {imageData.map((images, colIndex) => (
          <motion.div
            key={colIndex}
            className="flex flex-col items-center gap-6 mx-6"
            animate={{ y: ["100%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            style={{ animationDirection: colIndex % 2 === 0 ? "normal" : "reverse" }}
          >
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} alt="logo" className="h-20 w-20 object-contain" />
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollComponent;
