import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react"; // Icons for menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <motion.nav
      className="relative w-full bg-white shadow-md backdrop-blur-md z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Clickable Logo */}
        <Link to="/">
          <motion.div
            className="w-[150px] h-[50px] bg-no-repeat bg-contain cursor-pointer"
            style={{ backgroundImage: "url('/assets/finalLogo.png')" }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[{ name: "Home", path: "/home" }, { name: "Housing Society", path: "/housing_society" }, { name: "Commercial", path: "/commercial" }, { name: "About Us", path: "/aboutus" }, { name: "Careers", path: "/careers" }].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
            >
              <Link to={item.path} className="text-gray-800 hover:text-black font-medium transition-all duration-300">
                {item.name}
              </Link>
            </motion.div>
          ))}

          {/* More Dropdown */}
          <div className="relative">
            <button className="flex items-center text-gray-800 hover:text-black" onClick={() => setDropdownOpen(!dropdownOpen)}>
              More <ChevronDown size={18} className="ml-1" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.5 }} className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-40">
                  <Link to="/solarpro" className="block px-4 py-2 hover:bg-gray-100">SolarPro</Link>
                  <Link to="/blog" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}>
          <Link to="/go-solar" className="hidden md:block bg-gradient-to-r from-blue-700 to-black text-white px-6 py-2 rounded-full shadow">
            Sign up for free electricity →
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button className="md:hidden text-black" onClick={() => setIsOpen(!isOpen)} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            {[{ name: "Home", path: "/home" }, { name: "Housing Society", path: "/housing_society" }, { name: "Commercial", path: "/commercial" }, { name: "About Us", path: "/aboutus" }, { name: "Careers", path: "/careers" }].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 * index, ease: "easeOut" }}>
                <Link to={item.path} className="block px-6 py-3 border-b hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </motion.div>
            ))}

            {/* More Dropdown (Mobile) */}
            <motion.div className="border-b" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}>
              <button className="w-full flex justify-between px-6 py-3 hover:bg-gray-100" onClick={() => setDropdownOpen(!dropdownOpen)}>
                More <ChevronDown size={18} />
              </button>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.5 }}>
                    <Link to="/solarpro" className="block px-10 py-2 hover:bg-gray-100">SolarPro</Link>
                    <Link to="/blog" className="block px-10 py-2 hover:bg-gray-100">Blog</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* CTA Button (Mobile) */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}>
              <Link to="/go-solar" className="block bg-gradient-to-r from-blue-700 to-black text-white text-center py-3 mt-2">
                Sign up for free electricity →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
