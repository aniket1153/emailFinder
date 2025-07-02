import React from 'react';
import imgAb from "../assets/About.jpg";
import { RiArrowRightSLine } from 'react-icons/ri';

const AboutUs = () => {
  return (
    <div className="px-4 py-12">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-60">
        
        {/* Text Section */}
        <div className="flex flex-col gap-6 max-w-xl">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
            <h2 className="text-2xl md:text-3xl text-[#ccccD4]">Helping You Connect with the Right People</h2>
            <h2 className="text-2xl md:text-3xl text-[#ccccD4]">Accurately and Reliably</h2>
          </div>

          <div className="text-[#8D909C] text-lg space-y-2">
            <p>We are a data-driven SaaS company focused on helping businesses connect with the right people.</p>
            <p>Our Email Finder & Verifier platform empowers sales teams, recruiters, marketers, and entrepreneurs with accurate, verified contact data instantly.</p>
            <p>Built with performance, security, and simplicity in mind, our platform supports Web, Mobile, and Browser Extensions so you can access your tools anywhere, anytime.</p>
            <p>Our goal? To make finding and verifying emails easy, fast, and reliable—whether you're running a solo campaign or managing an enterprise pipeline.</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full max-w-sm md:max-w-md">
          <img className="rounded-2xl w-full h-auto object-cover" src={imgAb} alt="About Us" />
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center lg:justify-start lg:ml-28">
        <button className="flex items-center gap-3 text-white text-lg font-semibold px-6 py-3 rounded-full border-2 border-blue-400 bg-gradient-to-r from-purple-500 via-pink-500 to-pink-400 hover:opacity-90 transition-all duration-300 shadow-lg">
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
