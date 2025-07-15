import React from "react";
import {  FaArrowRight, FaShoppingBag } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
 import { FiCheck  } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import UserIconButton from "./UserIconButton";
import LockCircleIcon from "./LockCircleIcon";

const SimplePlans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b  px-4 py-28 lg:mt-12 relative">
       <div className="absolute inset-0 z-0">
        <div className="absolute top-[-6%] left-[40%] w-[600px] h-[500px] bg-pink-500 rounded-full opacity-14 blur-3xl" />
  
        

      </div>
      {/* Heading */}
      <div className="text-center text-white mb-10 relative">
        <h2 className="text-3xl text-white md:text-4xl font-spaceGrotesk mb-2 relative">
          Simple Plans, Powerful Results
        </h2>
        <p className="text-sm text-gray-400 max-w-xl mx-auto font-inter relative">
          Choose the plan that fits your goals. Scale up your outreach with verified emails, no hidden fees, cancel anytime.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center relative">
        {/* Background Blur Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-2%] left-[40%] w-96 h-96 rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-20 right-1 w-[600px] h-[500px] rounded-full opacity-15 blur-3xl" />
          <div className="absolute bottom-[30%] left-[12.5%] w-[600px] h-[500px] bg-pink-500 rounded-full opacity-15 blur-3xl" />
        </div>
      
        {/* CARD 1: Pay As You Go */}
        <div className="flex group flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] hover:bg-gradient-to-b hover:from-[#6B4EFF] hover:to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg transition-colors duration-300 relative z-10">
          <h3 className="text-lg font-spaceGrotesk mb-6">Pay As You Go</h3>
          <div className="text-4xl font-spaceGrotesk mb-1 flex items-center">
            Free <span className="text-[1rem] text-gray-300 ml-2 mt-4">$200 Of Credit</span>
          </div>
          <p className="text-[1rem] text-white mb-7 font-inter">
            Then pay-as-you-go. No minimums. No expiration. No credit card required.
          </p>
          <div className="w-full text-lg  bg-[#444057] group-hover:bg-white group-hover:text-black transition-colors duration-200 py-3 rounded-full font-inter flex items-center justify-center   mb-7">
            <div className="mr-19 ml-22">Sign Up Free</div> <div className=" "><UserIconButton className="bg-gray-900 min-h-screen ml-7 flex items-center justify-center"/></div>
          </div>
          <ul className="space-y-3 text-[1rem] font-inter">
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Access all endpoints in public models
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              <div>
                <div className="mb-3">Concurrency Limits</div>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Speech-to-text:</li>
                  <div className="ml-2">- Up to 100 for the REST API</div>
                  <div className="ml-2">- Up to 50 for the WSS API</div>
                  <div className="ml-2">- Up to 5 for Deepgram Whisper Cloud</div>
                  <li>Text-to-speech:</li>
                  <div className="ml-2">- Up to 5 for the REST API + WSS API</div>
                  <li>Voice Agent API:</li>
                  <div className="ml-2">- Up to 5 for the WSS API</div>
                  <li>Audio Intelligence:</li>
                  <div className="ml-2">- Up to 10 for the REST API</div>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Discord and community help
            </li>
          </ul>
        </div>
      
        {/* CARD 2: Growth */}
        <div className="flex group flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] hover:bg-gradient-to-b hover:from-[#6B4EFF] hover:to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg transition-colors duration-300 relative z-10 cursor-pointer hover:cursor-default">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-spaceGrotesk ">Growth</h3>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-[15px] px-4 py-2 rounded-3xl font-spaceGrotesk  shadow-md">
              Most Popular
            </div>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl font-spaceGrotesk">$4k+</div>
            <div className="text-sm">/ Year</div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-xs px-2 py-1 rounded-md">
              Save Up To <strong>20%</strong>
            </div>
          </div>
          <p className="text-[1rem] font-inter mb-7">
            With pre-paid credits for the year. Credits are redeemed against actual usage.
          </p>
          <div className="w-full  bg-[#444057] group-hover:bg-white group-hover:text-black transition-colors duration-200 py-3 rounded-full font-inter flex items-center justify-center  text-lg  mb-7">
            <div className="mr-24 ml-24">Buy now</div> <div className=" "><LockCircleIcon className="bg-gray-900 min-h-screen ml-7 flex items-center justify-center"/></div>
          </div>
          <ul className="space-y-3 text-[1rem] font-inter">
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Access all endpoints in public models
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              <div>
                <div className="mb-3">Concurrency Limits</div>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Speech-to-text:</li>
                  <div className="ml-2">- Up to 100 for the REST API</div>
                  <div className="ml-2">- Up to 50 for the WSS API</div>
                  <div className="ml-2">- Up to 5 for Deepgram Whisper Cloud</div>
                  <li>Text-to-speech:</li>
                  <div className="ml-2">- Up to 5 for the REST API + WSS API</div>
                  <li>Voice Agent API:</li>
                  <div className="ml-2">- Up to 5 for the WSS API</div>
                  <li>Audio Intelligence:</li>
                  <div className="ml-2">- Up to 10 for the REST API</div>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Discord and community help
            </li>
          </ul>
        </div>
      
        {/* CARD 3: Enterprise */}
        <div className="flex group flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] hover:bg-gradient-to-b hover:from-[#6B4EFF] hover:to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg transition-colors duration-300 relative z-10">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-spaceGrotesk">Enterprise</h3>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl font-spaceGrotesk">$15k+</div>
            <div className="text-sm">/ Year</div>
          </div>
          <p className="text-[1rem] font-inter mb-4">
            For businesses with large volumes, data or deployment requirements, or support needs.
          </p>
           <div className="w-full  bg-[#444057] group-hover:bg-white group-hover:text-black transition-colors duration-200 py-3 rounded-full font-inter flex items-center justify-center  text-lg  mb-7">
            <div className="mr-24 ml-24">Buy now</div> <div className=" "><LockCircleIcon className="bg-gray-900 min-h-screen ml-7 flex items-center justify-center"/></div>
          </div>
          <ul className="space-y-10 text-[1rem] font-inter">
            <li className="flex items-start gap-2">
              <FiCheck size={23} className="mt-1" />
              Access all endpoints in public models with our best discounts
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Priority access to new endpoints and models
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Highest concurrency support
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Self-hosted deployment options
            </li>
            <li className="flex items-start gap-2">
              <FiCheck size={16} className="mt-1" />
              Paid Support plans available
            </li>
            <li className="flex items-start gap-2 mt-2">
              <FiCheck size={16} className="mt-1" />
              Discord and community help
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimplePlans;
