import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { rootPath } from "../App";

const Footer = () => {
  return (
    <footer className="bg-[#1B101D] text-white px-6 md:px-16 pt-16 pb-10 font-sans overflow-hidden relative">
      {/* ✅ Background Gradient Blur Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[2%] left-[65%] w-[450px] h-[380px] bg-pink-300 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-1/2 right-[300px] w-[450px] h-[380px] bg-pink-300 rounded-full opacity-10 blur-3xl" />
        <div className="absolute bottom-[-12%] left-1/8 w-[450px] h-[380px] bg-pink-300 rounded-full opacity-10 blur-3xl" />
      </div>

      {/* ✅ Scrolling Text */}
      <div className="relative overflow-hidden whitespace-nowrap w-full py-6">
        <motion.div
          className="flex gap-16 text-2xl md:text-7xl font-spaceGrotesk tracking-tight"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <span className="relative">
            Find Emails Instantly Wherever You Work
          </span>
          <span>Find Emails Instantly Wherever You Work</span>
          <span>Find Emails Instantly Wherever You Work</span>
        </motion.div>
      </div>

      {/* ✅ Description + CTA */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 mt-17  relative z-10">
        <div>
          <p className="text-[#E5E7EB] text-[20px]">
            Skip the back and forth. Our lightweight browser extension brings
            powerful email finding and verification tools directly to your
            workflow.
          </p>
        </div>
        <div className="flex justify-start lg:justify-end items-start">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6D5DF5] to-[#F850A0] text-white text-sm font-medium shadow-md hover:opacity-90 transition-all">
            Browser Extension Coming Soon
            <span className="text-lg">➜</span>
          </button>
        </div>
      </div>

      {/* ✅ Divider & Footer Section */}
      <div className="space-y-2 mt-23 relative z-15">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <nav>
            <Link
              to={rootPath}
              className="flex items-center"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <div className="text-white text-xl font-semibold">Logo</div>
            </Link>
          </nav>

          {/* Navigation */}
          <nav className="flex gap-5 text-sm text-[#E5E7EB]">
            <a href="#" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Pricing
            </a>
            <a href="#" className="hover:underline">
              Extension
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </nav>

          {/* Socials */}
          <div className="flex gap-4 text-white text-sm">
            <FaFacebookF className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-pink-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-pink-400 cursor-pointer" />
          </div>
        </div>

        {/* Bottom Line & Legal Links */}
        <div className="border-t border-white/10 pt-4 flex flex-col lg:flex-row justify-between items-center text-xs text-[#B0B3C3] gap-2">
          <span>© 2025 Company Website. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
