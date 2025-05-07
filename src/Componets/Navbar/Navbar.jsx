import React, { useState } from 'react';
import ProfilePic from '../../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-blue-900 text-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src={ProfilePic} alt="logo" className="h-12" />
      </div>

      {/* Desktop Links */}
      <ul className="flex gap-8 items-center">
        <li><a href="#home" className="hover:text-blue-200 transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-blue-200 transition-colors">About Me</a></li>
        <li><a href="#services" className="hover:text-blue-200 transition-colors">Services</a></li>
        <li><a href="#portfolio" className="hover:text-blue-200 transition-colors">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a></li>
      </ul>

      {/* Connect Button (desktop only) */}
      <div className="block">
        <a
          href="#contact"
          className="px-4 py-2 bg-gray-100 text-black rounded-lg font-bold hover:bg-blue-200 transition"
        >
          Connect
        </a>
      </div>

      {/* Hamburger (mobile only) */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className=" absolute top-20 left-0 right-0 bg-blue-900 p-5 z-50">
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>About Me</a></li>
            <li><a href="#services" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#portfolio" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#contact" className="block py-2 hover:text-blue-200 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="#contact"
                className="inline-block mt-2 px-4 py-2 bg-gray-100 text-black rounded-lg font-bold hover:bg-blue-200 transition"
                onClick={() => setMenuOpen(false)}
              >
                Connect
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;