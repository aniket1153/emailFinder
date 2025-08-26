import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img1 from "../assets/typing-hands.jpg";

const slides = [
  {
    title: "Industry Leading Accuracy",
    description:
      "We use top-rated email verification APIs that ensure the data you get is as clean and accurate as possible.",
    subdescription:
      "No more wasted outreach on invalid addresses or high bounce rates. Every email you get is validated in real-time, helping you maintain a healthy sender reputation and get your messages seen by the right audience.",
    image: img1,
  },
  {
    title: "Real-Time Validation",
    description:
      "Validate every email instantly and reduce bounce rates. Stay ahead with secure, reliable communication.",
          subdescription:
      "No more wasted outreach on invalid addresses or high bounce rates. Every email you get is validated in real-time, helping you maintain a healthy sender reputation and get your messages seen by the right audience.",
    image: img1,
  },
  {
    title: "Boost Deliverability",
    description:
      "Maximize engagement by ensuring your emails always reach the right inbox.",
          subdescription:
      "No more wasted outreach on invalid addresses or high bounce rates. Every email you get is validated in real-time, helping you maintain a healthy sender reputation and get your messages seen by the right audience.",
    image: img1,
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center w-full px-2 py-8"> 
      {/* ⬆️ removed min-h-screen to avoid huge top gap, added py-8 for balanced padding */}
      <div
        className="
          relative 
          w-full 
          h-[28rem] 
          sm:h-[30rem] 
          md:h-[32rem] 
          lg:h-[25rem] 
          max-w-7xl
        "
      >
        {slides.map((slide, i) => {
          const offset = (i - index + slides.length) % slides.length;

          return (
            <motion.div
              key={i}
              className="
                absolute inset-0 
                flex flex-col md:flex-row 
                gap-6 
                p-6 
                rounded-2xl 
                shadow-xl 
                backdrop-blur-lg 
                border border-white/10
              "
              animate={{
                scale: offset === 0 ? 1 : 0.92,
                opacity: offset === 0 ? 1 : 0.4,
                x: offset === 0 ? 0 : offset === 1 ? 60 : 70,
                y: offset === 0 ? 0 : offset === 1 ? -20 : -40,
                zIndex: offset === 0 ? 20 : 5,
              }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              {/* ✅ Text Section unchanged */}
              <div className="w-full md:w-2/4 flex flex-col justify-center gap-2 text-white">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2">
                  {slide.title}
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg ">
                  {slide.description}
                </p>
                {slide.subdescription && (
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {slide.subdescription}
                  </p>
                )}
              </div>

              {/* ✅ Image Section unchanged */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={slide.image}
                  alt="slide"
                  className="
                    rounded-lg shadow-lg
                    w-full sm:w-4/5 md:w-[280px] lg:w-[360px] xl:w-[420px]
                    h-auto object-cover
                  "
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
