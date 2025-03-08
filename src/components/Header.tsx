import React from 'react';
import { Scissors } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Scissors className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-semibold text-gray-800">Salon_DEMO</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-purple-600 transition-colors">
              HOME
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
              ABOUT
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-purple-600 transition-colors">
              SERVICES
            </Link>
            <Link to="/products" className="text-gray-600 hover:text-purple-600 transition-colors">
              PRODUCTS
            </Link>
            <Link to="/appointment" className="text-gray-600 hover:text-purple-600 transition-colors">
              APPOINTMENT
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}