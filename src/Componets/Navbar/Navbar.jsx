import React, { useState } from 'react';
import ProfilePic from '../../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#1e3c72] text-white sticky top-0 z-[1000]">
      {/* Logo */}
      <div className="flex items-center">
        <img src={ProfilePic} alt="logo" className="h-[50px]" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 list-none">
        <li><a href="#home" className="hover:text-[#a8dadc] transition-colors">Home</a></li>
        <li><a href="#about" className="hover:text-[#a8dadc] transition-colors">About Me</a></li>
        <li><a href="#services" className="hover:text-[#a8dadc] transition-colors">Services</a></li>
        <li><a href="#portfolio" className="hover:text-[#a8dadc] transition-colors">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-[#a8dadc] transition-colors">Contact</a></li>
      </ul>

      {/* Connect Button (always visible) */}
      <div className="hidden md:block">
        <a href="#" className="px-4 py-2 bg-[#f1faee] text-black rounded-lg font-bold hover:bg-[#a8dadc] transition">Connect</a>
      </div>

      {/* Hamburger Button (Mobile) */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-[#1e3c72] text-white flex flex-col gap-4 p-6 md:hidden">
          <li><a href="#home" className="hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className="hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>About Me</a></li>
          <li><a href="#services" className="hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="#portfolio" className="hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Portfolio</a></li>
          <li><a href="#contact" className="hover:text-[#a8dadc]" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li><a href="#" className="px-4 py-2 bg-[#f1faee] text-black rounded-lg font-bold hover:bg-[#a8dadc] transition" onClick={() => setMenuOpen(false)}>Connect</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
