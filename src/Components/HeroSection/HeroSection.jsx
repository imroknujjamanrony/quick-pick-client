import React from 'react';
import heroImg from '../../assets/Hero/slider-01.jpg.png'; // update path
import Categories from './Categories';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row px-4">
        
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <Categories />
        </div>

        {/* Hero Banner */}
        <div className="w-full lg:w-3/4 flex flex-col-reverse lg:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <p className="text-sm text-green-600 font-semibold mb-2">Weekend Discount</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
              Get the best quality <br /> products at the lowest prices
            </h1>
            <p className="text-gray-600 mb-6">
              We have prepared special discounts for you on grocery products. Don’t miss these opportunities…
            </p>
            <div className="flex items-center space-x-4">
              <button className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800">
                Shop Now
              </button>
              <div>
                <span className="text-red-600 text-xl font-bold">$27.99</span>{' '}
                <span className="line-through text-gray-400 text-sm">$56.67</span>
                <p className="text-xs text-gray-400">Limited time offer</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
            <img
              src={heroImg}
              alt="Hero Banner"
              className="w-full max-w-sm rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
