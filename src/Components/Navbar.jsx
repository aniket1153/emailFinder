import React, { useState } from "react";
import { FaUserPlus, FaLock } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { logoutRequested } from "../redux/slices/auth.slice";
import {
  aboutPath,
  contactUsPath,
  extensionPath,
  loginPath,
  pricingPath,
  rootPath,
  signUpPath,
} from "../App";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const navItems = [
    { name: "Home", path: rootPath },
    { name: "About", path: aboutPath },
    { name: "Pricing", path: pricingPath },
    { name: "Extension", path: extensionPath },
    { name: "Contact Us", path: contactUsPath },
  ];

  return (
    <nav className="px-5 py-3  relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white px-6 py-3 rounded-full shadow-lg border border-[#ffffff1a] bg-gradient-to-r from-[#1b1c2d] via-[#1f1f35] to-[#161623]">
        {/* Logo */}
        <Link to={rootPath} className="flex items-center">
          <div className="text-2xl font-spaceGrotesk pl-2">Logo</div>
        </Link>

        {/* Desktop Menu */}
        <div className="flex flex-row gap-2">
          <ul className="hidden md:flex space-x-15  font-inter mt-2.5">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`hover:text-white transition ${
                    location.pathname === item.path
                      ? "text-white font-semibold"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            {isAuthenticated ? (
              <button
                type="button"
                className="flex items-center bg-gradient-to-r from-[#7f5af0] to-[#f13bc1] text-white px-4 ml-16 py-2 rounded-full text-sm shadow hover:opacity-90 transition cursor-pointer"
                onClick={() => {
                  dispatch(logoutRequested());
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Logging out ...
                  </span>
                ) : (
                  "Logout"
                )}
                <FaUserPlus className="ml-2" />
              </button>
            ) : (
              <>
                {" "}
                <Link
                  to={signUpPath}
                  className="flex items-center bg-gradient-to-r from-[#7f5af0] to-[#f13bc1] text-white px-4 ml-16 py-2 rounded-full text-sm shadow hover:opacity-90 transition"
                >
                  Create An Account <FaUserPlus className="ml-2" />
                </Link>
                <Link
                  to={loginPath}
                  className="flex items-center bg-[#2c2c2e] px-4 py-2 rounded-full text-sm hover:bg-[#3a3a3e] transition"
                >
                  Login <FaLock className="ml-2" />
                </Link>
              </>
            )}
          </div>
        </div>

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
                location.pathname === item.path
                  ? "text-white font-semibold"
                  : ""
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
