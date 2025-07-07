import React, { useState } from 'react';
import { FaUserPlus, FaLock } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/Pricing' },
    { name: 'Extension', path: '/Extension' },
    { name: 'Contact Us', path: '/' },
  ];

  return (
    <nav className="px-5 py-3 bg-[#0f0c29]">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white px-6 py-3 rounded-full shadow-lg border border-[#ffffff1a] bg-gradient-to-r from-[#1b1c2d] via-[#1f1f35] to-[#161623]">
        
        {/* Logo */}
        <div className="text-2xl font-spaceGrotesk pl-2">Logo</div>

        {/* Desktop Menu */}
        <div className='flex flex-row gap-2'>
          <ul className="hidden md:flex space-x-15 text-md font-inter mt-2.5">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`hover:text-white transition ${
                  location.pathname === item.path
                    ? 'text-white font-semibold'
                    : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/auth?mode=signup"
            className="flex items-center bg-gradient-to-r from-[#7f5af0] to-[#f13bc1] text-white px-4 ml-16 py-2 rounded-full text-sm shadow hover:opacity-90 transition"
          >
            Create An Account <FaUserPlus className="ml-2" />
          </Link>
          <Link
            to="/auth?mode=login"
            className="flex items-center bg-[#2c2c2e] px-4 py-2 rounded-full text-sm hover:bg-[#3a3a3e] transition"
          >
            Login <FaLock className="ml-2" />
          </Link>
        </div></div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-3 bg-[#1e203d] rounded-xl py-4 px-6 shadow-lg text-sm text-gray-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`block hover:text-white transition ${
                location.pathname === item.path ? 'text-white font-semibold' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center bg-gradient-to-r from-[#7f5af0] to-[#f13bc1] text-white px-4 py-2 rounded-full text-sm"
          >
            Create An Account <FaUserPlus className="ml-2" />
          </Link>
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center bg-[#2c2c2e] px-4 py-2 rounded-full text-sm hover:bg-[#3a3a3e]"
          >
            Login <FaLock className="ml-2" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
