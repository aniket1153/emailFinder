import React from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import img1 from "../assets/girl.jpg";
import { FaPlayCircle } from "react-icons/fa";
import SimplePlans from "../Components/SimplePlans";
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";
import FAQSection from "../Components/FAQSection";
import StatsSection from "../Components/StatsSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      {/* {Text Heading} */}
<div className="w-full bg-gradient-to-br  py-15 px-4 md:px-5">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl sm:text-5xl md:text-6xl text-white font-light leading-tight tracking-tight text-left">
      Find & Verify Professional Emails
    </h1>
    <p className="text-4xl sm:text-5xl font-semibold mt-2 tracking-tight text-left text-white">
      Instantly
    </p>
  </div>
</div>



      {/* Middle Section (Styled Box) */}
{/* Middle Section (Styled Box) */}
<div className="bg-[#1b1f30] rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-[#2e3248] max-w-7xl w-full mx-auto mt-10">
  <label className="block text-white mb-2 text-sm font-medium">
    Type Or Paste Domain Address:
  </label>
  <textarea
    className="w-full h-40 p-4 rounded-md bg-white text-black resize-none focus:outline-none shadow-inner"
    placeholder={`company.com\ngoogle.com\ngithub.com`}
  ></textarea>

  <button className="w-full mt-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-[#6e61e6] to-[#ef497a] hover:from-[#5a4edc] hover:to-[#e73368] transition duration-300">
    Search Records
    <RiSearchEyeLine color="white" size={23} />
  </button>
</div>



      {/* {How It Works} */}
             
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-20 px-3 md:px-20">
      {/* Left Text Section */}
      <div className="flex flex-col gap-6 text-left max-w-xl">
        <h2 className="text-white text-4xl font-semibold">How It Works</h2>

        {/* Step 1 */}
        <div>
          <h3 className="text-gray-400 font-medium">1. Enter A Name Or Domain</h3>
          <p className="text-gray-500 text-sm">
            Start by entering the person’s name and their company, or just the
            company’s domain (e.g., example.com). Our system will start
            searching immediately.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <h3 className="text-white font-medium">2. We Search Public Sources</h3>
          <p className="text-gray-400 text-sm">
            Our tool scans thousands of publicly available web pages,
            professional profiles, corporate websites, and social platforms to
            locate matching email patterns.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <h3 className="text-white font-medium">3. Verify Every Email</h3>
          <p className="text-gray-400 text-sm">
            Our tool scans thousands of publicly available web pages,
            professional profiles, corporate websites, and social platforms to
            locate matching email patterns.
          </p>
        </div>
      </div>

      {/* Right Side Image Card with Gradient Border */}
      <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] p-[2px] rounded-2xl shadow-xl">
        <div className="relative w-[300px] sm:w-[400px] md:w-[460px] lg:w-[380px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[380px] rounded-2xl overflow-hidden bg-[#111827]">
          <img
            src={img1}
            
            alt="video"
            className="w-full h-full object-cover rounded-2xl bg-opacity-10"
          />

          {/* Play Icon Overlay */}
          <div className="absolute inset-0 flex justify-center items-center  bg-opacity-40 hover:bg-opacity-40 transition duration-300">
            <FaPlayCircle className="text-white text-6xl cursor-pointer hover:scale-105 transition duration-300" />
          </div>
        </div>
      </div>
    </div>
    <SimplePlans/>
    <AboutUs/>
  <Testimonials/>
  <WhyChooseUs/>
  <FAQSection/>
  <StatsSection/>
  <Footer/>

    </div>
  );
};

export default Home;
