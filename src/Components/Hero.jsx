import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          height: "39rem",
          margin: "80px 50px 80px 80px",
          borderRadius: "15px",
          backgroundImage: "url('/assets/havamahal.png')",
          transform: `scale(${1 + scrollY * 0.0002})`,
          transform: `scale(${Math.min(1.1, 1 + scrollY * 0.0002)})`,
        }}
      ></div>

      {/* Content Over Image */}
      <div className="relative text-slate-900 text-center px-6 md:px-16">
        <motion.h1
          className="text-4xl md:text-6xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        >
          SEO & Digital Marketing Agency
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl font-light drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          WeAd Media gives you all the tools to build a stunning website that
          scales and performs beautifully. Let’s craft something awesome together!
        </motion.p>
      </div>
    </div>
  );
};

export default HeroSection;
