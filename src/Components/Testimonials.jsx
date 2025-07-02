import React from 'react'

const testimonials = () => {
  const testimonials = [
  {
    name: 'Rohit Sinha',
    title: 'Founder @ PilotEase',
    message:
      'As a startup founder, I needed to reach potential investors and partners fast. This tool saved me hours of research by giving me verified email leads in seconds. The accuracy is impressive, and the UI is refreshingly clean.',
    avatar: 'https://i.pravatar.cc/100?img=1',
  },
  {
    name: 'Anjali Mehta',
    title: 'Growth Marketer @ ClickMark Digital',
    message:
      "I've used several email tools, but none offered the combination of email search and verification in one dashboard like this does. It’s now a crucial part of my lead generation strategy.",
    avatar: 'https://i.pravatar.cc/100?img=2',
  },
  {
    name: 'Sandeep Roy',
    title: 'Technical Recruiter @ TalentX',
    message:
      'Finding valid emails for niche tech roles used to be a headache. Now, I just enter a title, and I get what I need instantly. Improved placement rate by 30%.',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Imran Siddiqui',
    title: 'PM @ AI-AssistLed Agency',
    message:
      'Managing multiple client campaigns means I need tools that work fast and scale easily. The admin dashboard and bulk features give me total control across teams.',
    avatar: 'https://i.pravatar.cc/100?img=4',
  },
  {
    name: 'Maya Thomas',
    title: 'Sales Manager @ Lead.com',
    message:
      'The ROI we’ve seen after switching to this email finder is insane. Fewer bounces, more replies, and our SDRs are finally spending more time closing instead of chasing dead emails.',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Karan B',
    title: 'Director @ RevGen',
    message:
      'We manage outreach for multiple B2B clients. This tool scaled with us easily and gave our team a unified dashboard — total game-changer.',
    avatar: 'https://i.pravatar.cc/100?img=6',
  },
];
  return (
    <div>

      <section className=' text-white py-20 px-4 md:px-16'>
        <div className='text-center  mb-12'>
          <h2 className='text-3xl md:text-4xl font-semibold mb-4'>Trusted by Teams Worldwide</h2>
        <p className='text-gray-400 text-sm md:text-base max-w-2xl mx-auto'>   Thousands of businesses rely on us to improve their email outreach and lead generation. Here’s what some of them have to say about how our platform helps them work faster, smarter, and more efficiently.
        </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
          {
            testimonials.map((t,i)=>(
              <div key={i} className='rounded-2xl p-4 bg-gradient-to-br from-[#1c1e2f] to-[#15172a] border border-[#2a2d4a] text-sm text-gray-300'>
                <p className='mb-6 leading-relaxed'>
"{t.message}"
                </p>
                <div className='flex items-center gap-4'>
                  <img src={t.avatar} alt={t.name} className='w-10 h-10 rounded-full border border-gray-300'/>
                  <div>
                    <p className='font-medium text-white'>
                     {t.name}
                    </p>
                    <p className='text-xs text-gray-400'>
                      {t.title}
                    </p>
                  </div>
                </div>

              </div>
            ))
          }


        </div>

      </section>
    </div>
  )
}

export default testimonials