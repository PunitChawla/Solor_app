import { useEffect, useRef } from "react";

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = timelineRef.current?.querySelectorAll(".timeline-item");
    elements?.forEach((el) => observer.observe(el));

    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Journey</h2>
      </div>

      {/* Image Section with Background (Hidden on Mobile) */}
      <div
        className="w-full bg-cover bg-center py-16 relative md:bg-[url('https://sse-website.s3.ap-south-1.amazonaws.com/about-us/journey-dotted-line+(1).pn')] md:bg-no-repeat md:bg-contain"
      >
        <div ref={timelineRef} className="relative w-full max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
            {/* Timeline Items */}
            {[
              { img: "journey-1+(1).png", text: "Founded in 2015" },
              { img: "journey-2+(1).png", text: "100+ Clients Solarized" },
              { img: "journey-3+(1).png", text: "18,000+ Happy Customers" },
              { img: "journey-4+(1).png", text: "170+ Housing Societies" },
              { img: "journey-5+(1).png", text: "105+ Commercial Businesses" },
            ].map((item, index) => (
              <div key={index} className="timeline-item text-center opacity-0 translate-y-10 transition-all duration-1000">
                <div className="w-20 h-20 flex items-center justify-center bg-white shadow-lg rounded-full mx-auto">
                  <img
                    src={`https://sse-website.s3.ap-south-1.amazonaws.com/about-us/${item.img}`}
                    alt={`Icon ${index + 1}`}
                    className="w-20 h-20"
                  />
                </div>
                <p className="text-gray-800 text-ssm mt-7">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
