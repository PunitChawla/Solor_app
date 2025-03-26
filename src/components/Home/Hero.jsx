import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Array of objects containing images, headings, and descriptions
const slides = [
  {
    image: "/assets/bg1.jpg",
    heading: "Your roof, your solar, our responsibility",
    description: "End-to-end service. No middlemen.",
  },
  {
    image: "/assets/bg2.jpg",
    heading: "Power Your Home with Clean Energy",
    description: "Switch to solar and save money on electricity bills.",
  },
  {
    image: "/assets/bg3.jpg",
    heading: "Sustainable Energy for a Better Future",
    description: "Invest in solar, invest in tomorrow.",
  },
  // {
  //   image: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/slider-3.jpg",
  //   heading: "Say Goodbye to High Electricity Bills",
  //   description: "Experience energy independence with solar power.",
  // },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image Carousel */}
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.image}
          alt={`Slide ${index + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay Content (Different Heading & Description for Each Slide) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          {slides[current].heading}
        </h1>
        <p className="text-lg mt-2">{slides[current].description}</p>
        <Link
          to="/go-solar"
          className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-900 transition"
        >
          Get a quote
        </Link>
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <FaChevronLeft size={10} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <FaChevronRight size={10} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-blue-500 scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
