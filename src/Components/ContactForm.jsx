import { useState } from "react";
import emailjs from "@emailjs/browser";
import { serviceId, templateId } from "../config";
import { Typewriter } from "react-simple-typewriter";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", city: "", website: "", contactNo: "" });
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
          to_email: "wead.media.mail@gmail.com",
          message: `City: ${form.city}\nWebsite: ${form.website || "N/A"} Contact Number: ${form.contactNo}`,
        },
        "TXyoIxKEJkH3-ndbc"
      );
      setLoading(false);
      alert("Your message has been sent!");
      setForm({ name: "", email: "", city: "", website: "", contactNo: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-8">
      <div className="min-h-[550px] bg-gradient-to-r from-yellow-300 to-pink-300 p-10 rounded-xl shadow-lg flex">
        
        {/* Left Content with Improved Typing Effect */}
        <div className="w-1/2 pr-8 flex flex-col justify-center">
          <h2 className="text-6xl font-bold text-blue-500 mb-4">
            <Typewriter
              words={[
                "Schedule a FREE consultation today!",
                "Get expert advice with no pressure!",
                "Book your hassle-free solar consultation!"
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-gray-800 text-xl">
            Get genuine advice from our solar experts. No pressure, book only if you are satisfied!
          </p>
        </div>

        {/* Right Form Section with Background Image */}
        <div
          className="w-1/2 bg-white p-6 rounded-lg shadow-md relative"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503455637927-730bce8583c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dz')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "530px"
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/80 p-6 rounded-lg shadow-md">
            <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Full Name *" className="w-full p-2 border rounded" />
            <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="Email *" className="w-full p-2 border rounded" />
            <input type="text" name="city" value={form.city} onChange={handleChange} required placeholder="City *" className="w-full p-2 border rounded" />
            <input
              type="number"
              name="contactNo"
              value={form.contactNo}
              onChange={handleChange}
              required
              placeholder="Contact No *"
              className="w-full p-2 border rounded"
            />
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
