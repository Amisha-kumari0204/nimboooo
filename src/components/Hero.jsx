import React from 'react'
import  '../index.css'
const Hero = () => {
  return (
    <section className="relative  text-white py-16 px-4">
      <div className="absolute inset-0">
        <div className="opacity-30">
         {/* <img src="../bgImgCurv.png" alt="BackgroundImg" /> */}
        </div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Fuel Your Creativity with <span className="text-green-400">Nimbooo</span>
        </h1>
        <div id="sa" className='text-4xl md:text-5xl font-bold'>The Feature of Micro Payment</div>
        <p className="text-lg mt-4">
          Nimbooo is your trusted partner for micro and nano payments, enabling you to monetize your content and connect with supporters through effortless QR-based payment links.
        </p>
        <div className="flex justify-center space-x-4 mt-8">
          <button className="pa px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700">Join Now</button>
          <button className="pa px-6 py-3 border border-white text-white rounded-lg hover:bg-gray-700">
            Take Product Tour
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
