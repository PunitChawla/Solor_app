import { motion } from "framer-motion";

const RatingCard = ({ imageSrc, delay }) => {
  return (
    <motion.div
      className="bg-pink-700 p-4 rounded-xl shadow-lg w-72 h-96 flex flex-col items-center relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Decorative Image on Top, now LOWER */}
      <img
        src={imageSrc}
        alt="Decorative"
        className="absolute top-6 w-[220px] h-28 object-cover"
      />

      {/* Card Content */}
      <div className="bg-gradient-to-b from-yellow-300 to-pink-200 p-4 rounded-lg mt-28 text-center shadow-md">
        <h3 className="font-bold text-lg">
          Schedule a <span className="text-blue-700">FREE consultation</span>
        </h3>
        <p className="text-sm text-gray-700 mt-2">
          Get genuine advice from our solar experts. No pressure, book only if
          you are satisfied!
        </p>
      </div>

      {/* Star Ratings */}
      <div className="flex mt-4 space-x-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-yellow-400 text-3xl">★</span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Clients() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-200 to-pink-300 p-10">
      <div className="bg-white py-20 px-32 rounded-xl shadow-xl w-4/5">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          SATISFIED CLIENTS
        </h2>

        {/* Animated Rating Boxes */}
        <div className="flex justify-center space-x-10">
          <RatingCard imageSrc="/src/assets/decoration.png" delay={0.2} />
          <RatingCard imageSrc="/src/assets/decoration.png" delay={0.4} />
          <RatingCard imageSrc="/src/assets/decoration.png" delay={0.6} />
        </div>
      </div>
    </div>
  );
}
