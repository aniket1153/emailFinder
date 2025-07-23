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

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  // Inline PrivateRoute component
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? (
      children
    ) : (
      <Navigate to="/auth?mode=login" replace />
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
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/extension" element={<Extension />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route
          path="/searchresults"
          element={
            <PrivateRoute>
              <SearchResults />
            </PrivateRoute>
          }
        />
        <Route
          path="/success"
          element={
            <PrivateRoute>
              <SuccessPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/cancel"
          element={
            <PrivateRoute>
              <CancelPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
