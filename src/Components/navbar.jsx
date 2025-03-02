import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Desktop Menu */}
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

          {/* Contact Button (Desktop) */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300">
              Contact us
            </button>
          </motion.div>

          {/* Hamburger Menu (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {["Demos", "Pages", "Features", "Layouts", "Resources"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="text-black font-medium hover:text-gray-700 transition-all duration-300"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </motion.a>
                )
              )}
              <motion.button
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-300"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                onClick={() => setIsOpen(false)}
              >
                Contact us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
