import React from "react";

const SavingsGuarantee = () => {
  return (
    <div className="w-full px-6 py-12 text-center lg:text-left">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-5xl mx-auto">
        Guaranteed performance, guaranteed savings. No surprises.
        <br />
        Introducing 5-year savings guarantee from doctor electric 
      </h2>

      {/* Image Section */}
      <div className="relative mt-10 flex justify-center">
        <img
          src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/Gauranteed+performance.png"
          alt="doctor electric  Guarantee"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />

        {/* Overlays (Hidden on mobile, visible on desktop) */}
        <div className="hidden lg:block">
          {/* Overlay Div 1 */}
          <div className="absolute top-10 left-10 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-4 rounded-lg shadow-lg max-w-xs text-sm md:text-lg">
            We compensate for any power generation shortfall you experience at the current grid rates
          </div>

          {/* Overlay Div 2 */}
          <div className="absolute bottom-10 right-10 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-4 rounded-lg shadow-lg max-w-xs text-sm md:text-lg">
            This isn’t just a spoken commitment – your investment is protected by a bank guarantee document
          </div>
        </div>
      </div>

      {/* Mobile Overlays (Only visible on mobile) */}
      <div className="lg:hidden flex flex-col items-center gap-4 mt-4">
        <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white p-4 rounded-lg shadow-lg max-w-xs text-sm md:text-lg">
          We compensate for any power generation shortfall you experience at the current grid rates
        </div>

        <div className="bg-gradient-to-b from-blue-900 to-blue-700 text-white p-4 rounded-lg shadow-lg max-w-xs text-sm md:text-lg">
          This isn’t just a spoken commitment – your investment is protected by a bank guarantee document
        </div>
      </div>
    </div>
  );
};

export default SavingsGuarantee;
