import React from "react";

const OurImpact = () => {
  return (
    <div className="text-center py-10 px-4">
      {/* Description */}
      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
        We are a group of 700+ engineers, MBAs, scientists, creative thinkers 
        driven by the single vision of accelerating adoption of solar in homes.
      </p>

      {/* Stats Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-100 rounded-lg p-5 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">400+</h2>
          <p className="text-gray-700">team members</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 rounded-lg p-5 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">10+</h2>
          <p className="text-gray-700">years of experience</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 rounded-lg p-5 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">100 MWp+</h2>
          <p className="text-gray-700">Installation experience</p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 rounded-lg p-5 shadow-md">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900">869+</h2>
          <p className="text-gray-700">solarpro partners across 9 Indian states</p>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
