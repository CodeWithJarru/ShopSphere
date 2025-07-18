'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-sky-400 mb-4">ShopSphere</h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for premium tech products at unbeatable prices.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About</a></li>
            <li><a href="/cart" className="hover:text-white">Cart</a></li>
            <li><a href="/account" className="hover:text-white">Account</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates on new arrivals and exclusive offers.
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border-2 border-white text-white rounded mb-3 focus:outline-none"
          />
          <button className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="hover:text-white">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </footer>
  );
}
