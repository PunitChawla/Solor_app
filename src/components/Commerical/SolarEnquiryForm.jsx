import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SolarEnquiryForm = () => {
  const formRef = useRef();
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checked) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }

    emailjs
      .sendForm(
        "your_service_id", // Replace with your EmailJS service ID
        "your_template_id", // Replace with your EmailJS template ID
        formRef.current,
        "your_public_key" // Replace with your EmailJS public key
      )
      .then(
        () => alert("Form submitted successfully!"),
        (error) => alert("Error submitting form: " + error.text)
      );
  };

  return (
    <div className="bg-[#00008b]  min-h-screen flex items-center justify-center px-6 py-16">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="text-white text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Submit a <span className="text-blue-400">Solar Project</span> Enquiry
          </h2>
          <p className="mt-4 text-base md:text-lg">
            Our solar experts will guide you in your solar journey.
          </p>
        </div>

        {/* Right Section (Smaller Form) */}
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full md:w-[55%]">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name *</label>
              <input
                type="text"
                name="name"
                required
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Company Name *</label>
              <input
                type="text"
                name="companyName"
                required
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">WhatsApp Number *</label>
              <input
                type="tel"
                name="whatsapp"
                required
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">City *</label>
              <input
                type="text"
                name="city"
                required
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>

            {/* Company Pin Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Company Pin Code</label>
              <input
                type="text"
                name="pinCode"
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>

            {/* Average Monthly Bill */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">Average Monthly Bill *</label>
              <input
                type="text"
                name="monthlyBill"
                required
                className="border border-gray-300 rounded-md p-2 w-full mt-1"
              />
            </div>

            {/* Agreement Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="w-4 h-4"
              />
              I agree to doctor electric 's{" "}
              <a href="#" className="text-blue-500 underline">
                terms of service
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500 underline">
                privacy policy
              </a>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white text-sm font-semibold py-2 rounded-md w-full hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SolarEnquiryForm;
