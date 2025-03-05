import React from "react";

const WhoWeAre = () => {
  return (
    <div className="h-auto flex flex-col items-center text-center px-6 py-12">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-8">Who are we?</h2>

      {/* Single Image Centered */}
      <img
        src="https://sse-website.s3.ap-south-1.amazonaws.com/homes/who-are-we-mobile.png" 
        alt="Our Team"
        className="w-96 rounded-lg shadow-lg mb-8"
      />

      {/* Single Line Description */}
      <p className="text-lg max-w-2xl text-gray-700 mb-8">
        We are a group of 700+ engineers, MBAs, scientists, and creative thinkers driven by the single vision of accelerating the adoption of solar in homes.
      </p>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {[
          { number: "4.8", text: "rating on Google with 5000+ reviews" },
          { number: "10+", text: "years of experience" },
          { number: "18,000+", text: "homes solarised" },
          { number: "₹90+ Cr", text: "Savings for families across India (2020 – 2024)" },
        ].map((stat, index) => (
          <div
            key={index}
            className="w-64 bg-gray-100 text-black rounded-lg p-6 text-center shadow-md"
          >
            <p className="text-3xl font-bold text-blue-900">{stat.number}</p>
            <p className="text-lg">{stat.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeAre;
