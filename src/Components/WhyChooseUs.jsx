import React from "react";
import Slider from "./Slider";

const WhyChooseUs = () => {
  return (
    <section className="relative text-white py-16 md:py-24 px-6 md:px-20 font-sans overflow-hidden">
      {/* Background Decorative Blobs (UNCHANGED) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-50 right-110 w-[550px] h-[500px] bg-pink-500 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/8 rounded-full opacity-15 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <h2 className="text-3xl md:text-5xl font-spaceGrotesk font-bold mb-3 leading-tight">
          Why Choose Us
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-lg font-inter leading-relaxed mb-1 px-2">
          We help you reach the right people with confidence, accuracy, and ease.
          Here’s why professionals trust and rely on our platform every day.
        </p>

        {/* Slider */}
        <div className="max-w-7xl mx-auto mt-4">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
