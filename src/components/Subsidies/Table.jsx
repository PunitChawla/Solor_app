import React from "react";

const SubsidyTable = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-6">
        Solar Subsidy and Financial Schemes by the Uttar Pradesh Government
      </h2>

      {/* Table Container */}
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-3">प्लांट की क्षमता</th>
              <th className="p-3">केंद्र सरकार अनुदान</th>
              <th className="p-3">प्रदेश सरकार अनुदान</th>
              <th className="p-3">EMI (न्यूनतम ब्याज)</th>
              <th className="p-3">छत की आवश्यकता</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-center">
            {[
              ["2KW (70% सब्सिडी)", "₹60,000", "₹30,000", "₹1,000 (04 वर्ष तक)", "200 sqft"],
              ["3KW (60% सब्सिडी)", "₹78,000", "₹30,000", "₹1,800 (04 वर्ष तक)", "300 sqft"],
              ["4KW (45% सब्सिडी)", "₹78,000", "₹30,000", "₹3,300 (04 वर्ष तक)", "400 sqft"],
              ["5KW (40% सब्सिडी)", "₹78,000", "₹30,000", "₹4,200 (04 वर्ष तक)", "500 sqft"],
            ].map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                {row.map((cell, i) => (
                  <td key={i} className="p-3 border">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubsidyTable;
