import { motion } from "framer-motion";

const images = [
  { src: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Gauranteed+performance.png", colSpan: "col-span-2", rowSpan: "row-span-1", direction: "left" },
  { src: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Gauranteed+performance.png", colSpan: "col-span-1", rowSpan: "row-span-2", direction: "right" },
  { src: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Gauranteed+performance.png", colSpan: "col-span-1", rowSpan: "row-span-1", direction: "left" },
  { src: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Gauranteed+performance.png", colSpan: "col-span-2", rowSpan: "row-span-2", direction: "right" },
  { src: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Gauranteed+performance.png", colSpan: "col-span-1", rowSpan: "row-span-1", direction: "left" },
  { src: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Gauranteed+performance.png", colSpan: "col-span-1", rowSpan: "row-span-1", direction: "right" },
];

const imageVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: custom * 0.2 },
  }),
};

const AnimatedGallery = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-4 py-10 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
        We make <span className="text-blue-500">rooftop solar</span> with integrity
      </h2>
      <p className="text-center text-base md:text-lg max-w-2xl mb-4">
        SolarSquare is a team of 700+ engineers, MBAs, scientists, and creative thinkers
        driven by the vision of accelerating solar adoption in India.
      </p>

      {/* Grid layout with smaller images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full max-w-4xl h-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            variants={img.direction === "left" ? imageVariants.hiddenLeft : imageVariants.hiddenRight}
            initial="hidden"
            animate="visible"
            custom={index}
            className={`rounded-lg overflow-hidden shadow-md ${img.colSpan} ${img.rowSpan}`}
          >
            <img src={img.src} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGallery;
