import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Scissors } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Scissors className="h-8 w-8 text-purple-500" />
              <span className="text-2xl font-semibold text-white">Salon_DEMO</span>
            </Link>
            <p className="text-gray-400">
              Your destination for premium hair care and styling services. Experience the difference with our expert team.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-purple-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-purple-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-purple-500 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="hover:text-purple-500 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Opening Hours</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Monday - Friday: 9AM - 8PM</li>
              <li>Saturday: 9AM - 7PM</li>
              <li>Sunday: 10AM - 6PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400">
              Subscribe to our newsletter for updates and special offers.
            </p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-purple-500"
              />
              <button
                type="submit"
                className="w-full mt-2 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Salon_DEMO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}