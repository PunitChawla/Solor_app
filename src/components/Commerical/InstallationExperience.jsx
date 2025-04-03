import React from "react";

const InstallationExperience = () => {
  return (
    <div className="w-full bg-white py-12 px-6 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center max-w-4xl text-gray-900">
        Hassle-free, professional and friendly installation experience – we are
        committed to making your solar journey easy
      </h2>

      {/* Image Container */}
      <div className="mt-8 flex flex-col md:flex-row gap-6 max-w-6xl w-full">
        {/* Card 1 */}
        <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src="/assets/install1.jpg"
            alt="Installation Crew"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-900 to-transparent p-4">
            <h3 className="text-white font-bold text-lg">
              Best price challenge
            </h3>
            <p className="text-white text-sm">
              We create premium solar systems using top-quality components, all
              at competitive prices, to guarantee a lifetime of high
              performance and savings.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative w-full md:w-1/2 rounded-lg overflow-hidden">
          <img
            src="/assets/install2.jpg"
            alt="Precision Designs"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-900 to-transparent p-4">
            <h3 className="text-white font-bold text-lg">
              Great solar starts with precision designs
            </h3>
            <p className="text-white text-sm">
              We survey your roof, take measurements, and conduct shadow
              analysis in our software to come up with precise 3D design for
              your rooftop solar. We consult with you and take approvals before
              installation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationExperience;
