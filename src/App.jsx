import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";
import About from "./Components/About";
import Pricing from "./pages/Pricing";
import Extension from "./Components/Extension";
import ContactUs from "./pages/ContactUs";
import SearchResults from "./pages/searchResults";
import { setNavigator } from "./utils/navigator";
import { useSelector } from "react-redux";
import SuccessPage from "./pages/paymentSuccessPage";
import CancelPage from "./pages/paymentFailure";

// path
export const loginPath = "/auth?mode=login";
export const rootPath = "/";
export const pricingPath = "/pricing";
export const searchPath = "/searchresults";
export const extensionPath = "/extension";
export const contactUsPath = "/contactus";
export const aboutPath = "/about";
export const successPath = "/success";
export const cancelPath = "/cancel";
export const authPath = "/auth";
export const signUpPath = "/auth?mode=signup";

function App() {
  const navigate = useNavigate();
  const { isAuthenticated, user, paymentProcessing } = useSelector(
    (state) => state.auth
  );

  // Inline PrivateRoute component
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? (
      children
    ) : user && user?.subscription ? (
      <Navigate to={pricingPath} replace />
    ) : (
      <Navigate to={loginPath} replace />
    );
  };

  const PaymentResultRoute = ({ children }) => {
    return isAuthenticated && paymentProcessing ? (
      children
    ) : !paymentProcessing && isAuthenticated ? (
      <Navigate to={rootPath} replace />
    ) : (
      <Navigate to={loginPath} replace />
    );
  };

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0f0c29] text-white relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96 bg-white rounded-full opacity-15 blur-3xl" />
        <div className="absolute top-20 right-10 w-96 h-80 rounded-full opacity-18 blur-3xl" />
        <div className="absolute bottom-1 left-1/4 w-[550px] h-[400px] bg-gray-400 rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-80 bg-gray-500 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 blur-3xl" />
      </div>

      <Navbar />

      <Routes>
        <Route path={rootPath} element={<Home />} />
        <Route path={authPath} element={<AuthForm />} />
        <Route path={aboutPath} element={<About />} />
        <Route path={pricingPath} element={<Pricing />} />
        <Route path={extensionPath} element={<Extension />} />
        <Route path={contactUsPath} element={<ContactUs />} />
        <Route
          path={searchPath}
          element={
            <PrivateRoute>
              <SearchResults />
            </PrivateRoute>
          }
        />
        <Route
          path={successPath}
          element={
            <PaymentResultRoute>
              <SuccessPage />
            </PaymentResultRoute>
          }
        />
        <Route
          path={cancelPath}
          element={
            <PaymentResultRoute>
              <CancelPage />
            </PaymentResultRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
