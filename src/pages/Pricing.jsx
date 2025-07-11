import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { FaPlus, FaShoppingBag } from 'react-icons/fa'
import { FiPlus, FiMinus, FiX } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';
import { RxCross1 } from 'react-icons/rx';
import FAQSection from '../Components/FAQSection';
import Footer from '../Components/Footer';

const ComparisonTable = () => (
  <div className="overflow-x-auto mt-6 rounded-xl border border-[#3F4550] bg-[#1E2035] shadow-md relative">
    <table className="w-full text-sm text-white font-inter rounded-xl overflow-hidden">
      <thead>
        <tr className="bg-[#1E2035] text-left relative">
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
     <div className='w-full  text-white py-20 px-4 md:px-12 font-sans'>
        <div className=" text-white mb-10 lg:ml-18">
        <h2 className="text-4xl md:text-4xl font-spaceGrotesk mb-2">
          Simple Plans, Powerful Results
        </h2>
        <p className="text-md text-gray-400 max-w-xl  font-inter">
          Choose the plan that fits your goals. Scale up your outreach with verified emails, no hidden fees, cancel anytime.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center relative">
          <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-20 right-1  w-[600px] h-[500px]  rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-[30%] left-1/8 w-[600px] h-[500px] bg-pink-500  rounded-full opacity-15 blur-3xl" />
        

      </div>
              {/* CARD 1: Pay As You Go */}
              <div className="flex flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248]  hover:bg-gradient-to-b from-[#6B4EFF] to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg">
                <h3 className="text-lg font-spaceGrotesk mb-7">Pay As You Go</h3>
                <div className="text-4xl font-spaceGrotesk mb-1 flex flew-row ">Free <div className="text-sm text-gray-300  mb-4 mt-4 ml-1">$200 Of Credit</div></div>
                
                <p className="text-sm x` text-white mb-5 font-inter ">
                  Then pay-as-you-go. No minimums. No expiration. No credit card required.
                </p>
      
                <button className="w-full bg-[#444057] hover:bg-white hover:text-black transition-colors duration-200 text-white py-3 rounded-full font-inter flex items-center justify-center gap-2 text-sm mb-7 relative">
                  Sign Up Free <BsPersonCircle className="" size={23} />
                </button>
      
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-inter mb-2 relative">✔</span>
                    Access all endpoints in public models
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-green-400">✔</span>
                    <div>
                      <div className="font-inter text-white mb-3">Concurrency Limits</div>
                      <ul className="list-disc list-inside space-y-2 text-white font-inter mb-3 relative">
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
              <div className="flex flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] hover:bg-gradient-to-b from-[#6B4EFF] to-[#FC4B94] text-white rounded-2xl p-5 sm:p-8 w-full max-w-[400px] shadow-lg relative">
                <div className="absolute top-4 right-4 bg-gray-700 text-xs px-2 py-1 rounded-md font-spaceGroteskmb ">Most Popular</div>
                <h3 className="text-lg font-spaceGrotesk mb-8 relative">Growth</h3>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl font-spaceGrotesk mb-2">$4k+</div>
                  <div className="text-sm text-white">/ Year</div>
                  <div className="bg-[#4F456B] text-xs px-2 py-1 rounded-md">
                    Save Up To <strong>20%</strong>
                  </div>
                </div>
                <p className="text-sm text-white  font-inter mb-5">
                  With pre-paid credits for the year. Credits are redeemed against actual usage.
                </p>
                <button className="w-full bg-[#444057] hover:bg-white hover:text-black transition-colors duration-200  py-3 rounded-full font-inter flex items-center justify-center gap-2 text-sm mb-7">
                  Buy Now <FaShoppingBag className="text-base transition-colors duration-200 " />
                </button>
                <ul className="space-y-3 text-sm text-white">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-inter mb-1">✔</span>
                    Access all endpoints in public models
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 ">✔</span>
                    <div>
                      <div className="font-inter text-white mb-2">Concurrency Limits</div>
                      <ul className="list-disc list-inside space-y-1 text-white font-inter mb-3">
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
     <div className="bg-[#0f0c29] text-white px-4 py-20 md:px-16 ">
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

          <div className="flex flex-col gap-3 relative">
              <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/8 w-[600px] h-[500px] bg-white rounded-full opacity-15 blur-3xl" />
        

      </div>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`px-6 py-4 transition-all duration-300 border-b border-b-[#3F4550] relative ${activeIndex === index ? 'bg-[#1E2139] relative' : ''}`}
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
              Still have a question? <span className="underline ml-1">Contact Us</span>
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