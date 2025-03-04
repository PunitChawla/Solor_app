import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00008b] text-white py-10 px-5 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        {/* Locations Section */}
        <h3 className="font-bold text-lg mb-4">We are present here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-300">
          <div>
            <span className="font-bold text-white">• Delhi NCR</span> Solar in Delhi, Solar in Gurugram, Solar in NCR
          </div>
          <div>
            <span className="font-bold text-white">• Gujarat</span> Solar in Ahmedabad, Solar in Anand, Solar in Gandhinagar, Solar in Surat, Solar in Vadodara
          </div>
          <div>
            <span className="font-bold text-white">• Karnataka</span> Solar in Bengaluru, Solar in Mysuru
          </div>
          <div>
            <span className="font-bold text-white">• Madhya Pradesh</span> Solar in Bhopal, Solar in Gwalior, Solar in Indore, Solar in Jabalpur
          </div>
          <div>
            <span className="font-bold text-white">• Maharashtra</span> Solar in Amravati, Solar in Mumbai, Solar in Nagpur, Solar in Nashik, Solar in Pune, Solar in Thane
          </div>
          <div>
            <span className="font-bold text-white">• Rajasthan</span> Solar in Ajmer, Solar in Jaipur
          </div>
          <div>
            <span className="font-bold text-white">• Telangana</span> Solar in Hyderabad, Solar in RangaReddy, Solar in Warangal
          </div>
          <div>
            <span className="font-bold text-white">• Uttar Pradesh</span> Solar in Kanpur Nagar, Solar in Lucknow, Solar in Varanasi, Solar in Ghaziabad
          </div>
          <div>
            <span className="font-bold text-white">• Tamil Nadu</span> Solar in Chennai
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <p className="font-bold text-lg text-gray-200">Proudly made in India ❤️</p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-2 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-white transition duration-300">Privacy Policy</Link>
            <span>/</span>
            <Link to="/terms-of-service" className="hover:text-white transition duration-300">Terms of Service</Link>
            <span>/</span>
            <Link to="/tnc-goodzero" className="hover:text-white transition duration-300">TnC GoodZero</Link>
            <span>/</span>
            <span className="text-gray-500">Copyright ©2025</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
