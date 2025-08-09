import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaShareAlt,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 px-6 md:px-12">
      {/* Top Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
        {/* Column 1: About */}
        <div>
          <h2 className="text-xl font-bold flex items-center gap-2 mb-4">
            <FaShareAlt className="text-orange-400" />
            Sanjay Saraogi
          </h2>
          <p className="text-sm leading-6">
            Sanjay Saraogi, a dedicated Member of the Legislative Assembly from Darbhanga Town constituency. Sanjay tirelessly serves society, always present with the local community, addressing their concerns day and night. He is known for relentlessly questioning in parliament to ensure accountability and progress.
          </p>
        <div className="flex items-center gap-4 mt-5">
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-800 text-white hover:bg-orange-400 hover:text-white cursor-pointer transition">
    <FaFacebookF size={18} />
  </div>
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-800 text-white hover:bg-orange-400 hover:text-white cursor-pointer transition">
    <FaTwitter size={18} />
  </div>
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-800 text-white hover:bg-orange-400 hover:text-white cursor-pointer transition">
    <FaInstagram size={18} />
  </div>
</div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <a href="#" className="hover:text-orange-400">Home</a>
            <a href="#" className="hover:text-orange-400">About Us</a>
            <a href="#" className="hover:text-orange-400">Gallery</a>
            <a href="#" className="hover:text-orange-400">Achievements</a>
            <a href="#" className="hover:text-orange-400">Darbhanga Lok Sabha</a>
            <a href="#" className="hover:text-orange-400">Privacy Policy</a>
            <a href="#" className="hover:text-orange-400">Terms & Conditions</a>
            <a href="#" className="hover:text-orange-400">Our Blog & News</a>
            <a href="#" className="hover:text-orange-400">Our Team</a>
          </div>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact Info</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-400 mt-1" />
              <span>
                House No. 3, Bandar Bageecha, Opp. Kaushalya Estate, Patna - 800001
              </span>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-400 mt-1" />
              <span>
                Station Road, Shastri Chowk, Near Poor Home, Darbhanga - 846004
              </span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              <span>sanjaysaraogimla@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" />
              <span>094312 19050</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 flex justify-between text-xs md:text-sm text-gray-400 py-4">
        <p>© {new Date().getFullYear()} <span className="text-orange-400 font-medium">Sanjay Saraogi</span>, All rights reserved.</p>
        <p>Designed By <span className="text-orange-400 font-medium">Global Digitech Services</span></p>
      </div>
    </footer>
  );
};

export default Footer;
