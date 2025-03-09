import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <div className="w-full bg-white py-16 px-4 flex flex-col items-center">
      {/* Heading & Subheading */}
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Pioneering solar excellence: <br /> 
        <span className="text-black">Our vision in action</span>
      </h2>
      <p className="text-center text-lg text-gray-600 max-w-4xl mb-12">
        Our everyday goal is simple – to make rooftop solar accessible to all. 
        And we do this by focusing on your happiness, which keeps us constantly innovating.
      </p>

      {/* Vision Icons Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl w-full text-center">
        
        {/* Vision 1 */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: false, amount: 0.3 }}
        >
          <img 
            src="https://sse-website.s3.ap-south-1.amazonaws.com/about-us/about-us-8+(1).png" 
            alt="Clean Energy" 
            className="w-32 h-32 md:w-40 md:h-40"
          />
          <p className="mt-4 text-lg font-medium">
            Our vision is to make clean energy affordable and accessible.
          </p>
        </motion.div>

        {/* Vision 2 */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          viewport={{ once: false, amount: 0.3 }}
        >
          <img 
            src="https://sse-website.s3.ap-south-1.amazonaws.com/about-us/about-us-9+(1).png" 
            alt="Solar Industry" 
            className="w-32 h-32 md:w-40 md:h-40"
          />
          <p className="mt-4 text-lg font-medium">
            Our mission is to make the solar generation industry more organized.
          </p>
        </motion.div>

        {/* Vision 3 */}
        <motion.div 
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.4 }} 
          viewport={{ once: false, amount: 0.3 }}
        >
          <img 
            src="https://sse-website.s3.ap-south-1.amazonaws.com/about-us/about-us-10+(1).png" 
            alt="Transparency" 
            className="w-32 h-32 md:w-40 md:h-40"
          />
          <p className="mt-4 text-lg font-medium">
            Our method is to infuse transparency and trust.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default VisionSection;
