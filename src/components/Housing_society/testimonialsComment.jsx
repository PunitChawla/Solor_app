import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "The first distinctive impression about SolarSquare was their pre-sales work; the turnaround time for complex queries on material and execution was exemplary.",
    author: "SomAnathan Sundaram, Purva Fountain Square, Bangalore",
  },
  {
    text: "Your professionalism and very competitive price give you an edge over others.",
    author: "Sijo Jacob, Lake Point Tower, Bangalore",
  },
  {
    text: "SolarSquare team was highly professional and committed throughout the process. Their detailed approach helped us understand the benefits of solar energy better.",
    author: "Rahul Sharma, Prestige Shantiniketan, Bangalore",
  },
  {
    text: "The installation was seamless, and the customer support was outstanding. Highly recommend SolarSquare!",
    author: "Meera Nair, Oberoi Splendor, Mumbai",
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Auto-scrolls every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to handle manual navigation
  const handleScroll = (direction) => {
    if (direction === "up") {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    } else {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        90% of customers recommend us!
      </h2>
      <p className="text-center text-gray-600 text-lg md:text-xl mb-20">
        Don't just believe us – read the reviews for yourself.
      </p>

      {/* Testimonial Section */}
      <div className="relative w-full max-w-3xl flex flex-col items-center">
        {/* Scroll Up Button */}
        <button
          className="absolute -top-12  text-black text-lg md:text-lg px-4 py-2 rounded-full transition"
          onClick={() => handleScroll("up")}
        >
          ▲
        </button>

        <div className="flex flex-col items-center gap-6 overflow-hidden">
          {/* First (Highlighted) Comment - Blue Background */}
          <div className="bg-blue-800 text-white p-6 md:p-8 rounded-lg shadow-lg text-lg md:text-xl text-center w-full transition-all duration-700 ease-in-out transform scale-105">
            <p className="mb-4">{testimonials[activeIndex].text}</p>
            <p className="font-semibold text-sm md:text-lg">- {testimonials[activeIndex].author}</p>
          </div>

          {/* Second Comment - Gray Background */}
          <div className="bg-gray-200 text-gray-800 p-6 md:p-8 rounded-lg shadow-lg text-lg md:text-xl text-center w-full transition-all duration-700 ease-in-out">
            <p className="mb-4">{testimonials[(activeIndex + 1) % testimonials.length].text}</p>
            <p className="font-semibold text-sm md:text-lg">- {testimonials[(activeIndex + 1) % testimonials.length].author}</p>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          className="absolute -bottom-12 text-black text-xl md:text-lg px-4 py-2 rounded-full transition"
          onClick={() => handleScroll("down")}
        >
          ▼
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
