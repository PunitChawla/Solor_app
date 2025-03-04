import React from "react";

const LocationsSection = () => {
  return (
    <div className="h-screen flex flex-col md:flex-row items-center justify-center px-6 py-10 bg-gray-100 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-10"></div>

      {/* Left: Text Content */}
      <div className="md:w-1/2 text-center md:text-left z-10">
        <h2 className="text-3xl font-bold text-gray-900">
          SolarSquare <span className="text-cyan-500">Locations</span>
        </h2>
        <p className="text-gray-600 mt-4">
          We offer solar services in 18 Indian cities, and are expanding every day!
        </p>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0 z-10">
        <img
          src="/locations-map.png" // Replace with actual image path
          alt="SolarSquare Locations"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LocationsSection;
