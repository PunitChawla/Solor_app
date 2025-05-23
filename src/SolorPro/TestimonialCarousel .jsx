import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "The first distinctive impression about doctor electric was their pre-sales work; the turnaround time for complex queries on material and execution was exemplary.",
    author: "SomAnathan Sundaram, Purva Fountain Square, Bangalore",
    image: "https://www.solarsquare.in/images/cm-carousel-1.png", 
  },
  {
    text: "Your professionalism and very competitive price give you an edge over others.",
    author: "Sijo Jacob, Lake Point Tower, Bangalore",
    image: "https://www.solarsquare.in/images/cm-carousel-2.png", 
  },
  {
    text: "doctor electric team was highly professional and committed throughout the process. Their detailed approach helped us understand the benefits of solar energy better.",
    author: "Rahul Sharma, Prestige Shantiniketan, Bangalore",
    image: "https://www.solarsquare.in/images/cm-carousel-1.png",
  },
  {
    text: "The installation was seamless, and the customer support was outstanding. Highly recommend doctor electric!",
    author: "Meera Nair, Oberoi Splendor, Mumbai",
    image: "https://www.solarsquare.in/images/cm-carousel-2.png", 
  },
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const handleScroll = (direction) => {
    if (direction === "up") {
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    } else {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-white px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
        What do our SolarPro partners say about us?
      </h2>

      <div className="relative w-full max-w-5xl mt-12 flex flex-col items-center ">
        <button
          className="absolute -top-12 text-black text-lg md:text-lg px-4 py-2 rounded-full transition"
          onClick={() => handleScroll("up")}
        >
          ▲
        </button>

        <div className="flex flex-col items-center gap-6 overflow-hidden">
          {/* First (Highlighted) Comment - Blue Background with Image */}
          <div className="flex items-center bg-blue-800 text-white p-6 md:p-8 rounded-lg shadow-lg text-lg md:text-xl text-center w-full transition-all duration-700 ease-in-out transform scale-105">
            {/* Image on Left (Square Shape) */}
            <img
              src={testimonials[activeIndex].image}
              alt="Testimonial"
              className="w-20 h-20 md:w-32 md:h-32 object-cover mr-4 "
            />
            {/* Text Content */}
            <div>
              <p className="mb-4">{testimonials[activeIndex].text}</p>
              <p className="font-semibold text-sm md:text-lg">- {testimonials[activeIndex].author}</p>
            </div>
          </div>

          {/* Second Comment - Gray Background with Image */}
          <div className="flex items-center bg-gray-200 text-gray-800 p-6 md:p-8 rounded-lg shadow-lg text-lg md:text-xl text-center w-full transition-all duration-700 ease-in-out">
            {/* Image on Left (Square Shape) */}
            <img
              src={testimonials[(activeIndex + 1) % testimonials.length].image}
              alt="Testimonial"
              className="w-20 h-20 md:w-32 md:h-32  object-cover mr-4 border-4 border-gray-300"
            />
            {/* Text Content */}
            <div>
              <p className="mb-4">{testimonials[(activeIndex + 1) % testimonials.length].text}</p>
              <p className="font-semibold text-sm md:text-lg">- {testimonials[(activeIndex + 1) % testimonials.length].author}</p>
            </div>
          </div>
        </div>

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
