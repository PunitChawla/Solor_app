import React from "react";
import { Link } from "react-router-dom";

const GuideDownload = () => {
  return (
    <div className="h-screen bg-cyan-500 flex flex-col lg:flex-row items-center justify-center px-6 py-12 text-center lg:text-left">
      {/* Left Section */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          Homeowners Guide To Buying Rooftop Solar
        </h2>
        <p className="text-lg mt-4 max-w-xl">
          Learn everything you need to know before installing a rooftop solar system in your home.
        </p>

        {/* Key Points */}
        <ul className="mt-6 space-y-2 text-lg text-left">
          {[
            "Best rooftop system for your home",
            "Savings to expect with solar",
            "Indian states with the best solar output",
            "Easy financing to make the switch",
            "Govt subsidy and assistance",
            "From buying, installing to maintenance - how it works",
          ].map((point, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-xl">🔹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link to="/guidedownload" className="mt-6 inline-block bg-gradient-to-r from-purple-600 to-black text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
          Download for free
        </Link>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
        <img
          src="https://sse-website.s3.ap-south-1.amazonaws.com/homes/mobile/mockup-handbook-mobile.png"
          alt="Guide Book"
          className="w-3/4 lg:w-2/3 drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default GuideDownload;
