import React from "react";

const StatsComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 p-8">
      {/* Left Section - Overlapping Images */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        {/* Background Image with Border */}
        <div className="border-4 border-blue-500 rounded-lg overflow-hidden w-[200px] h-[300px] lg:w-[350px] lg:h-[450px]">
          <img
            src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Housing+sec+3.png"
            alt="Housing Society"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlapping Image */}
        <div className="absolute bottom-[-50px] left-0 right-0 mx-auto w-[250px] lg:w-[500px]  ">
          <img
            src="/assets/van2.png"
            alt="Van"
            className="w-full drop-shadow-lg"
          />
        </div>
      </div>

      {/* Right Section - Stats in 2x2 Grid */}
      <div className="w-full lg:w-1/2 mt-24 lg:mt-0 lg:ml-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-section-3-1.svg"
            alt="Housing"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-bold">170+</p>
            <p className="text-gray-600">Housing Societies Powered</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-section-3-4.svg"
            alt="Power"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-bold">130+ MWp</p>
            <p className="text-gray-600">Installation Experience</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-section-3-2.svg"
            alt="Savings"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-bold">₹30+ Cr</p>
            <p className="text-gray-600">Savings for Families (2020-2024)</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <img
            src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-section-3-3.svg"
            alt="Experience"
            className="w-12 h-12"
          />
          <div>
            <p className="text-2xl font-bold">5+ years</p>
            <p className="text-gray-600">Experience in the Industry</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;
