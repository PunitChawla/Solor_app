import React from "react";

const FixedBackgroundSection = () => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center">
      {/* Background Image (Fixed) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url('https://sse-website.s3.ap-south-1.amazonaws.com/commercial/parralx+back+dektop.png')`,
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Scrolling Content (Full Width & Centered) */}
      <div className="relative z-10 w-full bg-blue-400 p-10 md:p-16 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Van Image */}
          <img
            src="/assets/cutvan.png"
            alt="Van"
            className="w-56 md:w-72 lg:w-80 drop-shadow-lg"
          />

          {/* Statistics Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white w-full">
            <div>
              <img src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-section-3-1.svg" alt="Commercial Projects" className="mx-auto w-12" />
              <h2 className="text-2xl font-bold">200+</h2>
              <p className="text-base">Commercial Projects</p>
            </div>
            <div>
              <img src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-section-3-3.svg" alt="Years Experience" className="mx-auto w-12" />
              <h2 className="text-2xl font-bold">5+</h2>
              <p className="text-base">Years Experience</p>
            </div>
            <div>
              <img src="https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-section-3-4.svg" alt="MWp Installed" className="mx-auto w-12" />
              <h2 className="text-2xl font-bold">130+ MWp</h2>
              <p className="text-base">Installation Experience</p>
            </div>
            <div>
              <img src="https://www.solarsquare.in/images/cm-stats-2.svg" alt="Savings" className="mx-auto w-12" />
              <h2 className="text-2xl font-bold">30+ Cr</h2>
              <p className="text-base">Saving Annually</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedBackgroundSection;
