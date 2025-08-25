import img1 from "../assets/girl.jpg";
import table from "../assets/table.png";
import { FaPlayCircle } from "react-icons/fa";
import AboutUs from "../Components/AboutUs";
import Testimonials from "../Components/Testimonials";
import WhyChooseUs from "../Components/WhyChooseUs";
import FAQSection from "../Components/FAQSection";
import StatsSection from "../Components/StatsSection";
import Footer from "../Components/Footer";
import Pricing from "./Pricing";
import SearchRecords from "../Components/searchBar";

const Home = () => {
  return (
    <div className=" relative">
      <div className="w-full   py-15 px-4 md:px-5 ">
        <div className="max-w-7xl mx-auto">
          <h1 className=" font-spaceGrotesk  text-4xl sm:text-5xl md:text-6xl text-white font-light leading-tight tracking-tight text-left">
            Find & Verify Professional Emails
          </h1>
          <p className="  font-spaceGrotesk sm:text-6xl  mt-2 tracking-tight text-left text-white ">
            Instantly
          </p>
        </div>
      </div>

     <div className="bg-white/8 backdrop-blur-lg border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl max-w-7xl w-full mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12">
  {/* Search box */}
  <div className="w-full md:w-1/2 flex items-center">
    <SearchRecords isvisible={true} />
  </div>

  {/* Image */}
  <div className="w-full md:w-1/2 lg:w-[95%]">
    <img
      src={table}
      alt="Search Illustration"
      className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover rounded-xl"
    />
  </div>
</div>


      {/* {How It Works} */}

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-60 mt-20 px-5 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
          <div className="absolute bottom-[-10%] left-1/8 w-[600px] h-[500px] bg-pink-500 rounded-full opacity-15 blur-3xl" />
        </div>
        {/* Left Text Section */}
        <div className="flex flex-col gap-8 text-center md:text-left max-w-lg md:max-w-xl relative z-10">
          <h2 className="text-white text-5xl font-spaceGrotesk ">
            How It Works
          </h2>

          {/* Step 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-400 font-spaceGrotesk">Step 1: Search</h3>
            <p className="text-gray-500 text-sm font-inter">
              Enter a domain name, company, job title, or LinkedIn profile to
              instantly discover professional email addresses.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-spaceGrotesk">Step 2: Verify</h3>
            <p className="text-gray-300 text-sm font-inter">
              Our system provides 100% verified emails with real-time accuracy
              checks to ensure reliable connections.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-spaceGrotesk">
              Step 3: Export & Use
            </h3>
            <p className="text-gray-500 font-inter">
              Download results in Excel or CSV with unlimited exports and start
              reaching top decision-makers right away.
            </p>
          </div>
        </div>

        {/* Right Side Image Card with Gradient Border */}
        <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] p-[2px] rounded-2xl shadow-xl relative z-10">
          <div className="relative w-[18rem] sm:w-[22rem] md:w-[26rem] lg:w-[29rem] h-[18.75rem] sm:h-[25rem] md:h-[26rem] lg:h-[23.75rem] rounded-2xl overflow-hidden bg-[#111827]">
            <img
              src={img1}
              alt="video"
              className="w-full h-full object-cover rounded-2xl bg-opacity-10"
            />

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex justify-center items-center  bg-opacity-40 hover:bg-opacity-40 transition duration-300">
              <FaPlayCircle className="text-white text-6xl cursor-pointer hover:scale-105 transition duration-300" />
            </div>
          </div>
        </div>
      </div>
      <Pricing hideComparision={true} />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <FAQSection />
      <StatsSection />
    </div>
  );
};

export default Home;
