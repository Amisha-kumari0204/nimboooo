import React from "react";
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx'
import Features from "./components/Features.jsx";


const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white font-sans">

      <Header />
      <div>
      <Hero />
      <Features />
      </div>
      
    </div>
  );
};

export default App;
