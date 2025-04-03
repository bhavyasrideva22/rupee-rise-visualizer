
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary py-8 px-4 text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Rupee Rise Visualizer</h3>
            <p className="text-sm opacity-80">
              Empowering your financial journey with interactive calculators and insights to make informed investment decisions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-sm opacity-80 hover:opacity-100">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-sm opacity-80 hover:opacity-100">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-sm opacity-80 mb-2">
              Have questions or suggestions? We'd love to hear from you.
            </p>
            <Link to="/contact" className="inline-block bg-gold-DEFAULT text-charcoal-DEFAULT px-4 py-2 rounded-md font-medium text-sm hover:bg-opacity-90 transition-colors duration-200">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white border-opacity-20 text-center">
          <p className="text-sm opacity-70">
            © {currentYear} Rupee Rise Visualizer. All rights reserved.
          </p>
          <p className="text-xs mt-2 opacity-60">
            Disclaimer: The calculators provided are for informational purposes only and should not be considered as financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
