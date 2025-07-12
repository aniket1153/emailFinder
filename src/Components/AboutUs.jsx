import React from "react";
import imgAb from "../assets/About.jpg";
import { RiArrowRightSLine } from "react-icons/ri";
import Footer from "./Footer";
import WhyChooseUs from "./WhyChooseUs";
import StatsSection from "./StatsSection";

const AboutUs = () => {
  return (
    <div className="  px-4 py-12 relative">
        <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[35%] w-[800px] h-[500px] bg-white rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-[400px] h-[400px]  rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72  rounded-full opacity-20 blur-3xl" />
      </div>
      <div className="flex flex-col-reverse   lg:flex-row items-center justify-center gap-12 lg:gap-60 relative">
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-xl w-full">
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl  text-white font-spaceGrotesk relative">
              About Us
            </h1>
            <h2 className="text-2xl md:text-3xl text-[#ceced8] font-spaceGrotesk relative">
              Helping You Connect with the Right{" "}
            </h2>
            <h2 className="text-2xl md:text-3xl text-[#ceced8] font-spaceGrotesk relative">
              {" "}
              People Accurately and Reliably
            </h2>
          </div>

          <div className="text-[#8D909C] text-base md:text-lg  flex flex-col gap-4 font-inter relative ">
            <div className="relative">
              <p>
                We are a data-driven SaaS company focused on helping businesses
                connect with the right people.
              </p>
            </div>
            <div className="relative">
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
        <div className="w-full max-w-sm md:max-w-md flex justify-center relative">
          <img
              className="rounded-2xl w-full h-auto lg:w-[450px] lg:h-[450px] object-cover"
                      src={imgAb}
                      alt="About Us"
                    />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center lg:justify-start lg:ml-28">
        <button className="flex items-center gap-3 text-white text-base md:text-lg font-semibold px-6 py-3 rounded-full border-2 border-blue-400 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 hover:opacity-90 transition-all duration-300 shadow-lg">
          Read More
          <span className="bg-white/20 p-2 rounded-full">
            <RiArrowRightSLine className="text-white text-xl" />
          </span>
        </button>
      </div>
      {/* <WhyChooseUs/>
      <StatsSection/>
      
      <Footer/> */}
    </div>
  );
};

export default AboutUs;
