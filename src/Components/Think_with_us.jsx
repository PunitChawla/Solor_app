import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

const ThinkSection = () => {
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
        className="absolute inset-0 bg-cover bg-center "
        style={{
          height:"580px",
          // width:"00px",
          margin: "80px 50px 80px 80px",
          borderRadius:"15px",
          backgroundImage: "url('/src/assets/havamahal.png')",
          transform: `scale(${1 + scrollY * 0.001})`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>

      {/* Content Over Image */}
      <div className="relative text-slate-900 text-center text-white px-6 md:px-16">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
          <TypeAnimation
            sequence={[
              "SEO & Digital Marketing Agency", 1500,
              "WordPress Theme. ", 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light drop-shadow-md">
          WeAd Media gives you all the tools to build a stunning website that
          scales and performs beautifully. Let’s craft something awesome together!
        </p>
      </div>
    </div>
  );
};

export default ThinkSection;
