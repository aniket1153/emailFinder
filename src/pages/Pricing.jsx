import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FaPlus, FaShoppingBag } from "react-icons/fa";
import { FiPlus, FiMinus, FiX } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { FiCheck } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import FAQSection from "../Components/FAQSection";
import Footer from "../Components/Footer";
import UserIconButton from "../Components/UserIconButton";
import LockCircleIcon from "../Components/LockCircleIcon";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlansRequested } from "../redux/slices/plans.slice";
import { useNavigate } from "react-router-dom";
import usePayment from "../hooks/usePayment";
import useSubscribe from "../hooks/useSubscribe";
import { loginPath } from "../App";

const ComparisonTable = ({ plans }) => {
  // Collect all unique features from all plans
  const allFeatures = Array.from(
    new Set(
      plans.flatMap((plan) =>
        Array.isArray(plan.features)
          ? plan.features.map((f) => (typeof f === "string" ? f : f.name))
          : []
      )
    )
  );

  // Helper to check if a plan has a feature
  const hasFeature = (plan, feature) => {
    if (!Array.isArray(plan.features)) return false;
    return plan.features.some(
      (f) => (typeof f === "string" ? f : f.name) === feature
    );
  };

  return (
    <div className="overflow-x-auto mt-6 rounded-xl border border-[#3F4550] shadow-md relative">
      <table className="w-full text-sm text-white font-inter rounded-xl overflow-hidden relative">
        <thead>
          <tr className="text-left relative">
            <th className="px-6 py-4 font-medium">Feature</th>
            {plans.map((plan, idx) => (
              <th key={idx} className="px-6 py-4 font-medium">
                {plan.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="relative">
          {allFeatures.map((feature, idx) => (
            <tr key={idx} className="border-t border-[#3F4550]">
              <td className="px-6 py-4 text-white/90">{feature}</td>
              {plans.map((plan, pidx) => (
                <td key={pidx} className="px-6 py-4 text-white/90 text-center">
                  {hasFeature(plan, feature) ? (
                    <FiCheck className="text-green-400 mx-auto" size={18} />
                  ) : (
                    <FiX className="text-red-400 mx-auto" size={18} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Pricing = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { hideComparision } = props;
  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  const { plans, loading } = useSelector((state) => state.plans);
  const { loading: subscribeLoading, subscribeToPlan } = useSubscribe();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handlePaypalPayment, loading: paymentLoading } = usePayment();

  // Use the usePayment hook to get a function to trigger PayPal modal

  const handleBuyPlan = (plan) => {
    if (isAuthenticated) {
      // Trigger PayPal modal for this plan
      handlePaypalPayment({ planId: plan._id });
    } else {
      navigate(loginPath);
    }
  };

  useEffect(() => {
    dispatch(fetchPlansRequested());
  }, []);

  return (
    <div className="w-[100%]">
      <div className="w-full  text-white py-20 px-4 md:px-12 lg:px-12 font-sans">
        <div className=" text-white mb-10  lg:ml-40">
          <h2 className="text-4xl md:text-4xl font-spaceGrotesk mb-2">
            Simple Plans, Powerful Results
          </h2>
          <p className="text-md text-gray-400 max-w-xl  font-inter">
            Choose the plan that fits your goals. Scale up your outreach with
            verified emails, no hidden fees, cancel anytime.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-stretch justify-center relative">
          {/* Background Blur Effects */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-[-2%] left-[40%] w-96 h-96 rounded-full opacity-20 blur-3xl" />
            <div className="absolute top-20 right-1 w-[600px] h-[500px] rounded-full opacity-15 blur-3xl" />
            <div className="absolute bottom-[30%] left-[12.5%] w-[600px] h-[500px] bg-pink-500 rounded-full opacity-15 blur-3xl" />
          </div>

          {loading ? (
            <div className="flex justify-center items-center w-full min-h-[300px]">
              <svg
                className="animate-spin h-10 w-10 text-white"
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
            </div>
          ) : (
            plans.map((plan) => (
              <div
                key={plan.id || plan.name}
                className="flex group flex-col min-h-[680px] bg-[#1b1f30] border border-[#2e3248] hover:bg-gradient-to-b hover:from-[#6B4EFF] hover:to-[#FC4B94] text-white rounded-2xl p-6 sm:p-8 w-full max-w-[400px] shadow-lg transition-colors duration-300 relative z-10"
              >
                <h3 className="text-lg font-spaceGrotesk mb-7">{plan.name}</h3>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl font-spaceGrotesk">
                    ${plan.price}
                  </div>
                </div>
                <div className="text-4xl font-spaceGrotesk mb-1 flex items-center">
                  <span className="text-[1rem] text-gray-300 ml-2 mt-4">
                    ${plan.price} Of Credit
                  </span>
                </div>
                <p className="text-[1rem] text-white mb-5 font-inter">
                  {plan.description}
                </p>

                {/* Only show Buy Now button, PayPal modal is triggered programmatically */}
                <button
                  type="button"
                  className={`w-full py-3 rounded-full font-inter flex items-center justify-center text-lg mb-7 transition-colors duration-200 ${
                    subscribeLoading || paymentLoading
                      ? "bg-gray-500 text-white cursor-not-allowed opacity-70"
                      : "bg-[#444057] text-white group-hover:bg-white group-hover:text-black cursor-pointer"
                  }`}
                  onClick={() => handleBuyPlan(plan)}
                  disabled={subscribeLoading || paymentLoading}
                >
                  {subscribeLoading || paymentLoading ? (
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
                          d="M4 12a8 8 0 018-8v8H4z"
                        ></path>
                      </svg>
                      {paymentLoading ? "Processing..." : "Subscribing..."}
                    </span>
                  ) : (
                    <>
                      Buy now
                      <span className="ml-2">
                        <LockCircleIcon className="h-6 w-6" />
                      </span>
                    </>
                  )}
                </button>

                <ul className="space-y-3 text-[1rem] font-inter">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <FiCheck size={16} className="mt-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
      {!hideComparision && (
        <div className=" text-white px-4 py-20 md:px-16 ">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center   text-3xl md:text-4xl font-spaceGrotesk mb-3">
              Compare plans and features
            </h2>
            <p className="text-center mx-auto text-gray-400 text-sm md:text-base mb-10 font-inter max-w-3xl px-2">
              Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus
              fringilla lacus nec metus bibendum egestas. Iaculis massa nisl
              malesuada hendrerit litora torquent per conubia nostra inceptos
              himenaeos.
            </p>
            {/* <div className="bg-[#1E2035] border border-[#4D424D] mb-5 p-3 w-full rounded-2xl text-sm font-inter overflow-x-auto">
            <div className="flex justify-between min-w-[440px] sm:min-w-0 sm:grid grid-cols-4">
              <p>Features</p>
              <p>Free</p>
              <p>Growth</p>
              <p>Enterprise</p>
            </div>
          </div> */}

            <div className="flex flex-col gap-3 relative z-10">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-[-2%] left-[40%] w-96 h-96 rounded-full opacity-20 blur-3xl" />
                <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
                <div className="absolute bottom-[5%] left-1/12 w-[600px] h-[550px] bg-white rounded-full opacity-6 blur-3xl" />
              </div>
              <ComparisonTable plans={plans} />

              {/* {faqs.map((faq, index) => (
              <div
                key={index}
                className={`px-6 py-4 transition-all duration-300 border-b border-b-[#3F4550] relative ${
                  activeIndex === index ? "relative" : ""
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-sm md:font-spaceGrotesk">
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <RxCross1 className="text-white" />
                  ) : (
                    <FaPlus className="text-white" />
                  )}
                </div>

                {activeIndex === index && (
                  <div className="mt-3 text-xs text-white/90 space-y-4">
                    {faq.answer && <p>{faq.answer}</p>}
                    <ComparisonTable plans={plans} />
                  </div>
                )}
              </div>
            ))} */}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="bg-[#2E2F4E] text-white text-xs px-6 py-2 rounded-full border border-[#5A5B73] hover:bg-[#3a3c5a]">
                Still have a Question?{" "}
                <span className="underline ml-1">Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <FAQSection />
    </div>
  );
};

export default Pricing;
