import { useLocation, useSearchParams } from "react-router-dom";
import LoginImage from "../assets/first.png";
import SignupImage from "../assets/second.png";
import { FaEye } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { showGlobalToast } from "../utils/toastService";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const mode = queryParams.get("mode");

  const [isLogin, setIsLogin] = useState(mode !== "signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const { error, signIn, requestOTP } = useAuth();

  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLogin(mode !== "signup");
  }, [mode]);

  // Email regex for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      showGlobalToast("Please enter a valid email address.", "error");
      return;
    }
    if (isLogin) {
      signIn(email, password);
    } else {
      if (!agree) {
        showGlobalToast("You must agree to the terms to sign up.", "error");
        return;
      }
      requestOTP({ email, password });
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center  px-4 relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[42%] w-[600px] h-[500px]    rounded-full opacity-15 blur-3xl" />
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
                className={`w-1/2 text-sm md:text-base py-2.5 rounded-full cursor-pointer ${
                  isLogin
                    ? "bg-gradient-to-r from-purple-500 to-pink-600 text-white"
                    : "text-black"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`w-1/2 text-sm md:text-base py-2.5 rounded-full cursor-pointer ${
                  !isLogin
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-black"
                }`}
              >
                Create An Account
              </button>
            </div>

            {/* Social Buttons */}
            {/*   <div className="space-y-4 mb-4">
              <button className="flex items-center justify-center w-full cursor-pointer border border-white hover:border-blue-500 py-2 rounded-full text-white gap-2">
                <img
                  src="https://img.icons8.com/color/20/000000/google-logo.png"
                  alt="google"
                />
                {isLogin ? "Login With Google" : "Sign Up With Google"}
              </button>
            </div> */}

            {/* Divider */}

            {/* <div className="flex items-center text-gray-400 text-sm mb-4">
              <div className="flex-1 h-px bg-gray-600" />
              <span className="px-3">Or</span>
              <div className="flex-1 h-px bg-gray-600" />
            </div>*/}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email you@yourmail.com"
                className="w-full px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-gray-500 text-sm focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 bg-transparent border border-white rounded-full text-white placeholder-gray-500 text-sm focus:outline-none pr-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {isLogin && (
                  <span className="absolute right-3 top-2.5 text-gray-400 cursor-pointer text-sm">
                    <FaEye size={23} />
                  </span>
                )}
              </div>

              {!isLogin && (
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <span>
                    I agree to the Terms of service and Privacy policy.
                  </span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500  text-white rounded-full flex items-center justify-center cursor-pointer"
                // disabled={loading || (!isLogin && !agree)}
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
                    {isLogin ? "Login Now" : "Sign Up"}
                  </span>
                ) : isLogin ? (
                  "Login Now"
                ) : (
                  "Sign Up"
                )}
              </button>
              {error && (
                <p className="text-center text-xs text-red-400 mt-2">{error}</p>
              )}

              {isLogin && (
                <p className="text-center text-xs text-gray-400 mt-2">
                  Forgot Your Password?{" "}
                  <span className="underline cursor-pointer">
                    Reset It Here.
                  </span>
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
