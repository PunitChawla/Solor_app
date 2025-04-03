import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

const testimonials = [
  {
    text: "I got a 5kW solar system installed at my home in Varanasi by Doctor Electric. The entire process was smooth, and the team was very professional. They completed the installation within the promised time, and now my electricity bills have significantly reduced. Highly recommend their services!",
    author: "Ankit Sharma (⭐⭐⭐⭐⭐)",
  },
  {
    text: "Doctor Electric installed a 7kW solar system on my commercial property in Lanka, Varanasi. The team explained everything in detail, and the installation was done without any hassle. I’m already seeing great savings on my electricity bills. Great service!",
    author: "Ramesh Tiwari (⭐⭐⭐⭐⭐)",
  },
  {
    text: "We got a 6kW rooftop solar setup installed in our apartment near BHU. The team was knowledgeable, and the panel quality is excellent. They also helped with the subsidy paperwork. Very satisfied with their work!",
    author: "Pooja Srivastava (⭐⭐⭐⭐⭐)",
  },
  {
    text: "I was hesitant about going solar, but Doctor Electric made the whole process simple. They installed an 8kW solar panel system for our school in Assi Ghat. The installation was quick, and the performance so far is amazing!",
    author: "Vishal Pandey (⭐⭐⭐⭐⭐)",
  },
  {
    text: "The best solar panel installation company in Varanasi! They installed a 6.5kW system at my shop in Godowlia. The team was punctual and professional, and now I’m enjoying free electricity during the daytime.",
    author: "Meera Jaiswal (⭐⭐⭐⭐⭐)",
  },
  {
    text: "Doctor Electric did an excellent job installing a hybrid solar system at my farmhouse in Sarnath. Their team is experienced, and the pricing is fair. The panels are performing well, and I am happy with the investment.",
    author: "Ajay Verma (⭐⭐⭐⭐⭐)",
  },
  {
    text: "I opted for a solar panel system with battery backup for my house near Sigra, and I am 100% satisfied. Even during power cuts, I have electricity. The team is professional and reliable.",
    author: "Rohit Mishra (⭐⭐⭐⭐⭐)",
  },
  {
    text: "Doctor Electric installed a 6kW solar setup at our factory in Chandpur. They provided top-quality panels and an efficient inverter. I highly recommend them for commercial solar projects.",
    author: "Sunita Yadav (⭐⭐⭐⭐⭐)",
  },
  {
    text: "Got a 7kW on-grid solar panel installed at my home in Bhelupur. The system is running perfectly, and the installation team was very professional. I am already seeing savings on my bills!",
    author: "Arvind Gupta (⭐⭐⭐⭐⭐)",
  },
  {
    text: "The best decision I made was choosing Doctor Electric for my solar panel installation in Varanasi. They finished the work in just 2 days, and the system is working flawlessly. Highly recommended!",
    author: "Neha Rastogi (⭐⭐⭐⭐⭐)",
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
        <div className="w-full flex flex-col bg-blue-800 text-white p-8 md:p-10 rounded-xl shadow-lg scale-110 transition-all duration-500">
          <p className="text-xl">{testimonials[index].text}</p>
          <p className="font-bold mt-2">{testimonials[index].author}</p>
        </div>

        {/* Secondary Testimonial (Smaller & Light Background) */}
        <div className="w-full flex flex-col bg-gray-200 text-gray-700 p-4 md:p-6 rounded-xl scale-90 transition-all duration-500">
          <p className="text-base">{testimonials[(index + 1) % testimonials.length].text}</p>
          <p className="font-bold mt-2">{testimonials[(index + 1) % testimonials.length].author}</p>
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
