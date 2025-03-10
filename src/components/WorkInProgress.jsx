import React from "react";

const WorkInProgress = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-center px-4">
      {/* Animated Loader */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mt-6">
        🚧 Under Construction 🚧
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-lg">
        This page is currently a **work in progress**. We're working hard to bring it to you soon!  
        Check back later for updates. ⏳
      </p>

      {/* Go Back Button */}
      <button
        className="mt-8 px-6 py-3 text-lg bg-blue-600 hover:bg-blue-500 transition rounded-lg shadow-lg"
        onClick={() => window.history.back()}
      >
        Go Back 🔙
      </button>
    </div>
  );
};

export default WorkInProgress;
