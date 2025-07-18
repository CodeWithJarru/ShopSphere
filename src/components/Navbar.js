'use client';

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 px-6 py-4 shadow-md flex justify-between items-center relative z-10">
      {/* Logo */}
      <div className="text-xl font-semibold text-sky-500">ShopSphere</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        <li><a href="/" className="hover:text-sky-600">Home</a></li>
        <li><a href="/products" className="hover:text-sky-600">Products</a></li>
        <li><a href="/about" className="hover:text-sky-600">About</a></li>
      </ul>

      {/* Icons */}
      <div className="hidden md:flex space-x-4 text-gray-700">
        <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 text-gray-700" /></a>
            <a href="/account"><FontAwesomeIcon icon={faUser} className="w-4 h-4 text-gray-700" /></a>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 px-6 flex flex-col space-y-4 md:hidden">
          <a href="/" className="text-sm font-medium hover:text-sky-600">Home</a>
          <a href="/products" className="text-sm font-medium hover:text-sky-600">Products</a>
          <a href="/about" className="text-sm font-medium hover:text-sky-600">About</a>
          <div className="flex space-x-4 pt-2 border-t">
            <a href="/cart"><FontAwesomeIcon icon={faShoppingCart} className="w-4 h-4 text-gray-700" /></a>
            <a href="/account"><FontAwesomeIcon icon={faUser} className="w-4 h-4 text-gray-700" /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
