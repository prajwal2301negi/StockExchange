import React from 'react';
import MobileUI from './MobileUI';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 py-4">
      <div className="text-white md:w-1/2">
        <h1 className="text-pink-500 text-5xl font-bold">Best Stock Exchange App</h1>
        <p className="text-gray-400 mt-4">
        At Stock Exchange, we empower traders of all levels to navigate the financial markets with confidence. Whether you're a seasoned trader or just starting out, our platform offers the tools, insights, and resources you need to make informed decisions and maximize your trading potential.
        </p>
        <div className="mt-8 flex">
          <Link to='/market' className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full mr-4">Get Started</Link>
          <Link to='/home' className="border border-gray-500 text-white py-2 px-4 rounded-full">View Demo</Link>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <MobileUI />
      </div>
    </div>
  );
}

export default HeroSection;
