import React from 'react';

const stats = [
  {
    value: '3B+',
    description: 'Over 3 billion email lookups completed across various industries.',
  },
  {
    value: '92%',
    description: 'An average email success rate of 92% across all sectors.',
  },
  {
    value: '200M+',
    description: 'A constantly updated lead database for precise outreach.',
  },
  {
    value: '20M+',
    description: 'More than 20 million business profiles refreshed daily for efficient GTM strategies.',
  },
];

const StatsSection = () => {
  return (
    <section className="w-full  text-white py-20 px-4 md:px-12 font-sans relative">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-15 right-100 w-[800px] h-[430px] bg-pink-500 rounded-full opacity-12 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/8  rounded-full opacity-15 blur-3xl" />
        

      </div>
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-spaceGrotesk mb-2 tracking-tight text-white relative">
          Trusted Intelligence at Scale
        </h2>
        <p className="text-[#dfe2f3] text-sm md:text-base mb-12 font-inter relative ">
          Empowering businesses with accurate, high-volume data across every industry.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {stats.map((stat, index) => (
            <div
              key={index}
              className=" bg-gradient-to-br from-[#1E1F2F] to-[#2B1F3C] rounded-xl px-6 py-8 shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
            >
              <div className="text-white text-2xl md:text-5xl font-spaceGrotesk mb-3 ">
                {stat.value}
              </div>
              <p className="text-sm text-[#D1D1DB] leading-snug font-inter">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
