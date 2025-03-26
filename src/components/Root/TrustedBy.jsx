import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "/assets/131.jpg",
  "/assets/132.jpg",
  "/assets/133.jpg",
  "/assets/134.jpg",
  "/assets/135.jpg",
];

const TrustedBy = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Trusted By</h2>
      <div className="overflow-hidden w-full">
        <Marquee speed={50} gradient={false}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-10 flex items-center">
              <img src={logo} alt="Trusted Brand" className="h-16 md:h-20" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedBy;
