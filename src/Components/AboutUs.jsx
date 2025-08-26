import React from "react";
import imgAb from "../assets/About.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import StatsSection from "./StatsSection";

const AboutUs = () => {
  return (
    <div className="px-4 py-12 relative">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[35%] w-[800px] h-[500px] bg-white rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-[400px] h-[400px] rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Content Wrapper */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-14 lg:gap-44 relative z-10">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-xl w-full p-0 md:p-4 lg:p-0">
          <div className="flex flex-col gap-3 text-center md:text-center lg:text-left p-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-spaceGrotesk">
              About Us
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl text-[#ceced8] font-spaceGrotesk">
              Helping You Connect with the Right
            </h2>
            <h2 className="text-lg sm:text-2xl md:text-2xl lg:text-3xl text-[#ceced8] font-spaceGrotesk">
              People Accurately and Reliably
            </h2>
          </div>

          <div className="text-[#8D909C] text-sm sm:text-base md:text-base lg:text-lg flex flex-col gap-4 font-inter leading-relaxed md:leading-7 text-center md:text-center lg:text-left">
            <p>
              At Reach Finder, we make it easier than ever to connect with the
              right people. With access to over 450M verified contacts across
              180 countries, we provide businesses, recruiters, and marketers
              with the tools to find accurate and reliable email addresses
              instantly.
            </p>
            <p>
              Our platform is designed with simplicity, affordability, and
              accuracy in mind. Unlike other tools, we offer unlimited email
              credits, unlimited domain searches, unlimited downloads in
              Excel/CSV, and no restrictions on usage—all at the world’s most
              affordable price.
            </p>
            <p>
              With 100% verified emails, drag-and-drop capabilities, and browser
              extensions, Reach Finder is the most powerful and reliable email
              finder solution for professionals worldwide.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg flex justify-center relative">
          <img
            className="
              rounded-2xl 
              w-full h-auto 
              md:w-[350px] md:h-[350px]   /* Tablet size */
              lg:w-[500px] lg:h-[500px]   /* Desktop size */
              object-cover
            "
            src={imgAb}
            alt="About Us"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center md:justify-center lg:justify-start lg:ml-34">
        <button className="flex items-center gap-3 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full border-2 border-blue-400 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 hover:opacity-90 transition-all duration-300 shadow-lg">
          Read More
          <span className="bg-white/20 p-2 rounded-full">
            <RiArrowRightSLine className="text-white text-xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
