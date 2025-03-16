import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    image: "https://www.solarsquare.in/images/cm-carousel-1.png",
    text: "Solar team was very professional and had excellent interpersonal relations. Asbestos to GI roof sheet replacement and 2MW Solar Project was completed within 3 months time without escalations.",
    author: "C K Tharad, Senior VP, LNJ Bhilwara Group",
    isHighlighted: true,
  },
  {
    id: 2,
    image: "https://www.solarsquare.in/images/cm-carousel-2.png",
    text: "I am happy to acknowledge that doctor electric  has met the strictest Quality & Safety norms dictated by the Global Standards of Johnson & Johnson.",
    author: "Anish Sengupta, EHS & S, Johnson & Johnson",
    isHighlighted: false,
  },
  {
    id: 3,
    image: "https://www.solarsquare.in/images/cm-carousel-1.png",
    text: "Excellent service from doctor electric ! Their team ensured smooth execution of our 1.5MW project while maintaining top-notch safety standards.",
    author: "Ramesh Patel, Director, ABC Corp",
    isHighlighted: true,
  },
  {
    id: 4,
    image: "https://www.solarsquare.in/images/cm-carousel-2.png",
    text: "The professionalism and expertise of doctor electric  exceeded our expectations. The project was completed on time with remarkable efficiency.",
    author: "Sunil Mehta, CEO, Green Energy Solutions",
    isHighlighted: false,
  },
];

const TestimonialScroller = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-6">
        Exceptional quality. End-to-end service. Delighted customers
      </h2>

      {/* Testimonial Container */}
      <div className="relative w-full max-w-4xl flex flex-col items-center space-y-6">
        {/* Main Testimonial (Highlighted, Bigger) */}
        <div className="w-full flex flex-col md:flex-row items-center bg-blue-800 text-white p-8 md:p-10 rounded-xl shadow-lg scale-110 transition-all duration-500">
          <img src={testimonials[index].image} alt="Client" className="w-48 h-28 rounded-lg object-cover" />
          <div className="ml-4">
            <p className="text-xl">{testimonials[index].text}</p>
            <p className="font-bold mt-2">{testimonials[index].author}</p>
          </div>
        </div>

        {/* Secondary Testimonial (Smaller & Light Background) */}
        <div className="w-full flex flex-col md:flex-row items-center bg-gray-200 text-gray-700 p-4 md:p-6 rounded-xl scale-90 transition-all duration-500">
          <img src={testimonials[(index + 1) % testimonials.length].image} alt="Client" className="w-40 h-24 rounded-lg object-cover" />
          <div className="ml-4">
            <p className="text-base">{testimonials[(index + 1) % testimonials.length].text}</p>
            <p className="font-bold mt-2">{testimonials[(index + 1) % testimonials.length].author}</p>
          </div>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="mt-4 text-gray-600 animate-bounce">
        <FaChevronDown size={24} />
      </div>
    </div>
  );
};

export default TestimonialScroller;
