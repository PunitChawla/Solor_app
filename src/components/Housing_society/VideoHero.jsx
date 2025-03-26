import React from "react";

const VideoHero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/video.mp4" type="video/mp4" />
      </video>
      
      {/* Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center pl-10 bg-black bg-opacity-40">
        <div className="max-w-lg text-white">
          <h1 className="text-5xl font-bold leading-tight ">
            Over 100+ housing societies have switched to solar with Doctor electric .
          </h1>
          <p className="text-lg mt-4">What do they know that you don't?</p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-700 transition">
            Book a free consultation with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;
