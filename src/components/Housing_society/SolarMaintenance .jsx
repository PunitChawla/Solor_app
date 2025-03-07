import React from "react";

const SolarMaintenance = () => {
  return (
    <div className="w-full bg-gray-100 py-16 px-6">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-900 max-w-5xl mx-auto leading-snug">
        Leakage-proof mounts, top-notch safety, and regular professional maintenance… 
        because we are obsessed with quality
      </h1>

      {/* First Section */}
      <div className="flex flex-col lg:flex-row items-center max-w-8xl mx-auto gap-10 mt-12">
        {/* Image on the Left */}
        <img
          src="	https://sse-website.s3.ap-south-1.amazonaws.com/know-more/Precision+2.png"
          alt="Leakage-proof Solar Installation"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        {/* Text on the Right */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Don’t worry about water leakage with SolarSquare. Ever.
          </h2>
          <p className="text-gray-700 mt-4">
            Our installations are secured to your roof with superior chemical
            anchoring technique, preventing any chance of water leakage.
          </p>
          <p className="text-gray-700 mt-2">
            Still worried? You get up to ₹1 lakh coverage in case you suffer
            leakage due to our solar installation.
          </p>
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center max-w-8xl mx-auto gap-10 mt-16">
        {/* Image on the Right */}
        <img
          src="https://sse-website.s3.ap-south-1.amazonaws.com/know-more/precision+1.png"
          alt="Solar Maintenance Service"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        {/* Text on the Left */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Get 5 years of professional maintenance and panel deep cleaning
          </h2>
          <p className="text-gray-700 mt-4">
            Every solar system purchase includes a **5-year maintenance package** to ensure top-notch performance.
          </p>
          <ul className="text-gray-700 mt-4 space-y-2">
            <li>🔹 **Dust-free panels** – Monthly cleaning service for 5 years</li>
            <li>🔹 **Preventive maintenance** – Quarterly health checks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolarMaintenance;
