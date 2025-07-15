import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { FaPlus, FaShoppingBag } from 'react-icons/fa'
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
 import { FiCheck  } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import FAQSection from '../Components/FAQSection';
import Footer from '../Components/Footer';

const ComparisonTable = () => (

  <div className="overflow-x-auto mt-6 rounded-xl border border-[#3F4550]  shadow-md relative">
    <table className="w-full text-sm text-white font-inter rounded-xl overflow-hidden relative">
      <thead>
        <tr className=" text-left relative">
          <th className="px-6 py-4 font-medium"> </th>
          <th className="px-6 py-4 font-medium">1</th>
          <th className="px-6 py-4 font-medium">2</th>
          <th className="px-6 py-4 font-medium">Unlimited</th>
        </tr>
      </thead>
      <tbody className='releative'>
        {[
          ['Members', '1', '2', 'Unlimited'],
          ['Workspaces', '1', '10', 'Unlimited'],
          ['File Size', '10 MB', '250 MB', '1 GB'],
          ['File Storage', '250 MB', '100 GB', '1 TB'],
          ['Automation Flows', '5', '100', 'Unlimited'],
          ['Tasks Completed', '150 / Month', '10,000 / Month', 'Custom'],
          ['Shared AI Usage For Teams', '✕', '✓', '✓'],
        ].map(([label, col1, col2, col3], index, arr) => (
          <tr
            key={index}
            className={`border-t border-[#3F4550] ${
              index === arr.length - 1 ? 'rounded-b-xl' : ''
            }`}
          >
            <td className="px-6 py-4 text-white/90">{label}</td>
            <td className="px-6 py-4 text-white/90">{col1}</td>
            <td className="px-6 py-4 text-white/90">{col2}</td>
            <td className="px-6 py-4 text-white/90">{col3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Pricing = () => {
    const[isCardhover,setIsCardhover] =useState(false)
    const faqs = [
  {
    question: 'AI Agents',
 
  },
  {
    question: 'Agent Knowledge & Memory',
    
  },
  {
    question: 'Automation & Tools',

  },
  {
    question: 'Productivity',

  },
  {
    question: 'Collaboration',
    
  },
  {
    question: 'Roles and Permissions',
    
  },
  {
    question: 'Communication',
    
  },
  {
    question:"Project Views",
  },
   {
    question:"Integrations",
  },
  {
    question:"Security & Administration"
  },
  {
question:"Customer Favorites"
  },
  {
    question:"Personalizations"
  },{
    question:"Support"
  },{
    question:"Usage"
  }
];
const [activeIndex, setActiveIndex] = useState(null);
  const [showBanner, setShowBanner] = useState(true);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
   <div className='w-[100%]'>
     <div className='w-full  text-white py-20 px-4 md:px-12 lg:px-12 font-sans'>
        <div className=" text-white mb-10 lg:ml-18">
        <h2 className="text-4xl md:text-4xl font-spaceGrotesk mb-2">
          Simple Plans, Powerful Results
        </h2>
        <p className="text-md text-gray-400 max-w-xl  font-inter">
          Choose the plan that fits your goals. Scale up your outreach with verified emails, no hidden fees, cancel anytime.
        </p>
      </div>
<div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center relative">
  {/* Background Blur Effects */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-[-2%] left-[40%] w-96 h-96 rounded-full opacity-20 blur-3xl" />
    <div className="absolute top-20 right-1 w-[600px] h-[500px] rounded-full opacity-15 blur-3xl" />
    <div className="absolute bottom-[30%] left-[12.5%] w-[600px] h-[500px] bg-pink-500 rounded-full opacity-15 blur-3xl" />
  </div>

  {/* CARD 1: Pay As You Go */}
  <div className="flex group flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] hover:bg-gradient-to-b hover:from-[#6B4EFF] hover:to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg transition-colors duration-300 relative z-10">
    <h3 className="text-lg font-spaceGrotesk mb-7">Pay As You Go</h3>
    <div className="text-4xl font-spaceGrotesk mb-1 flex items-center">
      Free <span className="text-[1rem] text-gray-300 ml-2 mt-4">$200 Of Credit</span>
    </div>
    <p className="text-[1rem] text-white mb-5 font-inter">
      Then pay-as-you-go. No minimums. No expiration. No credit card required.
    </p>
    <button className="w-full bg-[#444057] group-hover:bg-white group-hover:text-black transition-colors duration-200 py-3 rounded-full font-inter flex items-center justify-center gap-2 text-sm mb-7">
      Sign Up Free <BsPersonCircle size={23} />
    </button>
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
  <div className="flex group flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] hover:bg-gradient-to-b hover:from-[#6B4EFF] hover:to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg transition-colors duration-300 relative z-10">
    <div className="flex justify-between items-center mb-3">
      <h3 className="text-lg font-spaceGrotesk">Growth</h3>
      <div className="bg-white/10 backdrop-blur-md border border-white/20 text-[15px] px-4 py-2 rounded-3xl font-spaceGrotesk shadow-md">
        Most Popular
      </div>
    </div>
    <div className="flex items-center gap-3 mb-2">
      <div className="text-4xl font-spaceGrotesk">$4k+</div>
      <div className="text-sm">/ Year</div>
      <div className="bg-[#4F456B] text-xs px-2 py-1 rounded-md">
        Save Up To <strong>20%</strong>
      </div>
    </div>
    <p className="text-[1rem] font-inter mb-4">
      With pre-paid credits for the year. Credits are redeemed against actual usage.
    </p>
    <button className="w-full bg-[#444057] group-hover:bg-white group-hover:text-black transition-colors duration-200 py-3 rounded-full font-inter flex items-center justify-center gap-2 text-sm mb-7">
      Buy Now <FaShoppingBag className="text-base" />
    </button>
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
    <button className="w-full bg-[#444057] group-hover:bg-white group-hover:text-black transition-colors duration-200 py-3 rounded-full font-inter flex items-center justify-center gap-2 text-sm mb-10">
      Buy Now <FaShoppingBag className="text-base" />
    </button>
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
     <div className=" text-white px-4 py-20 md:px-16 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center   text-3xl md:text-4xl font-spaceGrotesk mb-3">Compare plans and features</h2>
          <p className="text-center mx-auto text-gray-400 text-sm md:text-base mb-10 font-inter max-w-3xl px-2">
            Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada hendrerit litora torquent per conubia nostra inceptos himenaeos.
          </p>
       <div className='bg-[#1E2035] border border-[#4D424D] mb-5 p-3 w-full rounded-2xl text-sm font-inter overflow-x-auto'>
            <div className='flex justify-between min-w-[440px] sm:min-w-0 sm:grid grid-cols-4' >
        <p>Features</p>
        <p>Free</p>
        <p>Growth</p>
        <p>Enterprise</p>
    </div>
       </div>

          <div className="flex flex-col gap-3 relative z-10"> 
  <div className="absolute inset-0 z-0">
    <div className="absolute top-[-2%] left-[40%] w-96 h-96 rounded-full opacity-20 blur-3xl" />
    <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
    <div className="absolute bottom-[5%] left-1/12 w-[600px] h-[550px] bg-white rounded-full opacity-6 blur-3xl" />
  </div>

  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`px-6 py-4 transition-all duration-300 border-b border-b-[#3F4550] relative ${activeIndex === index ? 'relative' : ''}`}
    >
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <span className="text-sm md:font-spaceGrotesk">{faq.question}</span>
        {activeIndex === index ? (
          <RxCross1 className="text-white" />
        ) : (
          <FaPlus className="text-white" />
        )}
      </div>

      {activeIndex === index && (
        <div className="mt-3 text-xs text-white/90 space-y-4">
          {faq.answer && <p>{faq.answer}</p>}
          <ComparisonTable />
        </div>
      )}
    </div>
  ))}
</div>


          <div className="mt-10 flex justify-center">
            <button className="bg-[#2E2F4E] text-white text-xs px-6 py-2 rounded-full border border-[#5A5B73] hover:bg-[#3a3c5a]">
              Still have a Question? <span className="underline ml-1">Contact Us</span>
            </button>
          </div>
        </div>
      </div>
      <FAQSection/>
      <Footer/>
   </div>
  )
}

export default Pricing