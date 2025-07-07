import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1B101D] text-white px-6 md:px-16 pt-16 pb-10 font-sans overflow-hidden">
      {/* ✅ Seamless Scrolling Text */}
      <div className="relative overflow-hidden whitespace-nowrap w-full py-6">
        <motion.div
          className="flex gap-16 text-2xl md:text-7xl  font-spaceGrotesk tracking-tight"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          <span>Find Emails Instantly Wherever You Work</span>
          <span>Find Emails Instantly Wherever You Work</span>
          <span>Find Emails Instantly Wherever You Work</span>
        </motion.div>
      </div>

      {/* ✅ Description + CTA */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
        <div>
          <p className="text-[#E5E7EB] text-base leading-relaxed max-w-md">
            Skip the back and forth. Our lightweight browser extension brings powerful email finding and verification tools directly to your workflow.
          </p>
        </div>
        <div className="flex justify-start lg:justify-end items-start">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#6D5DF5] to-[#F850A0] text-white text-sm font-medium shadow-md hover:opacity-90 transition-all">
            Get Extension For Your Browser
            <span className="text-lg">➜</span>
          </button>
        </div>
      </div>

      {/* ✅ Divider & Bottom Section */}
      <div className="border-t border-white/10 mt-10 pt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
          <span className="text-white text-xl font-semibold">Logo</span>
          <nav className="flex gap-5 text-sm text-[#E5E7EB]">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Extension</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </nav>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:justify-end">
          <div className="flex gap-4 text-white text-sm">
            <FaFacebookF className="hover:text-pink-400 cursor-pointer" />
            <FaTwitter className="hover:text-pink-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-pink-400 cursor-pointer" />
          </div>
          <div className="text-xs text-[#B0B3C3] flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>

      {/* ✅ Footer Bottom */}
      <div className="text-[#B0B3C3] text-xs text-center mt-6">
        © 2025 Company Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
