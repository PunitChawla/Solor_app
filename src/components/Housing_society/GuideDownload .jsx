import React from "react";
import { Link } from "react-router-dom";

const GuideDownload = () => {
  return (
    <div className="h-screen bg-[#06CAF6] flex flex-col lg:flex-row items-center justify-center px-6 py-12 text-center lg:text-left">
      {/* Left Section */}
      <div className="lg:w-[55%] flex flex-col items-center lg:items-start text-[#0A0B6A]">
        <h2 className="text-2xl md:text-5xl font-bold leading-tight">
          A Guide To Going Solar <br /> For Housing Societies
        </h2>
        <p className="text-lg mt-4 max-w-2xl text-black">
          Learn everything you need to know before installing a rooftop solar
          system in your society.
        </p>

        {/* Key Points */}
        <ul className="mt-6 space-y-2 text-lg text-left text-black max-w-2xl">
          {[
            "How much can you save by going solar",
            "What's the right solar size for your society",
            "What technologies should you choose",
            "Common myths about rooftop solar",
          ].map((point, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span className="text-xl text-[#0A0B6A]">🔹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <Link
          to="/guidedownload"
          className="mt-6 inline-block bg-gradient-to-r from-[#5707A6] to-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          Download for free
        </Link>
      </div>

      {/* Right Section (Image) */}
      <div className="lg:w-[45%] flex justify-center mt-10 lg:mt-0">
        <img
          src="/assets/book.png"
          alt="Guide Book"
          className="w-4/5 lg:w-[75%] "
        />
      </div>
    </div>
  );
};

export default GuideDownload;
