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

      <div className="bg-[#1b1f30] rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-[#2e3248] max-w-7xl w-full mx-auto mt-10 flex items-center gap-6">
        {/* Search box */}
        <div className="w-[45%] h-[70px] flex items-center">
          <SearchRecords isvisible={true} />
        </div>

        {/* Image */}
        <div className="w-[95%]">
          <img
            src={table}
            alt="Search Illustration"
            className="w-full h-[500px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* {How It Works} */}

      <div className="flex flex-col justify-center lg:gap-80 md:flex-row items-center gap-3 mt-20 px-5 md:px-20 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-2%] left-[40%] w-96 h-96  rounded-full opacity-20 blur-3xl" />
          <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
          <div className="absolute bottom-[-10%] left-1/8 w-[600px] h-[500px] bg-pink-500 rounded-full opacity-15 blur-3xl" />
        </div>
        {/* Left Text Section */}
        <div className="flex flex-col gap-8 text-left max-w-xl relative">
          <h2 className="text-white text-5xl font-spaceGrotesk ">
            How It Works
          </h2>

          {/* Step 1 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-400 font-spaceGrotesk">
              1. Enter A Name Or Domain
            </h3>
            <p className="text-gray-500 text-sm font-inter">
              Start by entering the person’s name and their company, or just the
              company’s domain (e.g., example.com). Our system will start
              searching immediately.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-spaceGrotesk">
              2. We Search Public Sources
            </h3>
            <p className="text-gray-300 text-sm font-inter">
              Our tool scans thousands of publicly available web pages,
              professional profiles, corporate websites, and social platforms to
              locate matching email patterns.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-spaceGrotesk">
              3. Verify Every Email
            </h3>
            <p className="text-gray-500 font-inter">
              Our tool scans thousands of publicly available web pages,
              professional profiles, corporate websites, and social platforms to
              locate matching email patterns.
            </p>
          </div>
        </div>

        {/* Right Side Image Card with Gradient Border */}
        <div className="bg-gradient-to-r from-[#7b2ff7] to-[#f107a3] p-[2px] rounded-2xl shadow-xl">
          <div className="relative w-[300px] sm:w-[400px] md:w-[460px] lg:w-[380px] h-[300px] sm:h-[400px] md:h-[460px] lg:h-[380px] rounded-2xl overflow-hidden bg-[#111827]">
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
      <Footer />
    </div>
  );
};

export default Home;
