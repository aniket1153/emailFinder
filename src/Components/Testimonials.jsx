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
        'As a startup founder, I needed to reach potential investors and partners fast. This tool saved me hours of research by giving me verified email leads in seconds..',
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
  const chunkArray = (arr, size) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      const chunk = arr.slice(i, i + size);
      while (chunk.length < size) chunk.push(null);
      chunked.push(chunk);
    }
    return chunked;
  };

  const rows = chunkArray(testimonials, 6); 

  return (
      <section className="text-white py-20 px-4 md:px-16 relative">
         <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-28 right-58 w-[350px] h-[350px] rounded-full bg-pink-500 opacity-15 blur-3xl" />
        <div className="absolute bottom-[-6%] left-1/8 w-[500px] h-[500px] bg-pink-500 rounded-full opacity-15 blur-3xl" />
        

      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-spaceGrotesk mb-4 relative">
          Trusted by Teams Worldwide
        </h2>
        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto font-inter relative">
          Thousands of businesses rely on us to improve their email outreach and
          lead generation. Here’s what some of them have to say about how our
          platform helps them work faster, smarter, and more efficiently.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {rows.map((group, index) => (
          <Swiper
  key={index}
  modules={[Autoplay]}
  loop={true}
  allowTouchMove={false}
  speed={1500}
  autoplay={{
    delay: 1,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    reverseDirection: index % 2 !== 0,
  }}
  breakpoints={{
    0: { slidesPerView: 1, spaceBetween: 16 },
    640: { slidesPerView: 1.2, spaceBetween: 16 },
    768: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 2, spaceBetween: 24 },
    1280: { slidesPerView: 3.5, spaceBetween: 24 },
    1536: { slidesPerView: 4, spaceBetween: 28 },
  }}
  className="w-full group relative"
>

            {group.map((t, i) =>
              t ? (
                <SwiperSlide key={`${t.name}-${i}`}>
                  
                  <div className="rounded-2xl p-5 min-h-[220px] flex flex-col justify-between bg-gradient-to-br from-[#1c1e2f] to-[#15172a] border border-[#2a2d4a] text-sm text-gray-300 hover:scale-[1.02] transition relative">
                    
                    <p className="mb-7 leading-relaxed font-inter relative">"{t.message}"</p>
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
                </SwiperSlide>
              ) : (
                <SwiperSlide key={`empty-${i}`}>
                  <div className="opacity-0 h-[220px]" />
                </SwiperSlide>
              )
            )}
          </Swiper>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
