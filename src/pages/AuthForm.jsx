import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginImage from "../assets/first.png";
import SignupImage from "../assets/second.png";
import { FaEye } from "react-icons/fa";

const AuthForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode");

  const [isLogin, setIsLogin] = useState(mode !== "signup");

  useEffect(() => {
    setIsLogin(mode !== "signup");
  }, [mode]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center  px-4 relative">
       <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[42%] w-[600px] h-[500px] bg-white   rounded-full opacity-15 blur-3xl" />
        <div className="absolute top-20 right-10 w-[600px] h-[500px] bg-gray-400  rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-[-10%] left-1/8  rounded-full opacity-15 blur-3xl" />
        

      </div>
      <div className="flex flex-col md:flex-row items-center gap-28 relative">
        {/* Left Card */}
        <div className="bg-gradient-to-b from-[#2b2b2d] to-[#1b1c1e] p1 rounded-2xl shadow-xl border border-blue-600">
          <div className="bg-[#57565B] rounded-2xl p-6 w-[340px] md:w-[450px]">
            {/* Toggle Buttons */}
            <div className="flex items-center justify-between bg-white p-1 rounded-full mb-6">
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 text-sm md:text-base py-2.5 rounded-full ${
                  isLogin
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                    : "text-black"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 text-sm md:text-base py-2.5 rounded-full ${
                  !isLogin
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-black"
                }`}
              >
                Create An Account
              </button>
            </div>

            {/* Social Buttons */}
            <div className="space-y-4 mb-4">
              <button className="flex items-center justify-center w-full border border-white hover:border-blue-500 py-2 rounded-full text-white gap-2">
                <img src="https://img.icons8.com/color/20/000000/google-logo.png" alt="google" />
                {isLogin ? "Login With Google" : "Sign Up With Google"}
              </button>
              <button className="flex items-center justify-center w-full border py-2 rounded-full hover:border-blue-500 text-white gap-2">
                <img src="https://img.icons8.com/color/20/000000/microsoft.png" alt="microsoft" />
                {isLogin ? "Login With Microsoft" : "Sign Up With Microsoft"}
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center text-gray-400 text-sm mb-4">
              <div className="flex-1 h-px bg-gray-600" />
              <span className="px-3">Or</span>
              <div className="flex-1 h-px bg-gray-600" />
            </div>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email you@yourmail.com"
                className="w-full px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-gray-500 text-sm focus:outline-none"
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-gray-500 text-sm focus:outline-none pr-10"
                />
                {isLogin && (
                  <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer text-sm">
                    <FaEye size={23} />
                  </span>
                )}
              </div>

              {!isLogin && (
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <input type="checkbox" className="mt-1" />
                  <span>I agree to the Terms of service and Privacy policy.</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full"
              >
                {isLogin ? "Login Now" : "Sign Up"}
              </button>

              {isLogin && (
                <p className="text-center text-xs text-gray-400 mt-2">
                  Forgot Your Password?{" "}
                  <span className="underline cursor-pointer">Reset It Here.</span>
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="hidden md:block relative">
          <img
            src={isLogin ? LoginImage : SignupImage}
            alt="auth-illustration"
            className="max-w-[350px] md:max-w-[550px] relative"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
