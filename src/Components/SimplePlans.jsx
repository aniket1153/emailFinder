import React from "react";
import {  FaArrowRight, FaShoppingBag } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";


const SimplePlans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b  px-4 py-28 lg:mt-12">
      {/* Heading */}
      <div className="text-center text-white mb-10">
        <h2 className="text-3xl md:text-4xl font-spaceGrotesk mb-2">
          Simple Plans, Powerful Results
        </h2>
        <p className="text-sm text-gray-400 max-w-xl mx-auto font-inter">
          Choose the plan that fits your goals. Scale up your outreach with verified emails, no hidden fees, cancel anytime.
        </p>
      </div>

      {/* Cards Wrapper */}
      <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center">
        {/* CARD 1: Pay As You Go */}
        <div className="flex flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg">
          <h3 className="text-lg font-spaceGrotesk mb-7">Pay As You Go</h3>
          <div className="text-4xl font-spaceGrotesk mb-1 flex flew-row">Free <div className="text-sm text-gray-300 mb-4 mt-4 ml-1">$200 Of Credit</div></div>
          
          <p className="text-sm text-gray-400 mb-5 font-inter">
            Then pay-as-you-go. No minimums. No expiration. No credit card required.
          </p>

          <button className="w-full bg-[#444057] hover:bg-[#5d5970] transition-colors duration-200 text-white py-3 rounded-full font-inter flex items-center justify-center gap-2 text-sm mb-7">
            Sign Up Free <BsPersonCircle className="" size={23} />
          </button>

          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-inter mb-2">✔</span>
              Access all endpoints in public models
            </li>
            <li className="flex items-start gap-4">
              <span className="text-green-400">✔</span>
              <div>
                <div className="font-inter text-white mb-3">Concurrency Limits</div>
                <ul className="list-disc list-inside space-y-2 text-gray-400 font-inter mb-3">
                  <li>Speech-to-text: <br/> - Up to 100 for the REST API <br />  - Up to 50 for the WSS API <br /> - Up to 5 for Deepgram Whisper Cloud</li>
                  <li>Text-to-speech: <br />- Up to 5 for the REST API + WSS API</li>
                  <li>Voice Agent API: <br />  - Up to 5 for the WSS API</li>
                  <li>Audio Intelligence: <br />- Up to 10 for the REST API</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-inter">✔</span>
              Discord and community help
            </li>
          </ul>
        </div>

        {/* CARD 2: Growth */}
        <div className="flex flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] text-white rounded-2xl p-5 sm:p-8 w-full max-w-[400px] shadow-lg relative">
          <div className="absolute top-4 right-4 bg-gray-700 text-xs px-2 py-1 rounded-md font-spaceGroteskmb">Most Popular</div>
          <h3 className="text-lg font-spaceGrotesk mb-8">Growth</h3>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-4xl font-spaceGrotesk mb-2">$4k+</div>
            <div className="text-sm text-gray-300">/ Year</div>
            <div className="bg-[#4F456B] text-xs px-2 py-1 rounded-md">
              Save Up To <strong>20%</strong>
            </div>
          </div>
          <p className="text-sm text-gray-400  font-inter mb-5">
            With pre-paid credits for the year. Credits are redeemed against actual usage.
          </p>
          <button className="w-full bg-[#444057] hover:bg-[#5d5970] transition-colors duration-200 text-white py-3 rounded-full font-inter flex items-center justify-center gap-5 text-sm mb-8 ">
            Buy Now <FaShoppingBag className="text-white text-base" />
          </button>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-inter mb-1">✔</span>
              Access all endpoints in public models
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 ">✔</span>
              <div>
                <div className="font-inter text-white mb-2">Concurrency Limits</div>
                <ul className="list-disc list-inside space-y-1 text-gray-400 font-inter mb-3">
                  <li>Speech-to-text: <br />- Up to 100 for the REST API <br />- Up to 50 for the WSS API  <br />- Up to 5 for Deepgram Whisper Cloud</li>
                  <li>Text-to-speech: <br /> - Up to 5 for the REST API + WSS API</li>
                  <li>Voice Agent API: <br />- Up to 5 for the WSS API</li>
                  <li>Audio Intelligence:  <br /> -Up to 10 for the Api</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-inter">✔</span>
              Discord and community help
            </li>
          </ul>
        </div>

        {/* CARD 3: Enterprise */}
        <div className="flex flex-col min-h-[680px] bg-gradient-to-b from-[#6B4EFF] to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg">
          <h3 className="text-lg font-spaceGroteskmb mb-5">Enterprise</h3>
          <div className="text-4xl font-spaceGroteskmb mb-5 flex flex-row">$15k+ <div className="text-sm text-white font-inter mt-3.5 ml-1">/ Year</div></div>
          
          <p className="text-sm text-white/90 mb-6 font-inter">
            For businesses with large volumes, data or deployment requirements, or support needs.
          </p>
          <button className="w-full bg-white hover:bg-gray-100 transition-colors duration-200 text-[#1E1B34] py-3 rounded-full font-inter text-sm flex items-center justify-center gap-2 mb-7">
            Buy Now <FaShoppingBag className="text-[#FC4B94] text-base" />
          </button>
          <ul className="space-y-3 text-sm text-white font-inter">
            <li className="flex items-start gap-2"><span>✔</span> Access all endpoints in public models with our best discounts</li>
            <li className="flex items-start gap-2"><span>✔</span> Access to custom-trained speech-to-text models</li>
            <li className="flex items-start gap-2"><span>✔</span> Priority access to new endpoints and models</li>
            <li className="flex items-start gap-2"><span>✔</span> Highest concurrency support</li>
            <li className="flex items-start gap-2"><span>✔</span> Self-hosted deployment options</li>
            <li className="flex items-start gap-2"><span>✔</span> Paid Support plans available</li>
            <li className="flex items-start gap-2"><span>✔</span> Discord and community help</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SimplePlans;
