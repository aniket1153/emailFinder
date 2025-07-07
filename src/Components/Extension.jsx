import React from "react";
import firefox from "../assets/firefox.png";
import img1 from "../assets/extension.jpg";
import { FaPlay, FaPlayCircle } from "react-icons/fa";
import Testimonials from "./Testimonials";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
const Extension = () => {
  return (
    <div className="bg-[#0f0c29]">
      <div className="max-w-screen-xl  mx-auto px-4 py-8 ">
        <div className="flex flex-col gap-3.5">
          <h1 className="font-spaceGrotesk  text-5xl p-1.5">
            Get the Extension & Work Smarter
          </h1>
        </div>
        <div>
          <p className="text-md font-inter">
            Work faster and find verified leads directly from your browser.
            Simplify your prospecting flow without switching tabs.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-[#1b1f30]  rounded-2xl p-4 sm:p-6 md:p-1 shadow-xl border-[#2e3248] max-w-7xl  mx-auto mt-12 ">
          <div className=" flex   flex-row justify-center   gap-8 mt-22 ml-8   ">
            <img className="h-9" src={firefox} alt="" />
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9811 23.9999C21.3993 23.9999 24.9817 20.4182 24.9817 15.9993C24.9817 11.5804 21.4 7.99866 16.9811 7.99866C12.5622 7.99866 8.98047 11.5804 8.98047 15.9993C8.98047 20.4182 12.5622 23.9999 16.9811 23.9999Z"
                fill="white"
              />
              <path
                d="M10.052 20.001L3.12486 8.00256C1.7202 10.4348 0.980469 13.1939 0.980469 16.0026C0.980469 18.8113 1.71957 21.5703 3.12423 24.0025C4.5289 26.4348 6.54885 28.4541 8.98172 29.8581C11.4146 31.2622 14.1736 32.0007 16.9823 32L23.9095 20.001V19.9991C23.2081 21.2158 22.1981 22.2264 20.982 22.9291C19.7659 23.6317 18.3864 24.0019 16.9817 24.0019C15.577 24.0019 14.1975 23.6324 12.9808 22.9304C11.764 22.2283 10.754 21.2177 10.052 20.001Z"
                fill="url(#paint0_linear_221_630)"
              />
              <path
                d="M23.9108 20.0009L16.9836 31.9993C19.7923 32 22.5514 31.2609 24.9836 29.8562C27.4158 28.4522 29.4358 26.4322 30.8398 24C32.2439 21.5677 32.983 18.8081 32.9823 15.9994C32.9817 13.1907 32.242 10.4316 30.8367 8H16.9824L16.9805 8.00126C18.3851 8.00063 19.7653 8.36955 20.9814 9.07157C22.1982 9.77359 23.2081 10.7836 23.9108 11.9997C24.6134 13.2158 24.983 14.596 24.983 16.0006C24.9836 17.4047 24.6134 18.7842 23.9108 20.0009Z"
                fill="url(#paint1_linear_221_630)"
              />
              <path
                d="M16.9823 22.3345C20.4805 22.3345 23.3162 19.4988 23.3162 16.0006C23.3162 12.5025 20.4805 9.66675 16.9823 9.66675C13.4842 9.66675 10.6484 12.5025 10.6484 16.0006C10.6484 19.4988 13.4842 22.3345 16.9823 22.3345Z"
                fill="#1A73E8"
              />
              <path
                d="M16.9812 8.00062H30.8362C29.4321 5.56775 27.4122 3.5478 24.9799 2.14376C22.5477 0.739099 19.7887 0 16.98 0C14.1713 0 11.4122 0.739727 8.97997 2.14439C6.54773 3.54906 4.52841 5.56964 3.125 8.00188L10.0522 20.0009L10.0541 20.0022C9.3514 18.7861 8.9806 17.4065 8.9806 16.0019C8.9806 14.5972 9.34952 13.2171 10.0515 12.0009C10.7536 10.7842 11.7635 9.77421 12.9803 9.07219C14.1964 8.36954 15.5766 7.99999 16.9812 8.00062Z"
                fill="url(#paint2_linear_221_630)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_221_630"
                  x1="18.7129"
                  y1="31.0007"
                  x2="4.85736"
                  y2="7.00219"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1E8E3E" />
                  <stop offset="1" stop-color="#34A853" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_221_630"
                  x1="14.6488"
                  y1="32.0419"
                  x2="28.5043"
                  y2="8.0434"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FCC934" />
                  <stop offset="1" stop-color="#FBBC04" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_221_630"
                  x1="3.12492"
                  y1="10.0011"
                  x2="30.836"
                  y2="10.0011"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#D93025" />
                  <stop offset="1" stop-color="#EA4335" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.8616 23.8148C29.435 24.0379 28.995 24.2345 28.5443 24.4034C27.1094 24.9403 25.5893 25.2139 24.0573 25.2109C18.1429 25.2109 12.991 21.1426 12.991 15.9219C12.9986 15.2217 13.1929 14.5362 13.5539 13.9361C13.9149 13.3361 14.4295 12.8433 15.0445 12.5085C9.69516 12.7335 8.32031 18.3079 8.32031 21.5738C8.32031 30.8077 16.8306 31.7439 18.6641 31.7439C19.6528 31.7439 21.1438 31.4564 22.0387 31.1739L22.2025 31.1189C25.6461 29.9284 28.5819 27.601 30.5265 24.5197C30.5861 24.4258 30.6127 24.3148 30.6021 24.2042C30.5915 24.0935 30.5444 23.9896 30.4681 23.9087C30.3918 23.8279 30.2908 23.7747 30.181 23.7577C30.0711 23.7407 29.9588 23.7608 29.8616 23.8148Z"
                fill="url(#paint0_linear_221_636)"
              />
              <path
                opacity="0.35"
                d="M29.8616 23.8148C29.435 24.0379 28.995 24.2345 28.5443 24.4034C27.1094 24.9403 25.5893 25.2139 24.0573 25.2109C18.1429 25.2109 12.991 21.1426 12.991 15.9219C12.9986 15.2217 13.1929 14.5362 13.5539 13.9361C13.9149 13.3361 14.4295 12.8433 15.0445 12.5085C9.69516 12.7335 8.32031 18.3079 8.32031 21.5738C8.32031 30.8077 16.8306 31.7439 18.6641 31.7439C19.6528 31.7439 21.1438 31.4564 22.0387 31.1739L22.2025 31.1189C25.6461 29.9284 28.5819 27.601 30.5265 24.5197C30.5861 24.4258 30.6127 24.3148 30.6021 24.2042C30.5915 24.0935 30.5444 23.9896 30.4681 23.9087C30.3918 23.8279 30.2908 23.7747 30.181 23.7577C30.0711 23.7407 29.9588 23.7608 29.8616 23.8148Z"
                fill="url(#paint1_radial_221_636)"
              />
              <path
                d="M14.1938 30.1741C13.079 29.4822 12.1129 28.5755 11.3517 27.5069C10.484 26.3181 9.88691 24.9539 9.60231 23.51C9.3177 22.066 9.35245 20.5773 9.70413 19.1482C10.0558 17.7191 10.7159 16.3842 11.6381 15.2373C12.5603 14.0903 13.7222 13.159 15.0425 12.5086C15.4324 12.3249 16.0986 11.9924 16.9848 12.0087C17.6091 12.0132 18.2239 12.1623 18.7809 12.4442C19.338 12.7261 19.8222 13.1331 20.1956 13.6335C20.7004 14.3074 20.9786 15.1238 20.9906 15.9657C20.9906 15.9395 24.0477 6.01685 10.9917 6.01685C5.50482 6.01685 0.99284 11.2238 0.99284 15.792C0.971197 18.2085 1.48825 20.5995 2.50642 22.7912C4.17039 26.3415 7.08021 29.1571 10.6833 30.7034C14.2865 32.2497 18.332 32.4189 22.0517 31.179C20.7493 31.5896 19.3733 31.7129 18.0186 31.5403C16.664 31.3676 15.3629 30.9032 14.2051 30.1791L14.1938 30.1741Z"
                fill="url(#paint2_linear_221_636)"
              />
              <path
                opacity="0.41"
                d="M14.1938 30.1741C13.079 29.4822 12.1129 28.5755 11.3517 27.5069C10.484 26.3181 9.88691 24.9539 9.60231 23.51C9.3177 22.066 9.35245 20.5773 9.70413 19.1482C10.0558 17.7191 10.7159 16.3842 11.6381 15.2373C12.5603 14.0903 13.7222 13.159 15.0425 12.5086C15.4324 12.3249 16.0986 11.9924 16.9848 12.0087C17.6091 12.0132 18.2239 12.1623 18.7809 12.4442C19.338 12.7261 19.8222 13.1331 20.1956 13.6335C20.7004 14.3074 20.9786 15.1238 20.9906 15.9657C20.9906 15.9395 24.0477 6.01685 10.9917 6.01685C5.50482 6.01685 0.99284 11.2238 0.99284 15.792C0.971197 18.2085 1.48825 20.5995 2.50642 22.7912C4.17039 26.3415 7.08021 29.1571 10.6833 30.7034C14.2865 32.2497 18.332 32.4189 22.0517 31.179C20.7493 31.5896 19.3733 31.7129 18.0186 31.5403C16.664 31.3676 15.3629 30.9032 14.2051 30.1791L14.1938 30.1741Z"
                fill="url(#paint3_radial_221_636)"
              />
              <path
                d="M20.0195 18.6054C19.9183 18.7366 19.6071 18.9178 19.6071 19.3128C19.6071 19.639 19.8196 19.9527 20.197 20.2164C21.9943 21.4663 25.3827 21.3013 25.3914 21.3013C26.7232 21.2981 28.0297 20.9377 29.1747 20.2577C30.3299 19.5832 31.2886 18.6184 31.9557 17.4591C32.6229 16.2997 32.9753 14.9861 32.9781 13.6484C33.0106 10.8475 31.9782 8.98523 31.5607 8.16032C28.9123 2.97966 23.1954 7.83214e-08 16.9786 7.83214e-08C12.7744 -0.000415649 8.73888 1.65418 5.74503 4.60594C2.75117 7.55769 1.03959 11.5693 0.980469 15.7732C1.04046 11.2062 5.57994 7.51789 10.9793 7.51789C11.4168 7.51789 13.9115 7.56039 16.2287 8.7765C18.271 9.84888 19.3409 11.1437 20.0845 12.4273C20.8569 13.7609 20.9944 15.4457 20.9944 16.1169C20.9944 16.7881 20.652 17.783 20.0195 18.6054Z"
                fill="url(#paint4_radial_221_636)"
              />
              <path
                d="M20.0195 18.6054C19.9183 18.7366 19.6071 18.9178 19.6071 19.3128C19.6071 19.639 19.8196 19.9527 20.197 20.2164C21.9943 21.4663 25.3827 21.3013 25.3914 21.3013C26.7232 21.2981 28.0297 20.9377 29.1747 20.2577C30.3299 19.5832 31.2886 18.6184 31.9557 17.4591C32.6229 16.2997 32.9753 14.9861 32.9781 13.6484C33.0106 10.8475 31.9782 8.98523 31.5607 8.16032C28.9123 2.97966 23.1954 7.83214e-08 16.9786 7.83214e-08C12.7744 -0.000415649 8.73888 1.65418 5.74503 4.60594C2.75117 7.55769 1.03959 11.5693 0.980469 15.7732C1.04046 11.2062 5.57994 7.51789 10.9793 7.51789C11.4168 7.51789 13.9115 7.56039 16.2287 8.7765C18.271 9.84888 19.3409 11.1437 20.0845 12.4273C20.8569 13.7609 20.9944 15.4457 20.9944 16.1169C20.9944 16.7881 20.652 17.783 20.0195 18.6054Z"
                fill="url(#paint5_radial_221_636)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_221_636"
                  x1="8.32031"
                  y1="22.1287"
                  x2="30.6103"
                  y2="22.1287"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0C59A4" />
                  <stop offset="1" stop-color="#114A8B" />
                </linearGradient>
                <radialGradient
                  id="paint1_radial_221_636"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(20.6314 22.3044) scale(11.9211 11.3251)"
                >
                  <stop offset="0.72" stop-opacity="0" />
                  <stop offset="0.95" stop-opacity="0.53" />
                  <stop offset="1" />
                </radialGradient>
                <linearGradient
                  id="paint2_linear_221_636"
                  x1="20.0694"
                  y1="12.4599"
                  x2="6.14725"
                  y2="27.6244"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1B9DE2" />
                  <stop offset="0.16" stop-color="#1595DF" />
                  <stop offset="0.67" stop-color="#0680D7" />
                  <stop offset="1" stop-color="#0078D4" />
                </linearGradient>
                <radialGradient
                  id="paint3_radial_221_636"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(9.8024 24.8732) rotate(-81.3844) scale(17.9262 14.4826)"
                >
                  <stop offset="0.76" stop-opacity="0" />
                  <stop offset="0.95" stop-opacity="0.5" />
                  <stop offset="1" />
                </radialGradient>
                <radialGradient
                  id="paint4_radial_221_636"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(4.21291 5.92143) rotate(92.2906) scale(25.3211 53.9287)"
                >
                  <stop stop-color="#35C1F1" />
                  <stop offset="0.11" stop-color="#34C1ED" />
                  <stop offset="0.23" stop-color="#2FC2DF" />
                  <stop offset="0.31" stop-color="#2BC3D2" />
                  <stop offset="0.67" stop-color="#36C752" />
                </radialGradient>
                <radialGradient
                  id="paint5_radial_221_636"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(30.9861 9.67466) rotate(73.7398) scale(12.1661 9.89348)"
                >
                  <stop stop-color="#66EB6E" />
                  <stop offset="1" stop-color="#66EB6E" stop-opacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="flex justify-center mt-9 ml-12 font-inter font-semibold text-md">
            <p>Get Extension For Your Broswer</p>
          </div>
          <div className="  flex justify-center mb-24   ">
            <div className="sm:mr-7">
              <button className=" flex  items-center gap-3 bg-gradient-to-r from-[#7f5af0] to-[#f13bc1] text-white px-6 ml-16 py-3 rounded-full text-md font-inter hover:opacity-90 transition mt-9 ">
                {" "}
                Get Extension For Your Broswer{" "}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.8 19.5H2C1.45 19.5 0.979167 19.3042 0.5875 18.9125C0.195833 18.5208 0 18.05 0 17.5V13.7C0.8 13.7 1.5 13.4458 2.1 12.9375C2.7 12.4292 3 11.7833 3 11C3 10.2167 2.7 9.57083 2.1 9.0625C1.5 8.55417 0.8 8.3 0 8.3V4.5C0 3.95 0.195833 3.47917 0.5875 3.0875C0.979167 2.69583 1.45 2.5 2 2.5H6C6 1.8 6.24167 1.20833 6.725 0.725C7.20833 0.241667 7.8 0 8.5 0C9.2 0 9.79167 0.241667 10.275 0.725C10.7583 1.20833 11 1.8 11 2.5H15C15.55 2.5 16.0208 2.69583 16.4125 3.0875C16.8042 3.47917 17 3.95 17 4.5V8.5C17.7 8.5 18.2917 8.74167 18.775 9.225C19.2583 9.70833 19.5 10.3 19.5 11C19.5 11.7 19.2583 12.2917 18.775 12.775C18.2917 13.2583 17.7 13.5 17 13.5V17.5C17 18.05 16.8042 18.5208 16.4125 18.9125C16.0208 19.3042 15.55 19.5 15 19.5H11.2C11.2 18.6667 10.9375 17.9583 10.4125 17.375C9.8875 16.7917 9.25 16.5 8.5 16.5C7.75 16.5 7.1125 16.7917 6.5875 17.375C6.0625 17.9583 5.8 18.6667 5.8 19.5ZM2 17.5H4.125C4.525 16.4 5.16667 15.625 6.05 15.175C6.93333 14.725 7.75 14.5 8.5 14.5C9.25 14.5 10.0667 14.725 10.95 15.175C11.8333 15.625 12.475 16.4 12.875 17.5H15V11.5H17C17.1333 11.5 17.25 11.45 17.35 11.35C17.45 11.25 17.5 11.1333 17.5 11C17.5 10.8667 17.45 10.75 17.35 10.65C17.25 10.55 17.1333 10.5 17 10.5H15V4.5H9V2.5C9 2.36667 8.95 2.25 8.85 2.15C8.75 2.05 8.63333 2 8.5 2C8.36667 2 8.25 2.05 8.15 2.15C8.05 2.25 8 2.36667 8 2.5V4.5H2V6.7C2.9 7.03333 3.625 7.59167 4.175 8.375C4.725 9.15833 5 10.0333 5 11C5 11.95 4.725 12.8167 4.175 13.6C3.625 14.3833 2.9 14.95 2 15.3V17.5Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>


                <div className="flex flex-col justify-center lg:gap-80 md:flex-row items-center gap-3 mt-20 px-5 md:px-20">
            {/* Left Text Section */}
            <div className="flex flex-col gap-8 text-left max-w-xl">
              <h2 className="text-white text-5xl font-spaceGrotesk">How It Works</h2>
      
              {/* Step 1 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-gray-400 font-spaceGrotesk">1. Ad litora torquent per conubia nostra inceptos</h3>
                <p className="text-gray-500 text-sm font-inter">
                  In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                </p>
              </div>
      
              {/* Step 2 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-white font-spaceGrotesk">2.  Tempus leo eu aenean sed diam</h3>
                <p className="text-gray-300 text-sm font-inter">
                 Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.
                </p>
              </div>
      
              {/* Step 3 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-gray-500 font-spaceGrotesk">3.  Tempus leo eu aenean sed diam urna tempor</h3>
                <p className="text-gray-500 font-inter">
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integess torquent per conubia nostra inceptos himenaeos.
                </p>
              </div>
            </div>
      
            {/* Right Side Image Card with Gradient Border */}
  <div className="relative p-[2px] rounded-[22px] bg-gradient-to-br from-[#1b1e2c] via-[#7982c6] to-[#1b1e2c] shadow-[12_12_12px_#202436] w-fit">
  <div className="relative w-[300px] sm:w-[400px] md:w-[460px] lg:w-[380px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[380px] rounded-[20px] overflow-hidden bg-[#5f6980]">
    <img
      src={img1}
      alt="video"
      className="w-full h-full object-cover rounded-[20px]"
    />

    {/* Play Icon Overlay */}
    <div className="absolute inset-0 flex items-center justify-center hover:bg-black/30 transition duration-300">
      <div className="bg-white rounded-full p-3 shadow-md hover:scale-105 transition">
        <FaPlay className="text-black text-lg ml-[2px]" />
      </div>
    </div>
  </div>
</div>

          </div>
          <Testimonials/>
          <FAQSection/>
          <Footer/>
    </div>
  );
};

export default Extension;
