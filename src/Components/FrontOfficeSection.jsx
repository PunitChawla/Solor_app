import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const FrontOfficeSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-10 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
      {/* White Container */}
      <div ref={ref} className="relative w-[95%] max-w-6xl bg-white rounded-2xl shadow-lg p-12 flex flex-col items-center">
        
        {/* Icons and Dotted Lines */}
        <div className="relative flex items-center justify-between w-4/5 mt-6">
          {[
            "/src/assets/marketing.png",
            "/src/assets/sales.png",
            "/src/assets/service.png",
            "/src/assets/content.png",
            "/src/assets/operations.png"
          ].map((src, index, arr) => (
            <div key={index} className="flex items-center">
              <motion.img
                src={src}
                alt="Icon"
                className="h-20 w-20 object-contain"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } }
                }}
              />
              {index < arr.length - 1 && (
                <motion.div
                  className="w-32 h-1 border-dashed border-t-2 border-pink-500 mx-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  style={{ animation: "moveLine 1s linear infinite" }}
                ></motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Vertical and Horizontal Dotted Lines */}
        <div className="absolute left-16 top-12 flex flex-col items-center mt-32">
          <motion.div
            className="h-32 w-2 border-dashed border-l-2 border-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className="w-32 h-2 border-dashed border-t-2 border-pink-500 mt-0 ml-20 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>

        <motion.div
          className="relative flex justify-center mt-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
          }}
        >
          <img
            src="/src/assets/star.png"
            alt="Star"
            className="h-12 w-12"
            style={{ marginTop: "30px" }}
          />
          <img
            src="/src/assets/person.png"
            alt="Person"
            className="h-72 shadow-lg"
          />
        </motion.div>

        <motion.p
          className="text-center text-2xl font-semibold text-gray-800 mt-12"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
          }}
        >
          Your whole front office. One customer platform.
        </motion.p>
      </div>
      
      <style>
        {`
          @keyframes moveLine {
            0% { transform: translateX(0); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default FrontOfficeSection;
