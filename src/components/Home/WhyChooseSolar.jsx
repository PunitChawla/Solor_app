import React from "react";
import { Link } from "react-router-dom";

const WhyChooseSolar = () => {
  const features = [
    {
      img: "https://sse-website.s3.ap-south-1.amazonaws.com/common/emi-0-percent.svg", // Replace with actual image path
      title: "0% EMI Financing Plans",
      description: "Switching to solar made easy & affordable with our EMI plans",
    },
    {
      img: "https://sse-website.s3.ap-south-1.amazonaws.com/common/emi-0-percent.svg", // Replace with actual image path
      title: "Cyclone-Proof, Safe Rooftop Solar",
      description: "Safe installations that can handle scary storms and winds up to 170 kmph speeds",
    },
    {
        img: "https://sse-website.s3.ap-south-1.amazonaws.com/common/water-leak-gurantee.svg", // Replace with actual image path
        title: "₹1 Lakh Guarantee Against Water Leakage",
        description: 'Systems secured to your roof with "chemical anchoring" to prevent water leakage on your roof',
    },
    {
        img: "https://sse-website.s3.ap-south-1.amazonaws.com/common/prof-maintenance.svg", // Replace with actual image path
      title: "5-Year Professional Maintenance Included",
      description: "Quarterly deep cleaning, health checks & repairs included",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 py-10">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Why choose <span className="text-cyan-500">SolarSquare</span> for your solar installation
      </h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-7xl">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4 p-8">
            <img src={feature.img} alt={feature.title} className="w-12 h-12" />
            <div className="text-left">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* "Know More" Button */}
      <Link to="/knowmore">
        <button className="mt-6 bg-cyan-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition">
          Know More
        </button>
      </Link>
    </div>
  );
};

export default WhyChooseSolar;
