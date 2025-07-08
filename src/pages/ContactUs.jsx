import React from 'react'
import { IoSend } from 'react-icons/io5'

const ContactUs = () => {
  return (
    <div className='bg-[#0f0c29]  min-h-screen py-8 px-4'>
     <div className='w-full  max-w-7xl mx-auto flex flex-col md:flex-row gap-8'>
   {/* Left Content */}
         <div className='md:w-1/2'>
          <h2 className='font-spaceGrotesk text-5xl text-white mb-5 md:mt-27'><span className='font-bold'>Contact</span> Us</h2>
          <p className='text-gray-300 mb-2 font-inter'>We’re here to help whether you’ve got a question, feedback,<br /> or need support.</p>
          <p className='text-white font-spaceGrotesk  font-semibold mt-4 mb-2.5'>General Inquiries</p>
          <p className='text-gray-300 mb-2 font-inter'>Have questions about our plans, features, or how it works?</p>
          <p className='text-gray-400 font-inter'>Email us at:  <span className='text-white'>support@yourdomain.com</span></p>
        </div>
        <div className="bg-[#1b1f30] md:w-1/2 w-full max-w-[608px] p-6 sm:p-8 shadow-xl border border-[#2e3248] rounded-2xl">
          <div className="text-white text-xl font-semibold mb-4">Let’s Talk</div>

          {/* Name input */}
          <div className="h-[60px] w-full rounded-full border border-gray-500 mt-5 bg-white px-4 flex items-center">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent w-full outline-none text-sm text-black"
            />
          </div>

          {/* Email input */}
          <div className="h-[60px] w-full rounded-full border border-gray-500 mt-4 bg-white px-4 flex items-center">
            <input
              type="email"
              placeholder="you@yourmail.com"
              className="bg-transparent w-full outline-none text-sm text-black"
            />
          </div>

          {/* Message box */}
          <div className="h-[160px] w-full rounded-2xl border border-gray-500 mt-5 bg-white p-4">
            <p className="text-black mb-2">Message</p>
            <textarea
              className="w-full h-[80px] resize-none text-sm text-gray-800 focus:outline-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Send Message Button */}
          <div className="mt-6">
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#7f5af0] to-[#f13bc1] text-white px-5 py-3 rounded-full text-md shadow hover:opacity-90 transition"
            >
              Send Message <IoSend size={18} />
            </button>
          </div>
        </div>

     </div>
     
 

      
        
        
     
    </div>
  )
}

export default ContactUs
