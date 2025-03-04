import { useState } from "react";
import emailjs from "@emailjs/browser";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    electricityBill: "",
    pinCode: "",
    city: "",
    email: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your Email.js service ID
        "YOUR_TEMPLATE_ID", // Replace with your Email.js template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with your Email.js public key
      )
      .then(
        () => {
          setMessage("Your request has been sent successfully!");
          setFormData({
            fullName: "",
            whatsapp: "",
            electricityBill: "",
            pinCode: "",
            city: "",
            email: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setMessage("Error sending the request. Please try again.");
        }
      );
  };

  return (
    <div className="bg-blue-900 text-white py-10 px-6 flex flex-wrap items-center justify-center">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-3xl font-bold">
          Schedule a <span className="text-cyan-400">FREE consultation</span>{" "}
          with us today!
        </h2>
        <p className="mt-2 text-gray-200">
          Get genuine advice from our solar experts. No pressure, book only if
          you are satisfied!
        </p>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 p-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-black p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block font-semibold">Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">WhatsApp Number *</label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block font-semibold">
              Monthly Electricity Bill *
            </label>
            <div className="flex flex-wrap gap-2 mt-2">
              {["< ₹1500", "₹1500 - ₹2500", "₹2500 - ₹4000", "₹4000 - ₹8000", "> ₹8000"].map(
                (option) => (
                  <button
                    key={option}
                    type="button"
                    className={`px-3 py-2 border rounded ${
                      formData.electricityBill === option
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, electricityBill: option })
                    }
                  >
                    {option}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="mb-4 flex gap-4">
            <div className="w-1/2">
              <label className="block font-semibold">Pin Code *</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-1/2">
              <label className="block font-semibold">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" required />
              I agree to SolarSquare's{" "}
              <a href="#" className="text-blue-500 underline">
                terms of service
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500 underline">
                privacy policy
              </a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white p-3 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition"
          >
            Yes! Reduce my electricity bill
          </button>

          {message && (
            <p className="mt-3 text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
