import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Testimonials = () => {
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
    {
      name: 'Neha Kapoor',
      title: 'HR @ CloudHire',
      message:
        'As an HR recruiter, getting access to verified leads has improved our pipeline tremendously. This tool is now part of our daily toolkit.',
      avatar: 'https://i.pravatar.cc/100?img=7',
    },
    {
      name: 'Amit Sharma',
      title: 'Founder @ MailBoost',
      message:
        'We saw 40% increase in response rates just by cleaning our outreach list through this platform. That’s ROI you can’t ignore.',
      avatar: 'https://i.pravatar.cc/100?img=8',
    },
    {
      name: 'Priya Nair',
      title: 'Marketing Head @ ZentoCRM',
      message:
        'Love the clean interface and speed. It lets my team find high-quality leads and verify them in seconds. No more bouncing emails!',
      avatar: 'https://i.pravatar.cc/100?img=9',
    },
    {
      name: 'Manoj Rathi',
      title: 'BDM @ SoftGrid',
      message:
        'Email finder + verifier + bulk tools — all in one dashboard. No-brainer for serious outbound teams.',
      avatar: 'https://i.pravatar.cc/100?img=10',
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
    }
  ];

  // Chunk testimonials into groups of 6 and pad incomplete chunks
  const chunked = [];
  for (let i = 0; i < testimonials.length; i += 6) {
    const chunk = testimonials.slice(i, i + 6);
    while (chunk.length < 6) {
      chunk.push(null); // Add placeholders
    }
    chunked.push(chunk);
  }

  return (
    <section className="text-white py-20 px-4 md:px-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-spaceGroteskmb mb-4">
          Trusted by Teams Worldwide
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-inter">
          Thousands of businesses rely on us to improve their email outreach and
          lead generation. Here’s what some of them have to say about how our
          platform helps them work faster, smarter, and more efficiently.
        </p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={5000}
        loop={true}
        allowTouchMove={false}
        className="w-[100%]"
      >
        {chunked.map((group, index) => (
          <SwiperSlide key={index} className='m-2'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
 {group.map((t, i) =>
  t ? (
    <div
      key={`${t.name}-${i}`}
      className="rounded-2xl p-5 min-h-[220px] flex flex-col justify-between bg-gradient-to-br from-[#1c1e2f] to-[#15172a] border border-[#2a2d4a] text-sm text-gray-300"
    >
      <p className="mb-7 leading-relaxed font-inter">"{t.message}"</p>
      <div className="flex items-center gap-6 mt-auto">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-10 h-10 rounded-full border border-gray-300"
        />
        <div>
          <p className="font-medium text-white">{t.name}</p>
          <p className="text-xs text-gray-400">{t.title}</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      key={`empty-${i}`}
      className="rounded-2xl p-6 min-h-[220px] bg-transparent border border-transparent opacity-0"
    />
  )
)}


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
