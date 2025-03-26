import React from "react";
import Marquee from "react-fast-marquee";

const logos = [
  "/assets/136.png",
  "/assets/132.png",
  "/assets/133.png",
  "/assets/134.png",
  "/assets/135.png",
];

const TrustedBy = () => {
  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-3xl font-bold mb-6">Trusted By</h2>
      <div className="overflow-hidden w-full">
        <Marquee speed={100} gradient={false}>
          {logos.map((logo, index) => (
            <div key={index} className="mx-20 flex items-center">
              <img src={logo} alt="Trusted Brand" className="h-40 md:h-28" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedBy;
