import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const newsData = [
  {
    id: 1,
    image: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/ur-story.png", // Replace with actual paths
    title: "How doctor electric  has a chance to become a home energy brand in India",
    source: "Forbes",
    date: "Dec 12, 2024",
    link: "#",
  },
  {
    id: 2,
    image: "https://sse-website.s3.ap-south-1.amazonaws.com/home-page/in_the_news_4.webp",
    title: "doctor electric  raises $40 million in one of India’s largest solar VC deals",
    source: "Business Today",
    date: "Dec 12, 2024",
    link: "#",
  },
  {
    id: 2,
    image: "https://sse-website.s3.ap-south-1.amazonaws.com/homes/forbes-img.png",
    title: "doctor electric  raises $40 million in one of India’s largest solar VC deals",
    source: "Business Today",
    date: "Dec 12, 2024",
    link: "#",
  },
  {
    id: 2,
    image: "https://sse-website.s3.ap-south-1.amazonaws.com/home-page/in_the_news_5.webp",
    title: "doctor electric  raises $40 million in one of India’s largest solar VC deals",
    source: "Business Today",
    date: "Dec 12, 2024",
    link: "#",
  },
  {
    id: 3,
    image: "https://sse-website.s3.ap-south-1.amazonaws.com/home-page/in_the_news_4.webp",
    title: "doctor electric  raises $40 million in Series B funding round",
    source: "The Hindu",
    date: "Dec 12, 2024",
    link: "#",
  },
];

const NewsSlider = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">In the News</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={news.image} alt={news.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <p className="text-sm text-gray-500">{news.date} - {news.source}</p>
                <h3 className="text-lg font-semibold text-gray-800 mt-2">{news.title}</h3>
                <a href={news.link} className="text-blue-600 font-medium mt-3 inline-block">Read More</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsSlider;
