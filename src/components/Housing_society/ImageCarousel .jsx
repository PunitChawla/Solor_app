import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectData = [
  {
    img: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-4+.png",
    title: "Maurishka Palace, Mangalore",
    subtitle: "140 kW rooftop solar, September 2020",
  },
  {
    img: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-2.png",
    title: "Project 2 Title",
    subtitle: "100 kW rooftop solar, June 2021",
  },
  {
    img: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-5.png",
    title: "Project 3 Title",
    subtitle: "150 kW rooftop solar, July 2023",
  },
  {
    img: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-3.png",
    title: "Project 4 Title",
    subtitle: "120 kW rooftop solar, March 2022",
  },
  {
    img: "https://sse-website.s3.ap-south-1.amazonaws.com/housing-society/hs-5.png",
    title: "Project 5 Title",
    subtitle: "150 kW rooftop solar, July 2023",
  },
];

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="w-full bg-[#00AEEF] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {projectData.map((project, index) => (
            <div key={index} className="px-4">
              <div
                className={`relative rounded-xl shadow-lg overflow-hidden transition-all duration-500 flex justify-center ${
                  index === currentSlide ? "scale-110" : "scale-90 opacity-75"
                }`}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-80 object-cover rounded-xl"
                />
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <h2 className="text-3xl font-bold text-white">{projectData[currentSlide].title}</h2>
          <p className="text-lg text-white">{projectData[currentSlide].subtitle}</p>
        </div>
      </div>
    </div>
  );
};

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg cursor-pointer hover:bg-white transition"
    onClick={onClick}
  >
    ➜
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg cursor-pointer hover:bg-white transition"
    onClick={onClick}
  >
    ➜
  </div>
);

export default ImageCarousel;
