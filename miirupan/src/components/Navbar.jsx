import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-black shadow-md px-4 py-2 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Miirupan Logo" className="w-16 h-16 object-contain" />
        <span className="text-xl font-bold text-white hidden sm:inline"></span>
      </Link>


      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium items-center">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/find-work">Find Work</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/userdashboard">Dashboard</Link></li>
        <li><Link to="/auth" className="block bg-white hover:bg-pink text-black font-bold text-center px-4 py-2 rounded-lg">Log in</Link></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50" onClick={toggleMenu}>
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center gap-4 py-6 shadow-md text-white font-medium md:hidden">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/find-work" onClick={closeMenu}>Find Work</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/userdashboard">Dashboard</Link></li>
          <li><Link to="/auth" className="block bg-white hover:bg-pink-500 text-black font-bold text-center px-4 py-2 rounded-lg" onClick={closeMenu}>Log in</Link></li>
        </ul>
      )}
    </nav>
  );
}
