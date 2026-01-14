import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#1a1612] text-[#c9b896] p-4 shadow-lg border-b-4 border-[#8b6f47]">
      <nav className="bg-[#1a1612] text-[#c9b896] p-4 shadow-lg border-b-4 border-[#8b6f47]">
      <div className="max-w-6xl block m-auto md:flex justify-between items-center">
        <Link to="/" className="flex justify-center pb-6 md:pb-0 md:justify-start text-2xl font-bold text-[#c9b896] hover:text-[#d4a574] transition-colors">
          11 Rock Ranch Web Design
        </Link>
        <div className="flex gap-6 justify-center md:justify-end">
          <Link to="/" className="hover:text-[#d4a574] transition-colors text-[#c9b896] font-semibold">
            Home
          </Link>
          <Link to="/huntPackages" className="hover:text-[#d4a574] transition-colors text-[#c9b896] font-semibold">
            Hunt Packages
          </Link>
          <Link to="/lodging" className="hover:text-[#d4a574] transition-colors text-[#c9b896] font-semibold">
            Lodging
          </Link>
          <Link to="/booking" className="hover:text-[#d4a574] transition-colors text-[#c9b896] font-semibold">
            Booking
          </Link>
          <Link to="/gallery" className="hover:text-[#d4a574] transition-colors text-[#c9b896] font-semibold">
            Gallery
          </Link>
        </div>
      </div>
    </nav>
    </nav>
  );
}