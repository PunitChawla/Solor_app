import React from "react";

const locations = [
  { title: " Varanasi", cities: "", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/Gujarat.png" },
  { title: "Chandauli", cities: "", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/Maharashtra.png" },
  { title: "Prayagraj", cities: "", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/MP.png" },
  { title: "Bhadohi", cities: "", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/Rajasthan.png" },
  { title: "Jaunpur", cities: "", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/UP.png" },
  { title: "Many more ", cities: "", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/UP.png" },
];

const AnimatedLocations = () => {
  return (
    <div
      className=" relative h-auto min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-6 py-12"
      style={{
        backgroundImage: "url('https://sse-website.s3.ap-south-1.amazonaws.com/homes/india-map-bg.svg')",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
        Explore Our <span className="text-cyan-500">Solar Locations</span>
      </h2>
      <p className="text-gray-600 text-lg mt-2 text-center max-w-2xl">
        We are powering multiple cities with solar energy!
      </p>

      {/* Responsive Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:grid-cols-6 lg:gap-8">
        {locations.map((location, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <img src={location.icon} alt={location.title} className="w-14 h-14 mb-3" />
            <h3 className="font-bold text-lg">{location.title}</h3>
            <p className="text-gray-600 text-sm">{location.cities}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedLocations;
