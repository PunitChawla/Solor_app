import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ConsultationForm = () => {
  const [selectedForm, setSelectedForm] = useState("residential");
  const formRef = useRef(null);
  const [agreed, setAgreed] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    // Collect inputs depending on selectedForm
    const formElements = formRef.current.elements;

    let message = `Form Type: ${selectedForm}\n`;
    message += `Full Name: ${formElements.fullName?.value || "N/A"}\n`;

    if (selectedForm === "residential") {
      message += `Pin Code: ${formElements.pinCode?.value || "N/A"}\n`;
      message += `WhatsApp Number: ${
        formElements.whatsappNumber?.value || "N/A"
      }\n`;
    } else if (selectedForm === "housing") {
      message += `Housing Society: ${
        formElements.societyName?.value || "N/A"
      }\n`;
      message += `Pin Code: ${formElements.pinCode?.value || "N/A"}\n`;
      message += `WhatsApp Number: ${
        formElements.whatsappNumber?.value || "N/A"
      }\n`;
    } else if (selectedForm === "commercial") {
      message += `Company Name: ${formElements.companyName?.value || "N/A"}\n`;
      message += `City: ${formElements.city?.value || "N/A"}\n`;
      message += `Pin Code: ${formElements.pinCode?.value || "N/A"}\n`;
    }

    const emailData = {
      message: message,
      to_name: "Rukum Kesh rai",
      to_email: "yt.doctorelectric@gmail.com",
    };

    emailjs
      .send(
        "service_iesp3p5",
        "template_sdshsc9",
        emailData,
        "3y4Z1YVydTBC0Y5hT"
      )
      .then(() => {
        alert("Form submitted successfully!");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send form.");
      });
  };

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-gray-100 min-h-screen">
      {/* Left Side - Image Carousel with Heading */}
      <div className="w-full md:w-1/2 text-center md:text-left flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Schedule a <span className="text-blue-600">FREE consultation</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Fill out the form and our team will contact you shortly.
        </p>

        <div className="mt-6 w-full h-[450px] rounded-lg shadow-lg overflow-hidden">
          <Slider {...sliderSettings}>
            <img
              src="/assets/book mockups.png"
              alt="Solar Image 1"
              className="w-full h-[450px] object-cover"
            />
            <img
              src="/assets/teamvanity.jpg"
              alt="Solar Image 2"
              className="w-full h-[450px] object-cover"
            />
            <img
              src="/assets/project1.jpg"
              alt="Solar Image 3"
              className="w-full h-[450px] object-cover"
            />
          </Slider>
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className="w-full md:w-1/2 bg-white shadow-xl rounded-xl p-6 min-w-[400px]">
        {/* Form Tabs */}
        <div className="flex justify-between mb-6 bg-gray-200 p-2 rounded-lg">
          {["residential", "housing", "commercial"].map((formType) => (
            <button
              key={formType}
              className={`flex-1 py-2 rounded-lg text-lg font-semibold ${
                selectedForm === formType
                  ? "bg-blue-600 text-white"
                  : "text-gray-700"
              }`}
              onClick={() => {
                setSelectedForm(formType);
                setMessage("");
                setAgreed(false);
                if (formRef.current) formRef.current.reset();
              }}
              type="button"
            >
              {formType.charAt(0).toUpperCase() + formType.slice(1)}
            </button>
          ))}
        </div>

        {/* Form Content */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          {/* Common Fields */}
          <div>
            <label className="block text-gray-700 font-medium">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              required
              className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {selectedForm === "residential" && (
            <>
              <div>
                <label className="block text-gray-700 font-medium">
                  Pin Code *
                </label>
                <input
                  type="text"
                  name="pinCode"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium">
                  WhatsApp Number *
                </label>
                <input
                  type="text"
                  name="whatsappNumber"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {selectedForm === "housing" && (
            <>
              <div>
                <label className="block text-gray-700 font-medium">
                  Name of Housing Society *
                </label>
                <input
                  type="text"
                  name="societyName"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Pin Code *
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    name="whatsappNumber"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </>
          )}

          {selectedForm === "commercial" && (
            <>
              <div>
                <label className="block text-gray-700 font-medium">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="companyName"
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Pin Code *
                  </label>
                  <input
                    type="text"
                    name="pinCode"
                    required
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </>
          )}

          {/* Terms & Conditions */}
          <label className="flex items-center space-x-2 text-gray-600">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="w-4 h-4"
              required
            />
            <span>
              I agree to doctor electric{" "}
              <a href="#" className="text-blue-600 underline">
                terms of service
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white text-sm font-semibold py-2 rounded-md w-full hover:bg-blue-700 transition"
          >
            Submit
          </button>

          {message && (
            <p
              className={`mt-3 text-center font-semibold ${
                message.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
