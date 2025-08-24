import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboardCardsRequested } from "../redux/slices/dashboard.slice";

const StatsSection = () => {
  const { cards, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardCardsRequested());
  }, [dispatch]);

  return (
    <section className="w-full text-white py-20 px-4 md:px-12 font-sans relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-15 right-100 w-[800px] h-[430px] bg-pink-500 rounded-full opacity-9 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/8  rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-spaceGrotesk mb-2 tracking-tight text-white relative">
          Trusted Intelligence at Scale
        </h2>
        <p className="text-[#dfe2f3] text-sm md:text-base mb-12 font-inter relative ">
          Empowering businesses with accurate, high-volume data across every
          industry.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {loading
            ? // 🔹 Show skeleton loaders when loading
              Array(4)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse bg-gradient-to-br from-[#2C2C3C] to-[#3C2F4A] rounded-xl px-6 py-8 shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                  >
                    <div className="h-10 bg-gray-700 rounded mb-3"></div>
                    <div className="h-4 bg-gray-600 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                  </div>
                ))
            : // 🔹 Show real cards when data is loaded
              cards.map((card, index) => (
                <div
                  key={index}
                  className=" bg-gradient-to-br from-[#1E1F2F] to-[#2B1F3C] rounded-xl px-6 py-8 shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                >
                  <div className="text-white text-2xl md:text-5xl font-spaceGrotesk mb-3">
                    {card.header}
                  </div>
                  <p className="text-sm text-[#D1D1DB] leading-snug font-inter">
                    {card.text}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
