import React from "react";
const locations = [
    { title: "Gujarat", cities: "Surat, Ahmedabad", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/Gujarat.png" },
    { title: "Maharashtra", cities: "Mumbai, Pune, Nasik, Nagpur, Chhatrapati Sambhajinagar", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/Maharashtra.png" },
    { title: "Madhya Pradesh", cities: "Bhopal, Indore, Gwalior, Jabalpur", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/MP.png" },
    { title: "Rajasthan", cities: "Jaipur, Ajmer", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/Rajasthan.png" },
    { title: "Uttar Pradesh", cities: "Lucknow, Kanpur", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/UP.png" },
    { title: "Others", cities: "Delhi NCR, Hyderabad, Bengaluru", icon: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/UP.png" },
  ];
  
const Map = () => {
  return (
    <div className="text-center py-10">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">
      SolarPro program's presence across India
      </h1>

      {/* Image */}
      <img
        src="https://www.solarsquare.in/images/india_map.svg" // Replace with your actual image path
        alt="map"
        className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
      />
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

export default Map;
