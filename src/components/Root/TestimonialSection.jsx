import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "Being an engineer myself, I am extremely satisfied with the team of SolarSquare. They have done an amazing job in the construction of my solar. The team is very efficient and knowledgeable. They installed my system in just two days. I am amazed by the sound knowledge of the team. I highly recommend SolarSquare to everyone.",
    author: "Gandharv Chauhan, Rajasthan, Home solar system",
  },
  {
    text: "I am happy to acknowledge that SolarSquare has met the strictest Quality & Safety norms dictated by the Global Standards of Johnson & Johnson.",
    author: "Anish Sengupta, EHS & S, Johnson & Johnson",
  },
  {
    text: "SolarSquare provided excellent service. The installation process was smooth, and their team was very professional.",
    author: "Neha Sharma, Mumbai",
  },
  {
    text: "Great experience with SolarSquare. The solar panel system is working efficiently, and I am very happy with the service.",
    author: "Ravi Kumar, Bangalore",
  },
  {
    text: "The best solar solution provider! Highly recommended for their amazing support and quality work.",
    author: "Amit Patel, Gujarat",
  },
  {
    text: "SolarSquare made going solar so easy. The installation was quick, and I am already seeing great savings on my electricity bills!",
    author: "Priya Verma, Delhi",
  }
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center py-10 px-4 md:px-10 gap-10">
      {/* Video Section */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          90% of customers recommend us!
        </h2>
        <p className="text-center text-lg mb-6">
          Don't just believe us – read the reviews for yourself.
        </p>
        <div className="w-full">
          <iframe
            className="w-full h-64 md:h-96 rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Customer Testimonial"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="relative w-full md:w-1/2 p-6">
        {/* Navigation Arrows */}
        <button
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 text-2xl"
          onClick={() => setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)}
        >
          ▲
        </button>
        <button
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-10 text-2xl"
          onClick={() => setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
        >
          ▼
        </button>

        {/* Testimonial Cards */}
        <div className="flex flex-col items-center gap-4 overflow-hidden">
          <div
            className="bg-blue-900 text-white p-6 rounded-lg shadow-lg text-lg text-center w-full transition-all duration-700 ease-in-out transform scale-105"
          >
            <p className="mb-4">{testimonials[index].text}</p>
            <p className="font-semibold">- {testimonials[index].author}</p>
          </div>
          <div
            className="bg-gray-200 p-6 rounded-lg shadow-lg text-lg text-center w-full transition-all duration-700 ease-in-out"
          >
            <p className="mb-4">{testimonials[(index + 1) % testimonials.length].text}</p>
            <p className="font-semibold">- {testimonials[(index + 1) % testimonials.length].author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
