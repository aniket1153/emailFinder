import React, { useState } from 'react';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';

const faqs = [
  {
    question: 'What Is The Email Finder & Verifier Platform?',
    answer: 'It is a powerful tool that helps you find and verify email addresses quickly and accurately.',
  },
  {
    question: 'How Does The Email Finder Work?',
    answer: 'It uses advanced algorithms and APIs to locate valid email addresses from the web and social signals.',
  },
  {
    question: 'How Accurate Is Your Email Verification?',
    answer: 'Our system checks MX records, syntax, domain health, and spam traps to deliver 98%+ accuracy.',
  },
  {
    question: 'Can I Try The Platform Before Buying?',
    answer: 'Yes, we offer a limited free trial so you can evaluate the features before purchasing.',
  },
  {
    question: 'What Subscription Plans Do You Offer?',
    answer: 'We offer monthly and annual plans to suit businesses of all sizes, from startups to enterprises.',
  },
  {
    question: 'What Happens When My Subscription Expires?',
    answer: 'You will lose access to premium features but can still view limited historical data.',
  },
  {
    question: 'Which Payment Methods Are Supported?',
    answer: 'We accept all major credit cards, PayPal, and Stripe. Invoices available on request.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className=" text-white px-4 py-20 md:px-16 font-sans relative ">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-15 right-160 w-[750px] h-[580px] bg-pink-500 rounded-full opacity-9 blur-3xl" />
        <div className="absolute right-150 bottom-[-22%] w-[500px] h-[500px] bg-pink-500  rounded-full opacity-9 blur-3xl" />
        

      </div>
      <div className="max-w-7xl mx-auto  ">
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-spaceGrotesk mb-2 relative">FAQ</h2>
        <p className="text-center text-gray-200 text-sm md:text-base mb-10 font-inter relative">
          Answers to common queries about our platform, features, pricing, and more.
        </p>

        {/* FAQ List */}
        <div className="flex flex-col gap-3 relative">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`rounded-xl px-6 py-4 transition-all duration-300 border backdrop-blur-md ${
        activeIndex === index
          ? 'border-[#00A3FF] bg-white/10'
          : 'bg-white/5 border border-white/10 hover:bg-white/10'
      }`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <span className="text-sm md:font-spaceGrotesk relative text-white">{faq.question}</span>
        {activeIndex === index ? (
          <RxCross1 className="text-white" />
        ) : (
          <FiPlus className="text-white" />
        )}
      </div>

      {activeIndex === index && (
        <>
          <div className="mt-3 text-xs text-white/90">{faq.answer}</div>

          {showBanner && (
            <div className="mt-6 bg-gradient-to-r from-[#6B4EFF] to-[#FF4ED9] text-white px-6 py-4 rounded-lg flex justify-between items-start text-sm md:text-base shadow-lg backdrop-blur-md">
              <div>
                <p className="font-spaceGrotesk text-xl">{faq.question}</p>
                <p className="text-md mt-1 font-spaceGrotesk text-white/90 relative">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  ))}
</div>


        {/* Footer CTA */}
        <div className="mt-10 flex justify-center">
          <button className="bg-[#2E2F4E] text-white text-xs px-6 py-2 rounded-full border border-[#5A5B73] hover:bg-[#3a3c5a]">
            Still have a question? <span className="underline ml-1">Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
