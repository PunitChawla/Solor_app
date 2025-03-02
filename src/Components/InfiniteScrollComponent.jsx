import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const imageData = [
  ["/src/assets/1-removebg-preview.png", "/src/assets/2-removebg-preview.png", "/src/assets/10-removebg-preview.png"],
  ["/src/assets/3-removebg-preview.png", "/src/assets/4-removebg-preview.png", "/src/assets/5-removebg-preview.png"],
  ["/src/assets/6-removebg-preview.png", "/src/assets/8-removebg-preview.png", "/src/assets/9-removebg-preview.png"]
];

const InfiniteScrollComponent = () => {
  return (
    <div className="flex w-full h-screen bg-white p-10">
      {/* Left Side Text */}
      <div className="w-1/3 flex flex-col justify-center p-6">
        <h2 className="text-5xl font-bold text-gray-600">TRUSTED BY</h2>
        <p className="text-lg text-gray-600 mt-4">
          "WeAd Media elevates brands through social media management, content creation, and targeted digital advertising."
        </p>
      </div>
      
      {/* Right Side Scrolling Images */}
      <div className="w-2/3 relative overflow-hidden flex bg-gradient-to-r from-yellow-300 to-pink-300 p-6 rounded-lg">
        {imageData.map((images, colIndex) => (
          <div key={colIndex} 
            className={`relative flex flex-col items-center gap-6 overflow-hidden ${
              colIndex === 0 ? 'ml-0' : colIndex === 1 ? 'mx-auto' : 'mr-0'
            }`}
          >
            <motion.div
              className="flex flex-col items-center gap-6"
              animate={{ y: colIndex % 2 === 0 ? ["0%", "-100%"] : ["-100%", "0%"] }}
              transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
              style={{ transform: "translateY(0%)" }}
            >
              {[...images, ...images, ...images].map((src, index) => (
                <div key={index} className="relative">
                  <img src={src} alt="logo" className="h-[200px] w-[250px] object-contain" />
                  {/* Vertical Line */}
                  {index !== [...images, ...images, ...images].length - 1 && (
                    <div className="w-1 h-8 bg-white mx-auto" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollComponent;