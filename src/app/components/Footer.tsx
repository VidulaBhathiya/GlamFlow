import { memo } from 'react';
import { Link } from 'react-router';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#5A2C3D] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-3xl mb-4 tracking-wide" style={{ fontFamily: 'Playfair Display, serif', color: '#C9A66B' }}>
              GlamFlow
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              America's most luxurious hair salon experience, bringing elegance and artistry to every service.
            </p>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">About</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">Services</Link></li>
              <li><Link to="/stylists" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">Stylists</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold tracking-wide">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">Hair Color</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">Extensions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">Treatments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#C9A66B] transition-colors text-sm">Bridal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4 font-semibold tracking-wide">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-[#C9A66B]" />
                <span>Multiple locations in NYC, Orlando & Miami</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#C9A66B]" />
                <span>(212) 555-GLAM</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#C9A66B]" />
                <span>hello@glamflow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 GlamFlow Salon. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-[#C9A66B] transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C9A66B] transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#C9A66B] transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);

