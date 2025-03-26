import React, { useState } from "react";

const SolarSolutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const solutions = [
    { image: "https://www.yorkshireroofing.com/wp-content/uploads/2019/07/solar-example.jpg", label: "Homes" },
    { image: "https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "Housing Society" },
    { image: "https://plus.unsplash.com/premium_photo-1682148196781-8bbcdfd7f537?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", label: "Commercial" }
  ];

  return (
    <div className="bg-blue-900 py-10 px-4 md:px-10">
      <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
        Our solar solutions
      </h2>
      
      <div className="hidden md:flex justify-center gap-4 w-full">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ease-in-out ${hoveredIndex === index ? 'w-[35%]' : 'w-[32%]'}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={solution.image} alt={solution.label} className="w-full h-auto object-cover rounded-lg transition-transform duration-500 transform hover:scale-105" />
            <p className="text-white text-center mt-2 font-semibold">{solution.label}</p>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex flex-col items-center gap-4">
        {solutions.map((solution, index) => (
          <div key={index} className="w-10/12 rounded-lg overflow-hidden">
            <img src={solution.image} alt={solution.label} className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105" />
            <p className="text-white text-center mt-2 font-semibold">{solution.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarSolutions;