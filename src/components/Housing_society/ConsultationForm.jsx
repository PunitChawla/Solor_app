import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    housingSociety: "",
    name: "",
    pinCode: "",
    city: "",
    whatsapp: "",
    electricityBill: "Billing amount",
    designation: "",
    agmApproval: "We already have AGM approval",
    agreeTerms: false,
  });

  const [selectedDesignation, setSelectedDesignation] = useState(null);

  const designations = [
    "Management committee member",
    "Resident",
    "Builder",
    "Facility Manager",
  ];
  const electricityOptions = [
    "Billing amount",
    "0 - 50,000",
    "50,000 - 2,00,000",
    "> 2,00,000",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDesignationClick = (designation) => {
    setFormData({ ...formData, designation });
    setSelectedDesignation(designation);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreeTerms) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    emailjs
      .send(
        "service_iesp3p5",
        "template_sdshsc9",
        formData,
        "3y4Z1YVydTBC0Y5hT"
      )
      .then(
        (response) => {
          alert("Form submitted successfully!");
          console.log("SUCCESS!", response.status, response.text);
        },
        (error) => {
          alert("Form submission failed. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-blue-900 min-h-screen p-8">
      {/* Left Side - Text */}
      <div className="text-white text-center lg:text-left max-w-lg lg:w-1/2">
        <h2 className="text-3xl font-bold">
          Schedule a <span className="text-blue-400">FREE consultation</span>{" "}
          with us today!
        </h2>
        <p className="mt-3 text-lg">
          Get genuine advice from our solar experts. No pressure, book only if
          you are satisfied!
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/2 mt-6 lg:mt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="housingSociety"
            placeholder="Name of Housing Society *"
            value={formData.housingSociety}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
          <input
            type="text"
            name="name"
            placeholder="Name *"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              name="pinCode"
              placeholder="Pin Code *"
              value={formData.pinCode}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-md"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-md"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              name="whatsapp"
              placeholder="WhatsApp Number *"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="w-1/2 p-3 border rounded-md"
            />
            <select
              name="electricityBill"
              value={formData.electricityBill}
              onChange={handleChange}
              className="w-1/2 p-3 border rounded-md"
            >
              {electricityOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Designation */}
          <div>
            <p className="text-gray-700 font-medium mb-2">Designation *</p>
            <div className="flex flex-wrap gap-2">
              {designations.map((designation, index) => (
                <button
                  key={index}
                  type="button"
                  className={`px-4 py-2 border rounded-md ${
                    selectedDesignation === designation
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handleDesignationClick(designation)}
                >
                  {designation}
                </button>
              ))}
            </div>
          </div>

          {/* AGM Approval */}
          <select
            name="agmApproval"
            value={formData.agmApproval}
            onChange={handleChange}
            className="w-full p-3 border rounded-md"
          >
            <option value="We already have AGM approval">
              We already have AGM approval
            </option>
            <option value="We are in process of getting AGM approval">
              We are in process of getting AGM approval
            </option>
            <option value="We do not have AGM approval">
              We do not have AGM approval
            </option>
          </select>

          {/* Terms & Submit */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label className="text-gray-700 text-sm">
              I agree to SolarSquare's{" "}
              <a href="#" className="text-blue-500">
                terms of service
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500">
                privacy policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
