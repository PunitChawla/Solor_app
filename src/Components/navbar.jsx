import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-transparent border-b border-white/30 backdrop-blur-md z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <img src="/assets/logo.webp" alt="Logo" className="h-[110px]" />
          </motion.div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            {["Demos", "Pages", "Features", "Layouts", "Resources"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-black font-medium hover:text-gray-700 transition-all duration-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>

          {/* Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300">
              Contact us
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
