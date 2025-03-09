import { motion } from "framer-motion";

const TeamSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Meet our team
      </h2>

      {/* Team Members */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center"
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Member 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-80  rounded-xl">
            <img 
              src="	https://sse-website.s3.ap-south-1.amazonaws.com/about-us/neeraj.png"
              alt="Neeraj Jain" 
              className="absolute bottom-0 w-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-4 text-lg font-bold">Neeraj Jain</p>
          <p className="text-gray-600">Co-Founder</p>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-80 rounded-xl">
            <img 
              src="	https://sse-website.s3.ap-south-1.amazonaws.com/about-us/thisNikhil.png"
              alt="Nikhil Nahar" 
              className="absolute bottom-0 w-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-4 text-lg font-bold">Nikhil Nahar</p>
          <p className="text-gray-600">Co-Founder</p>
        </div>

        {/* Member 3 */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-80  rounded-xl">
            <img 
              src="	https://sse-website.s3.ap-south-1.amazonaws.com/about-us/shreya.png"
              alt="Shreya Mishra" 
              className="absolute bottom-0 w-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-4 text-lg font-bold">Shreya Mishra</p>
          <p className="text-gray-600">Co-Founder</p>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full text-center mt-10"
        initial={{ opacity: 0, scale: 0.8 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Member 1 */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-80  rounded-xl">
            <img 
              src="	https://sse-website.s3.ap-south-1.amazonaws.com/about-us/neeraj.png"
              alt="Neeraj Jain" 
              className="absolute bottom-0 w-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-4 text-lg font-bold">Neeraj Jain</p>
          <p className="text-gray-600">Co-Founder</p>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-80 rounded-xl">
            <img 
              src="	https://sse-website.s3.ap-south-1.amazonaws.com/about-us/thisNikhil.png"
              alt="Nikhil Nahar" 
              className="absolute bottom-0 w-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-4 text-lg font-bold">Nikhil Nahar</p>
          <p className="text-gray-600">Co-Founder</p>
        </div>

        {/* Member 3 */}
        <div className="flex flex-col items-center">
          <div className="relative w-64 h-80  rounded-xl">
            <img 
              src="	https://sse-website.s3.ap-south-1.amazonaws.com/about-us/shreya.png"
              alt="Shreya Mishra" 
              className="absolute bottom-0 w-full object-cover rounded-xl"
            />
          </div>
          <p className="mt-4 text-lg font-bold">Shreya Mishra</p>
          <p className="text-gray-600">Co-Founder</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TeamSection;
