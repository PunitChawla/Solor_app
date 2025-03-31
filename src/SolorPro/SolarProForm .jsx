import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const SolarProForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      "service_iesp3p5", // Replace with your Email.js service ID
      "template_sdshsc9", // Replace with your Email.js template ID
      form.current,
      "3y4Z1YVydTBC0Y5hT" // Replace with your Email.js public key
    ).then(
      (result) => {
        console.log("Email sent successfully", result.text);
        alert("Form submitted successfully!");
      },
      (error) => {
        console.log("Failed to send email", error.text);
        alert("Failed to submit form.");
      }
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-800 text-white px-6 md:px-12">
      
      {/* Left Side - Heading, Icons, and Text */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl mt-10 md:text-5xl font-bold">
          Our <span className="text-cyan-400">SolarPro</span> partnership program is for
        </h1>

        {/* Service Professionals */}
        <div className="flex items-start space-x-4">
          <img src="https://www.solarsquare.in/images/free-in-home.svg" alt="Service" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-semibold">Service professionals</h2>
            <p className="text-gray-300">
              Interior designers, project managers, brokers, and others.
            </p>
          </div>
        </div>

        {/* Business Providers */}
        <div className="flex items-start space-x-4">
          <img src="	https://www.solarsquare.in/images/personalized-manager.svg" alt="Business" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-semibold">Business providers</h2>
            <p className="text-gray-300">
              Shop owners, business owners, and more.
            </p>
          </div>
        </div>

        {/* Solar Industry Associates */}
        <div className="flex items-start space-x-4">
          <img src="	https://www.solarsquare.in/images/paperwork.svg" alt="Solar" className="w-10 h-10" />
          <div>
            <h2 className="text-xl font-semibold">Solar industry associates</h2>
            <p className="text-gray-300">
              Solar water heater suppliers, dealers, and shop owners.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full mt-10 md:w-1/2 bg-white text-black p-6 md:p-10 rounded-lg shadow-lg">
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Full Name *</span>
            <input type="text" name="full_name" required className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>

          <label className="block">
            <span className="text-gray-700">Mobile *</span>
            <input type="text" name="mobile" required className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>

          <label className="block">
            <span className="text-gray-700">State *</span>
            <select name="state" required className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option value="">Select state</option>
              <option value="State1">State 1</option>
              <option value="State2">State 2</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">City *</span>
            <input type="text" name="city" required className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>

          <label className="block">
            <span className="text-gray-700">Profession *</span>
            <select name="profession" required className="w-full mt-1 p-2 border border-gray-300 rounded">
              <option value="">Select profession</option>
              <option value="Designer">Designer</option>
              <option value="Broker">Broker</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input type="email" name="email" className="w-full mt-1 p-2 border border-gray-300 rounded" />
          </label>

          <button
            type="submit"
            className="w-full bg-cyan-400 text-white py-2 rounded-lg hover:bg-cyan-500 transition"
          >
            Earn with us
          </button>
        </form>
      </div>
    </div>
  );
};

export default SolarProForm;
