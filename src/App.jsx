import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";

import About from "./Components/About";
import Pricing from "./pages/Pricing";
import Extension from "./Components/Extension";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0f0c29]  text-white relative">
        <div className="absolute inset-0 z-0">
        <div className="absolute top-[-2%] left-[40%] w-96 h-96 bg-white rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-32 left-1/4 w-[400px] h-[400px]  rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-pink-300 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72  rounded-full opacity-20 blur-3xl" />
      </div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
         <Route path="/about" element={<About/>} />
          <Route path="/Pricing" element={<Pricing/>}/>
           <Route path="/Extension" element={<Extension/>}/>
           <Route path="/ContactUs" element={<ContactUs/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
