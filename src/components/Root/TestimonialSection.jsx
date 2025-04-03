import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "I got a 5kW solar system installed at my home in Varanasi by Doctor Electric. The entire process was smooth, and the team was very professional. They completed the installation within the promised time, and now my electricity bills have significantly reduced. Highly recommend their services!",
    author: " Ankit Sharma (⭐⭐⭐⭐⭐)",
  },
  {
    text: "Doctor Electric installed a 7kW solar system on my commercial property in Lanka, Varanasi. The team explained everything in detail, and the installation was done without any hassle. I’m already seeing great savings on my electricity bills. Great service!",
    author: " Ramesh Tiwari (⭐⭐⭐⭐⭐)",
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
    author: " Meera Jaiswal (⭐⭐⭐⭐⭐)",
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
    text: "The best decision I made was choosing Doctor Electric for my solar panel installation in Varanasi. They finished the work in just 2 days, and the system is working flawlessly. Highly recommended!",
    author: "Neha Rastogi (⭐⭐⭐⭐⭐)",
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
             src="https://www.youtube.com/embed/0SvJDRJ62UM?si=gdV-Fdaplae-WB1v"
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
