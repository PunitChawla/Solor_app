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
        <p className="text-sm md:text-1xl font-semibold max-w-4xl leading-relaxed text-gray-900">
          
SolarSquare installed rooftop solar in our society in 2020 and have been doing regular maintenance visits for the last 3 years. We wanted only the best technology and best installer in India for our society’s solar project. We are glad we went ahead with SolarSquare. They genuinely care about doing safe, high-quality installations and ensure the high-performance of your solar system through maintenance.

Our monthly electricity bill has gone down from Rs 80,000+ to almost zero now
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
              src="	https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Satish+Mallya.png"
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
          src="https://www.solarsquare.in/images/housing-society/moving-van.png"
          alt="City Illustration"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TestimonialSection;
