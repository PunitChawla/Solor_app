import React from "react";

const SolarProBanner = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('https://sse-website.s3.ap-south-1.amazonaws.com/home-page/Hero-Image.jpg')",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl w-full px-4 sm:px-6 md:px-12 text-white">
        <h1 className="text-3xl md:text-5xl font-bold">
          Multiply your wealth
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Join the SolarPro partnership program, our top partners make over Rs.
          2 lakh monthly.
        </p>
      </div>
    </div>
  );
};

export default SolarProBanner;
