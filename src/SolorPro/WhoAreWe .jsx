import React from "react";

const WhoAreWe = () => {
  return (
    <div className="text-center py-10">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
        Who are we?
      </h1>

      {/* Image */}
      <img
        src="https://sse-website.s3.ap-south-1.amazonaws.com/homes/team-collage.png" // Replace with your actual image path
        alt="Who we are"
        className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default WhoAreWe;
