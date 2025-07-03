import React from 'react';
import exampleImg from '../assets/typing-hands.jpg'; // Replace with your image

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0f0c29] text-white py-20 px-6 md:px-20 relative font-sans">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-spaceGrotesk mb-2">Why Choose Us</h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-inter">
          We help you reach the right people with confidence, accuracy, and ease. Here's why professionals rely on our platform every day.
        </p>
      </div>

      {/* Card with layered stack effect */}
      <div className="relative w-full md:w-[92%] mx-auto">
        {/* Background border layers (right-bottom) */}
        <div className="absolute top-3 left-3 w-full h-full rounded-2xl bg-[#1a1c2e] border border-[#2b2d44] opacity-40 z-0"></div>
        <div className="absolute top-6 left-6 w-full h-full rounded-2xl bg-[#16182b] border border-[#2d2f4e] opacity-30 z-0"></div>

        {/* Main card */}
        <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#2B2C4B] to-[#2B2C3C] border border-[#2d2f4e] px-8 py-8 md:px-12 md:py-10 flex flex-col md:flex-row gap-8 items-center shadow-xl">
          {/* Vertical step number */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 rotate-[-90deg] text-white text-xs tracking-wider hidden md:block">
            
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="text-xl font-spaceGrotesk mb-3">Industry Leading Accuracy</h3>
            <p className="text-sm text-gray-300 leading-relaxed font-inter">
              We use top-rated email verification APIs that ensure the data you get is as clean and accurate as possible.
              <br /><br />
              No more wasted outreach on invalid addresses or high bounce rates. Every email you get is validated in real-time,
              helping you maintain a healthy sender reputation and get your messages seen by the right audience.
            </p>
          </div>

          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[35%] rounded-xl overflow-hidden">
            <img
              src={exampleImg}
              alt="Keyboard typing"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
