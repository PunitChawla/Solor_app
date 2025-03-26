import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      {/* Upper Div - Larger Size */}
      <div className="w-full flex flex-col items-center justify-center text-center py-20 relative px-6">
        {/* Left Quote Icon */}
        <img
          src="https://www.solarsquare.in/images/housing-society/air-quotes.png"
          alt="Left Quote"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10"
          />

        {/* Testimonial Text */}
        <p className="text-1xl md:text-3xl font-semibold max-w-4xl leading-relaxed text-gray-900">
          The solar installation by doctor electric  is one of those rare projects, where I have not had to get involved during the execution phase.
        </p>

        {/* Right Quote Icon (Reversed) */}
        <img
          src="https://www.solarsquare.in/images/housing-society/air-quotes.png"
          alt="Right Quote"
          className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 rotate-180"
        />

        {/* Profile Section */}
        <div className="mt-8 flex flex-col items-center">
          <div className="relative">
            <img
              src="https://www.solarsquare.in/images/commercial/n-krishnamoorthy.png"
              alt="Testimonial Profile"
              className="w-20 h-20 rounded-full border-4 border-blue-500"
            />
          </div>
          <p className="text-blue-600 font-bold mt-3 text-lg">N Krishnamoorthy,</p>
          <p className="text-gray-600 text-md">Director, TVS & Sons</p>
        </div>
      </div>

      {/* Lower Div - Full Width Image */}
      <div className="w-full">
        <img
          src="/assets/van.png"
          alt="City Illustration"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
