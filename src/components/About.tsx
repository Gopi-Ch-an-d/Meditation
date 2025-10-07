import React, { useState, useEffect } from 'react';

const About: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" className="relative py-32 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Animated background elements */}
      <div 
        className="absolute top-20 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl transition-transform duration-1000"
        style={{ transform: `translateY(${scrollY * 0.1}px) scale(${1 + scrollY * 0.0002})` }}
      ></div>
      <div 
        className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl transition-transform duration-1000"
        style={{ transform: `translateY(${-scrollY * 0.08}px) scale(${1 + scrollY * 0.0001})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4 animate-bounce">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              About Us
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Transforming Lives Through
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Mindful Practice
            </span>
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Side - Meditation Image with Motion */}
          <div className="md:w-1/2 relative group">
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
            
            {/* Main image container */}
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700"
              style={{ transform: `perspective(1000px) rotateY(${scrollY * 0.01}deg)` }}
            >
              <img 
                src="https://media.istockphoto.com/id/1222262930/photo/group-of-diverse-people-meditating-visualizing-during-yoga-session.jpg?s=612x612&w=0&k=20&c=S1EiA6KTggXfMac03dwJQUxwAv_AL9mzhkwSVwXANQY=" 
                alt="Person meditating in peaceful environment" 
                className="w-full h-[500px] object-cover"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
              
              {/* Floating stats cards with dynamic motion */}
              <div 
                className="absolute top-8 left-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl transform group-hover:translate-y-[-8px] transition-all duration-500"
                style={{ transform: `translateY(${Math.sin(scrollY * 0.01) * 5}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center animate-pulse">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15K+</div>
                    <div className="text-sm text-gray-600">Happy Members</div>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl transform group-hover:translate-y-[-8px] transition-all duration-500"
                style={{ transform: `translateY(${Math.cos(scrollY * 0.01) * 5}px)` }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center animate-pulse" style={{ animationDelay: '500ms' }}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                    <div className="text-sm text-gray-600">User Rating</div>
                  </div>
                </div>
              </div>

              {/* Breathing circle overlay */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/30 rounded-full animate-ping"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-white/50 rounded-full" style={{ animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite', animationDelay: '1s' }}></div>
            </div>
            
            {/* Experience badge with animation */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '2s' }}>
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Additional floating elements */}
            <div 
              className="absolute top-1/4 -left-12 bg-white rounded-2xl p-3 shadow-2xl"
              style={{ 
                animation: 'bounce 4s ease-in-out infinite',
                transform: `translateY(${Math.sin(scrollY * 0.02) * 10}px)`
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Completed</div>
                  <div className="text-lg font-bold text-gray-900">500+</div>
                </div>
              </div>
            </div>

            <div 
              className="absolute bottom-1/4 -right-12 bg-white rounded-2xl p-3 shadow-2xl"
              style={{ 
                animation: 'bounce 4s ease-in-out infinite',
                animationDelay: '2s',
                transform: `translateY(${Math.cos(scrollY * 0.02) * 10}px)`
              }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Satisfaction</div>
                  <div className="text-lg font-bold text-gray-900">98%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="md:w-1/2 space-y-8">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Our Mission is Your
                <span className="text-purple-600"> Inner Peace</span>
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                At Serenity, we believe that meditation is a powerful tool for personal transformation. 
                Our mission is to make meditation accessible to everyone, regardless of experience level.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our certified instructors bring years of experience and diverse meditation techniques 
                to help you find the practice that works best for you.
              </p>
            </div>
            
            {/* Feature cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Certified Instructors</h4>
                    <p className="text-gray-600">Expert guidance from professionals with decades of combined experience</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Personalized Programs</h4>
                    <p className="text-gray-600">Tailored meditation journeys designed to match your unique goals and needs</p>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-indigo-100 hover:border-indigo-300 hover:scale-[1.02]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Flexible Schedule</h4>
                    <p className="text-gray-600">Practice anytime, anywhere with our on-demand library of guided sessions</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                Learn more about our approach
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;