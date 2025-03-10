import React from "react";

const benefits = [
  {
    imgSrc: "https://sse-website.s3.ap-south-1.amazonaws.com/common/sg-5-year.svg", // Update with actual path
    title: "India’s trusted solar brand",
    description: "8000+ happy customers, 4.8 rating on Google, and the most durable system in the market",
  },
  {
    imgSrc: "	https://sse-website.s3.ap-south-1.amazonaws.com/common/emi-0-percent.svg", // Update with actual path
    title: "Flexible financing for all budgets",
    description: "Our multiple EMI plans and financing options make solar affordable",
  },
  {
    imgSrc: "https://sse-website.s3.ap-south-1.amazonaws.com/common/cyclone-proof.svg", // Update with actual path
    title: "Quality assurance",
    description: "Our mounting structures are approved by the prestigious IIT Bombay",
  },
  {
    imgSrc: "	https://sse-website.s3.ap-south-1.amazonaws.com/common/water-leak-gurantee.svg", // Update with actual path
    title: "Simplified earnings",
    description: 'Talk to customers, track your leads and earnings on <a href="/portal" class="text-blue-600 underline">our portal</a> and grow your wealth – it’s that easy!',
  },
];

const WhyPartner = () => {
  return (
    <div className="text-center py-10 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">
        Why partner with SolarSquare?
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mt-20 mx-auto text-left">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Icon Image */}
            <img src={benefit.imgSrc} alt={benefit.title} className="w-12 h-12" />

            {/* Text Content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
              <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: benefit.description }}></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPartner;
