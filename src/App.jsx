import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";

import About from "./Components/About";
import Pricing from "./pages/Pricing";
import Extension from "./Components/Extension";

function App() {
  return (
    <Router>
      <div className="min-h-screen  text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
         <Route path="/about" element={<About/>} />
          <Route path="/Pricing" element={<Pricing/>}/>
           <Route path="/Extension" element={<Extension/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
