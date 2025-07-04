import React from "react";
import { RiSearchEyeLine } from "react-icons/ri";
import img1 from "../assets/girl.jpg";
import { FaPlayCircle } from "react-icons/fa";
import SimplePlans from "../Components/SimplePlans";
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";
import FAQSection from "../Components/FAQSection";
import StatsSection from "../Components/StatsSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="bg-[#0f0c29]">
      {/* {Text Heading} */}
   {/* <div class="relative w-full h-screen bg-[#0f0c29] overflow-hidden">
  
  <div class="absolute top--1/4 left-1/3 w-96 h-80 bg-white rounded-full blur-3xl opacity-20"></div>

  
  <div class="relative z-10 p-10">
    <h1 class="text-3xl font-bold">Foreground Content</h1>
  </div>
</div> */}

<div className="w-full   py-15 px-4 md:px-5 ">
  <div className="max-w-7xl mx-auto">
    <h1 className=" font-spaceGrotesk  text-4xl sm:text-5xl md:text-6xl text-white font-light leading-tight tracking-tight text-left">
      Find & Verify Professional Emails
    </h1>
    <p className="text-4xl sm:text-5xl  mt-2 tracking-tight text-left text-white">
      Instantly
    </p>
  </div>
</div>



      {/* Middle Section (Styled Box) */}
{/* Middle Section (Styled Box) */}
{/* Middle Section (Styled Box) */}
<div className="bg-[#1b1f30] rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-[#2e3248] max-w-7xl w-full mx-auto mt-10">
  {/* Label (stays outside) */}
  <label className="block text-white mb-2 text-sm font-medium">
    
  </label>

  {/* Textarea with gray placeholder */}
  <div className="bg-white w-full h-44 rounded-md">
  <textarea
    className="w-full resize-none  text-black pl-2.5 pt-1.5 focus:outline-none shadow-inner placeholder-gray-500"
  placeholder={`Type or Paste Domain Address:`}
  ></textarea>
  <div className="flex flex-col gap-2 pl-2.5">
    <p className="text-black">company.com</p>
  <p className="text-black">google.com</p>
  <p className="text-black">github.com</p>
  </div>
  </div>
  {/* <textarea
    className="w-full h-40 p-4 rounded-md bg-white text-black resize-none focus:outline-none shadow-inner placeholder-gray-500"
    placeholder={`Type or Paste Domain Address:`}
  ></textarea> */}

  {/* Search Button */}
  <button className="w-full mt-6 py-3 rounded-full text-white font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-[#6e61e6] to-[#ef497a] hover:from-[#5a4edc] hover:to-[#e73368] transition duration-300">
    Search Records
    <RiSearchEyeLine color="white" size={23} />
  </button>
</div>




      {/* {How It Works} */}
             
          <div className="flex flex-col justify-center lg:gap-80 md:flex-row items-center gap-3 mt-20 px-5 md:px-20">
      {/* Left Text Section */}
      <div className="flex flex-col gap-8 text-left max-w-xl">
        <h2 className="text-white text-5xl font-spaceGrotesk">How It Works</h2>

        {/* Step 1 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-gray-400 font-spaceGrotesk">1. Enter A Name Or Domain</h3>
          <p className="text-gray-500 text-sm font-inter">
            Start by entering the person’s name and their company, or just the
            company’s domain (e.g., example.com). Our system will start
            searching immediately.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-spaceGrotesk">2. We Search Public Sources</h3>
          <p className="text-gray-300 text-sm font-inter">
            Our tool scans thousands of publicly available web pages,
            professional profiles, corporate websites, and social platforms to
            locate matching email patterns.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col gap-3">
          <h3 className="text-white font-spaceGrotesk">3. Verify Every Email</h3>
          <p className="text-gray-500 font-inter">
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
