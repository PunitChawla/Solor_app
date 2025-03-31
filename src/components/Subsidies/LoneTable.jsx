import React from "react";

const LoanTable = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-10 px-4">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 text-center mb-6">
        EMI AVAILABLE
      </h2>
      <h3 className="text-xl md:text-2xl font-semibold text-center mb-4">
        बैंक से मिलेगा लोन
      </h3>

      {/* Table Container */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Table Head */}
          <thead>
            <tr className="bg-blue-600 text-white text-left">
              <th className="p-3">Details</th>
              <th className="p-3">2kW Installation</th>
              <th className="p-3">3kW Installation</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-center">
            {[
              ["Total Installation Cost", "₹130,000", "₹180,000"],
              ["Downpayment (10%)", "₹13,000", "₹18,000"],
              ["Subsidy", "₹92,880", "₹108,000"],
              ["Total Cost After Subsidy", "₹37,120", "₹72,000"],
              [
                "EMI (7% Interest Rate)",
                "Approx ₹1,300 per month for 18 months*",
                "Approx ₹1,881 per month for 32 months*",
              ],
            ].map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                {row.map((cell, i) => (
                  <td key={i} className="p-3 border">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
     
      </div>
     
    </div>
  );
};

export default LoanTable;