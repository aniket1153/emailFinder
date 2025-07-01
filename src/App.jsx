import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
;
import Navbar from './Components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#141627] to-[#0f111a] text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
