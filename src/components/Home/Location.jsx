import React from "react";

const LocationsSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col md:flex-row"
      style={{ backgroundImage: "url('https://sse-website.s3.ap-south-1.amazonaws.com/homes/india-map-bg.svg')" }} // Replace with actual background image
    >
      {/* Left: Text Content */}
      <div className="md:w-1/2 flex items-center justify-center text-center md:text-left px-6">
        <div>
          <h2 className="text-5xl font-bold text-gray-900">
          doctor electric  <span className="text-cyan-500">Locations</span>
          </h2>
          <p className="text-gray-600 text-xl mt-4">
            We offer solar services in 18 Indian cities, and are expanding every day!
          </p>
        </div>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex items-center justify-center px-6">
        <img
          src="/assets/map.png" // Replace with actual image path
          alt="SolarSquare Locations"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default LocationsSection;
