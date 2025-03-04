import { FaPhone, FaEnvelope, FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Solar_square = () => {
  return (
    <footer className="bg-indigo-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-4">
          <img src="https://sse-website.s3.ap-south-1.amazonaws.com/brands/brand-logo-white.svg" alt="Company Logo" className="w-40" />
          <p>Rooftop solar made simple. We don't just sell solar — we give you peace of mind.</p>
          <div className="flex items-center space-x-3">
            <FaPhone />
            <span>98 3000 3000</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope />
            <span>welisten@solarsquare.in</span>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 text-2xl mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <div>
            <h3 className="font-semibold text-lg">Our Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/home">Homes</Link></li>
              <li><Link to="/commercial">Commercial</Link></li>
              <li><Link to="/housing_society">Housing Society</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/solarpro">SolarPro Partner</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Careers</h3>
            <ul className="space-y-2">
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/on-grid-solar">On-Grid Solar</Link></li>
              <li><Link to="/off-grid-solar">Off-Grid Solar</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Solar_square;
