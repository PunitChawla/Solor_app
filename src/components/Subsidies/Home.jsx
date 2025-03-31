import React from "react";

const Home = () => {
  return (
    <div className="relative mt-10 w-full h-screen flex flex-col items-center justify-center">
      {/* Upper Half with Blue Background */}
      <div className="relative bg-gradient-to-r from-blue-700 to-black  w-full h-1/2 rounded-b-2xl p-6 text-white text-center flex flex-col items-center justify-center">
        {/* Logos at the top */}
        <div className="flex justify-center gap-6">
          <img src="/assets/threelogo.png" alt="Logos" className="h-24" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-4">
          Government Subsidies for Solar Installations in India
        </h1>
      </div>

      {/* Overlapping Images (Hidden on Mobile) */}
      <div className="relative w-full flex justify-center -mt-16">
        <img
          src="/assets/10-Photoroom.png"
          alt="Solar House"
          className="w-1/4 absolute mt-8 left-10 hidden md:block"
        />
        <img
          src="/assets/modi.png"
          alt="PM Modi"
          className="w-1/5 absolute right-10 hidden md:block"
        />
      </div>
      {/* Description */}
      <div className="bg-gray-200 text-black p-6 mt-40 rounded-lg shadow-lg max-w-5xl text-center">
        <p className="text-xl font-medium md:mt-52 ">
          PM Surya Ghar Muft Bijli Yojana: This scheme provides a subsidy of 60%
          of the solar unit cost for systems up to 2 kW capacity and 40% for
          additional system cost for systems between 2 to 3 kW capacity, capped
          at 3 kW.
        </p>
      </div>
    </div>
  );
};

export default Home;
