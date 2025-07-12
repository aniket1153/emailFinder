import React from "react";
import imgAb from "../assets/About.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import StatsSection from "./StatsSection";

const About = () => {
  return (
    <div className=" ">
      <div className="flex flex-col-reverse py-12  lg:flex-row items-center justify-center gap-12 lg:gap-60 relative">
          <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] left-[35%] w-[700px] h-[450px] bg-white  rounded-full opacity-6 blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80  rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-[-38%] left-2/8  w-[700px] h-[450px] bg-pink-500  rounded-full opacity-11 blur-3xl" />
        

      </div>
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-xl text-center lg:text-left px-4 md:px-8 relative">
          <div className="flex flex-col gap-3 relative">
            <h1 className="text-4xl sm:text-4xl md:text-5xl  text-white font-spaceGrotesk">
              About Us
            </h1>
            <h2 className="text-2xl sm:text-xl md:text-3xl text-[#ceced8] font-spaceGrotesk">
              Helping You Connect with the Right{" "}
            </h2>
            <h2 className="text-2xl md:text-3xl text-[#ceced8] font-spaceGrotesk">
              {" "}
              People Accurately and Reliably
            </h2>
          </div>

          <div className="text-[#8D909C] text-base lg:text-lg  flex flex-col gap-2 font-inter relative ">
            <div>
              <p>
                We are a data-driven SaaS company focused on helping businesses
                connect with the right people.
              </p>
            </div>
            <div>
              <p>
                Our Email Finder & Verifier platform empowers sales teams,
                recruiters, marketers, and entrepreneurs with accurate, verified
                contact data instantly.
              </p>
            </div>
            <div>
              <p>
                Built with performance, security, and simplicity in mind, our
                platform supports Web, Mobile, and Browser Extensions so you can
                access your tools anywhere, anytime.
              </p>
            </div>
            <div>
              {" "}
              <p>
                Our goal? To make finding and verifying emails easy, fast, and
                reliable—whether you're running a solo campaign or managing an
                enterprise pipeline.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-sm md:max-w-md relative">
          <img
            className="rounded-2xl w-full h-auto lg:w-[450px] lg:h-[450px] object-cover"
            src={imgAb}
            alt="About Us"
          />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center lg:justify-start lg:ml-29">
        {/* <button className="flex items-center gap-3 text-white text-lg font-semibold px-6 py-3 rounded-full border-2 border-blue-400 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 hover:opacity-90 transition-all duration-300 shadow-lg">
          Read More
          <span className="bg-white/20 p-2 rounded-full">
            <RiArrowRightSLine className="text-white text-xl" />
          </span>
        </button> */}
      </div>
      
        
      <WhyChooseUs className="relative" />
      <StatsSection />

      <Footer />
    </div>
  );
};

export default About;
