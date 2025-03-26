import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00008b] text-white py-10 px-5 text-center md:text-left">
      <div className="max-w-7xl mx-auto">
        {/* Locations Section */}
        <h3 className="font-bold text-lg mb-4">We are present here</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-300">
          <div>
            <span className="font-bold text-lg text-white">• Varanasi</span> 
          </div>
          <div>
            <span className="font-bold text-lg text-white">• Chandauli</span> 
          </div>
          <div>
            <span className="font-bold  text-lg text-white">• Prayagraj</span> 
          </div>
          <div>
            <span className="font-bold text-lg text-white">• Bhadohi</span>
          </div>
          <div>
            <span className="font-bold text-lg text-white">• Jaunpur</span> 
          </div>
          <div>
            <span className="font-bold text-lg text-white">• Many more </span> 
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
