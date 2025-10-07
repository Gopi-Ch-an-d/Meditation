import React, { useState, useEffect } from 'react';
import { PricingPlan, CarouselProps } from './types';

const PricingCarousel: React.FC<CarouselProps> = ({ plans, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % plans.length);
    }, interval);

    return () => clearInterval(timer);
  }, [plans.length, interval]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + plans.length) % plans.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % plans.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative h-96">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className={`bg-white rounded-xl shadow-xl p-8 mx-auto max-w-md ${plan.popular ? 'border-2 border-indigo-500 transform scale-105' : ''}`}>
              {plan.popular && (
                <div className="bg-indigo-500 text-white text-sm font-semibold py-1 px-4 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-indigo-600">${plan.price}</span>
                {plan.originalPrice && (
                  <span className="text-lg text-gray-500 line-through ml-2">${plan.originalPrice}</span>
                )}
                <span className="text-gray-600 ml-2">/{plan.duration}</span>
              </div>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold ${
                plan.popular 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-100 text-indigo-600 hover:bg-gray-200'
              } transition`}>
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons */}
      <button 
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Indicators */}
      <div className="flex justify-center mt-6">
        {plans.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full mx-1 ${
              index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingCarousel;