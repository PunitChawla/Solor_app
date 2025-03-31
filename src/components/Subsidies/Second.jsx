import React from "react";

const SecondComponent = () => {
  return (
    <div className="relative bg-gray-100 w-full h-[80vh] flex flex-col justify-center items-center text-center px-6">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/assets/bg1.jpg')" }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          PM Surya Ghar Muft Bijli Yojana
        </h2>

        {/* Subsidy Details */}
        <div className="flex flex-col gap-6 text-black font-medium text-lg">
          <p>
            1 किलोवाट, सोलर प्लांट पर{" "}
            <span className="text-red-600 font-bold">₹45 हजार</span> की सब्सिडी
          </p>
          <p>
            2 किलोवाट, सोलर प्लांट पर{" "}
            <span className="text-red-600 font-bold">₹90 हजार</span> की सब्सिडी
          </p>
          <p>
            3 किलोवाट व इससे अधिक के सोलर प्लांट पर{" "}
            <span className="text-red-600 font-bold">₹1 लाख 08 हजार</span> की
            सब्सिडी
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecondComponent;
