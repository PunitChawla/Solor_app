import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const stats = [
  { icon: "/src/assets/growth.png", percentage: "114%", text: "more web traffic" },
  { icon: "/src/assets/hand.png", percentage: "55%", text: "more deals" },
  { icon: "/src/assets/phone.png", percentage: "43%", text: "more tickets resolved" }
];

export default function StatsAndFooter() {
  return (
    <div className="w-full  flex flex-col justify-between bg-white">
      {/* Stats Section */}
      <div className="p-10 mb-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-b-xl text-center">
        <h2 className="text-white text-2xl font-bold mb-6">WeAd Media customer's results after 1 year</h2>
        <div className="flex justify-center gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center w-64"
              whileHover={{ scale: 1.1 }}
            >
              <img src={stat.icon} alt="icon" className="h-16 w-16 mb-4" />
              <p className="text-xl font-bold">{stat.percentage}</p>
              <p className="text-gray-600">{stat.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="flex justify-center items-center gap-6 py-6 bg-gray-900 text-white">
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl hover:text-pink-500" />
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-blue-500" />
        </a>
      </footer>
    </div>
  );
}
