import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 border-t-4 border-red-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="h-full w-full" width="100%" height="100%" viewBox="0 0 800 800">
            <defs>
                <pattern id="medical-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20 0v40M0 20h40" stroke="currentColor" strokeWidth="2" fill="none"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#medical-pattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                 <img 
                  src="\logo.png" 
                  alt="Delhi Ambulance service" 
                  className="h-12 w-auto"
                />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Delhi
                <span className="text-red-600">Ambulance <span className="text-red-600">Service 
                </span>
                </span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Dedicated to saving lives with 24/7 emergency medical transport Ambulance services across Delhi NCR. Professional care when you need it most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-700 hover:text-white transition-all duration-300" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-red-700 rounded-full mr-3"></span>
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Coverage','Outstation'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="group flex items-center hover:text-red-500 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-red-700 group-hover:translate-x-1 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
              <li>
                  <a href="tel:+919990909338" className="group flex items-center hover:text-red-500 transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2 text-red-700 group-hover:translate-x-1 transition-transform" />
                    Emergency Contact
                  </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-red-700 rounded-full mr-3"></span>
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-red-900/30 p-2 rounded-lg text-red-500 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Head Office</h4>
                  <p className="text-sm text-gray-400">Plot No. 12, Ring Road, Lajpat Nagar III, New Delhi, Delhi 110024</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-red-900/30 p-2 rounded-lg text-red-500 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Emergency Call</h4>
                  <a href="tel:+919990909338" className="text-sm text-gray-400 hover:text-red-500 transition-colors">+91 999-090-9338</a>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-red-900/30 p-2 rounded-lg text-red-500 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Support</h4>
                  <a href="mailto:help@vanshambulance.com" className="text-sm text-gray-400 hover:text-red-500 transition-colors">help@delhihambulance.com</a>
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area Map */}
          <div className="space-y-6">
             <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <span className="w-8 h-1 bg-red-700 rounded-full mr-3"></span>
              Service Area
            </h3>
            <div className="h-48 w-full rounded-xl overflow-hidden border border-gray-800 shadow-2xl relative group">
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.838%2C28.404%2C77.348%2C28.883&amp;layer=mapnik&amp;marker=28.644%2C77.216" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy"
                title="Delhi Coverage Map"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-0 bg-red-900/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
            </div>
            <p className="text-xs text-gray-500">
                Serving all major districts of Delhi NCR including Lajpat Nagar, Rohini, Dwarka, and more.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} Delhi Ambulance Services. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-500">
             <Link to="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link>
             <Link to="/sitemap" className="hover:text-red-500 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
