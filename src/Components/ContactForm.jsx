import { useState } from "react";
import emailjs from "@emailjs/browser";
import { serviceId, templateId } from "../config";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", city: "", website: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.city) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Punit",
          from_email: form.email,
          to_email: "chawlapunit79@gmail.com",
          message: `City: ${form.city}\nWebsite: ${form.website || "N/A"}`,
        },
        "jo3jDEFHVH-V0Lwql"
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({ name: "", email: "", city: "", website: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="w-3/4 bg-gradient-to-r from-yellow-300 to-pink-300 p-10 rounded-xl shadow-lg flex">
        {/* Left Content */}
        <div className="w-1/2 pr-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Schedule a <span className="text-blue-700">FREE consultation</span>
          </h2>
          <p className="text-gray-800">
            Get genuine advice from our solar experts. No pressure, book only if you are satisfied!
          </p>
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Full Name *" className="w-full p-2 border rounded" />
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email *" className="w-full p-2 border rounded" />
            <input type="text" name="city" value={form.city} onChange={handleChange} required placeholder="City *" className="w-full p-2 border rounded" />
            <input type="text" name="website" value={form.website} onChange={handleChange} placeholder="Previous Website Link (Optional)" className="w-full p-2 border rounded" />
            <button type="submit" disabled={loading} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
