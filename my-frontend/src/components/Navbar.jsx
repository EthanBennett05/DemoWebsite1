import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#1a1612] text-[#c9b896] shadow-lg border-b-4 border-[#8b6f47] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 md:py-6">
        <div className="flex justify-between items-center">
          
          {/* Logo / Title */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold text-[#c9b896] hover:text-[#d4a574] transition-colors tracking-tight"
          >
            11 Rock Ranch <span className="hidden sm:inline">Web Design</span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className="hover:text-[#d4a574] font-semibold transition-colors">Home</Link>
            <Link to="/huntPackages" className="hover:text-[#d4a574] font-semibold transition-colors">Hunt Packages</Link>
            <Link to="/lodging" className="hover:text-[#d4a574] font-semibold transition-colors">Lodging</Link>
            <Link to="/booking" className="hover:text-[#d4a574] font-semibold transition-colors">Booking</Link>
            <Link to="/gallery" className="hover:text-[#d4a574] font-semibold transition-colors">Gallery</Link>
          </div>

          {/* Hamburger Icon (Hidden on Desktop) */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 text-[#c9b896] focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-4 pb-4 border-t border-[#8b6f47]/30 pt-4 text-center">
            <Link to="/" onClick={toggleMenu} className="hover:text-[#d4a574] font-semibold py-2">Home</Link>
            <Link to="/huntPackages" onClick={toggleMenu} className="hover:text-[#d4a574] font-semibold py-2">Hunt Packages</Link>
            <Link to="/lodging" onClick={toggleMenu} className="hover:text-[#d4a574] font-semibold py-2">Lodging</Link>
            <Link to="/booking" onClick={toggleMenu} className="hover:text-[#d4a574] font-semibold py-2">Booking</Link>
            <Link to="/gallery" onClick={toggleMenu} className="hover:text-[#d4a574] font-semibold py-2">Gallery</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}