import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import AuthForm from "./pages/AuthForm";
import AboutUs from "./Components/AboutUs";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen  text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
