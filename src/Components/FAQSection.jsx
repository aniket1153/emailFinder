import React, { useState } from 'react';
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';

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
    <section className="bg-[#0f0c29] text-white px-4 py-20 md:px-16 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-3xl md:text-4xl font-spaceGrotesk mb-2">FAQ</h2>
        <p className="text-center text-gray-400 text-sm md:text-base mb-10 font-inter">
          Answers to common queries about our platform, features, pricing, and more.
        </p>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg px-6 py-4 transition-all duration-300 border ${
                activeIndex === index
                  ? 'border-[#00A3FF] bg-[#1E2139]'
                  : 'border-[#2E2F4F] bg-[#181A2C] hover:bg-[#1E2035]'
              }`}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-sm md:font-spaceGrotesk ">{faq.question}</span>
                {activeIndex === index ? (
                  <FiMinus className="text-white" />
                ) : (
                  <FiPlus className="text-white" />
                )}
              </div>

              {/* Answer below question */}
              {activeIndex === index && (
                <div className="mt-3 text-xs text-white/90">{faq.answer}</div>
              )}
            </div>
          ))}

          {/* Gradient Answer Banner */}
          {showBanner && (
            <div className="mt-6 bg-gradient-to-r from-[#6B4EFF] to-[#FF4ED9] text-white px-6 py-4 rounded-lg flex justify-between items-start text-sm md:text-base">
              <div>
                <p className="font-spaceGrotesk">
                  Is The Platform Available On Mobile And Browser Extensions?
                </p>
                <p className="text-xs mt-1 text-white/90">
                  Yes! The platform is accessible via Web, Android, iOS, and browser extensions for Chrome, Firefox, and Edge — so you can work from anywhere.
                </p>
              </div>
              <button
                className="ml-4 text-white/90 hover:text-white"
                onClick={() => setShowBanner(false)}
              >
                <FiX size={18} />
              </button>
            </div>
          )}
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
