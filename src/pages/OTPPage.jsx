import { useState } from "react";
import { useLocation } from "react-router-dom";
import { showGlobalToast } from "../utils/toastService";
import OTPImage from "../assets/second.png"; // You can replace with your illustration
import useAuth from "../hooks/useAuth";

const OTPForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const { verifyOTPs } = useAuth();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, ""); // digits only
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      // Move to next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      showGlobalToast("Please enter a valid 6-digit OTP.", "error");
      return;
    }
    try {
      setLoading(true);
      await verifyOTPs({ email, otp: otpValue });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 relative">
      {/* Background Blur Circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[42%] w-[600px] h-[500px] rounded-full opacity-15 blur-3xl" />
        <div className="absolute top-20 right-10 w-[600px] h-[500px] bg-gray-400 rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/8 rounded-full opacity-15 blur-3xl" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-28 relative">
        {/* Left Card */}
        <div className="bg-gradient-to-b from-[#2b2b2d] to-[#1b1c1e] rounded-2xl shadow-xl border border-blue-600">
          <div className="bg-[#57565B] rounded-2xl p-6 w-[340px] md:w-[450px]">
            <h2 className="text-white text-xl md:text-2xl font-semibold mb-4 text-center">
              Enter OTP
            </h2>
            <p className="text-gray-300 text-sm text-center mb-6">
              We’ve sent a 6-digit code to{" "}
              <span className="text-white font-medium">
                {email || "your email"}
              </span>
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* OTP Boxes */}
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    className="w-12 h-12 text-center text-lg font-semibold border border-white bg-transparent text-white rounded-lg focus:outline-none focus:border-blue-500"
                  />
                ))}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center cursor-pointer"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin h-5 w-5 mr-2 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Verify OTP"
                )}
              </button>

              {/* Resend */}
              {/* <p className="text-center text-xs text-gray-400 mt-2">
                Didn’t receive the code?{" "}
                <span className="underline cursor-pointer text-white">
                  Resend OTP
                </span>
              </p> */}
            </form>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:block relative">
          <img
            src={OTPImage}
            alt="otp-illustration"
            className="max-w-[350px] md:max-w-[550px] relative"
          />
        </div>
      </div>
    </div>
  );
};

export default OTPForm;
