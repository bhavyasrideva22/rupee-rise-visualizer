
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary py-4 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-white text-xl md:text-2xl font-bold">Rupee Rise Visualizer</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-gold-DEFAULT transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gold-DEFAULT transition-colors duration-200">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
