import React from 'react';
import { Calendar, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-blue-50 pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Making every day</span>
              <span className="block text-blue-600">worth celebrating</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Join us in transforming fitness into a celebration of life. Evidence-based training meets the joy of movement,
              guided by Rachel's expertise in longevity-focused wellness.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Start Your Journey
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <img
                className="w-full rounded-lg object-cover h-[400px]"
                src="https://i.ibb.co/J2DVybh/Screenshot-2024-10-27-at-6-45-50-PM.png"
                alt="Woman exercising outdoors"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex items-center space-x-3">
            <Calendar className="h-8 w-8 text-blue-600" />
            <span className="text-gray-700">Daily Celebrations</span>
          </div>
          <div className="flex items-center space-x-3">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-gray-700">Evidence-Based Fitness</span>
          </div>
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-blue-600" />
            <span className="text-gray-700">Supportive Community</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;