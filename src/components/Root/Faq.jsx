

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = {
  General: [
    { question: "How much does a solar plant cost?", answer: "The cost varies based on size and location." },
    { question: "What is the break-even period for Solar rooftop projects?", answer: "Typically, it is 4-6 years." },
  ],
  "Solar Maintenance": [
    { question: "How often should I clean my solar panels?", answer: "Cleaning every 3-6 months is recommended." },
    { question: "Do solar panels require maintenance?", answer: "Yes, occasional cleaning and inspections are necessary." },
  ],
  "Solar Economics": [
    { question: "Are there subsidies for solar projects?", answer: "Yes, the government provides various subsidies." },
    { question: "What are the financing options?", answer: "There are loans, leases, and PPA options available." },
  ],
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openQuestions, setOpenQuestions] = useState({});
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  
  window.addEventListener("resize", () => setIsMobileView(window.innerWidth <= 768));

  const toggleQuestion = (index) => {
    setOpenQuestions((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="flex flex-col md:flex-row md:gap-10">
        {/* Left Side - FAQ */}
        <div className={`w-full md:w-3/5 ${isMobileView ? "order-2" : "order-1"}`}>
          {isMobileView ? (
            Object.keys(faqData).map((category) => (
              <div key={category} className="border-b">
                <button
                  onClick={() => setActiveCategory(activeCategory === category ? "" : category)}
                  className="w-full text-left py-4 px-4 flex justify-between items-center font-semibold"
                >
                  {category}
                  <span>{activeCategory === category ? "-" : "+"}</span>
                </button>
                <AnimatePresence>
                  {activeCategory === category && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4"
                    >
                      {faqData[category].map((faq, index) => (
                        <div key={index} className="border-t py-3">
                          <button
                            onClick={() => toggleQuestion(index)}
                            className="w-full text-left font-medium flex justify-between items-center"
                          >
                            {faq.question}
                            <span>{openQuestions[index] ? "-" : "+"}</span>
                          </button>
                          <AnimatePresence>
                            {openQuestions[index] && (
                              <motion.p
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="mt-2 text-gray-600"
                              >
                                {faq.answer}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))
          ) : (
            <>
              <div className="flex border-b mb-4">
                {Object.keys(faqData).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`py-2 px-4 font-semibold ${
                      activeCategory === category ? "bg-blue-600 text-white" : "bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div>
                {faqData[activeCategory].map((faq, index) => (
                  <div key={index} className="border-t py-3">
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full text-left font-medium flex justify-between items-center"
                    >
                      {faq.question}
                      <span>{openQuestions[index] ? "-" : "+"}</span>
                    </button>
                    <AnimatePresence>
                      {openQuestions[index] && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-2 text-gray-600"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {/* Right Side - Image */}
        <div className={`w-full md:w-2/5 flex justify-center ${isMobileView ? "order-1 mb-4" : "order-2"}`}>
          <img src="/assets/face.jpg" alt="Solar Expert" className="w-96 h-96 object-cover rounded-full" />
        </div>
      </div>
    </div>
  );
}
