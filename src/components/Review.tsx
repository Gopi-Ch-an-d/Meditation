import React, { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
  location: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group h-full"
      style={{
        animation: 'fadeInUp 0.8s ease-out backwards',
        animationDelay: `${delay}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col overflow-hidden relative">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quote icon */}
        <div className="absolute top-6 right-6 text-6xl text-purple-200 opacity-50 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
          "
        </div>

        <div className="relative z-10 flex-1 flex flex-col">
          {/* Stars rating */}
          <div className="flex space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 transform transition-all duration-300 ${
                  i < testimonial.rating
                    ? 'text-yellow-400 scale-100'
                    : 'text-gray-300 scale-90'
                } ${isHovered ? 'animate-pulse' : ''}`}
                style={{ animationDelay: `${i * 0.1}s` }}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <p className="text-gray-700 leading-relaxed mb-6 flex-1 text-lg italic">
            "{testimonial.quote}"
          </p>

          {/* Author info */}
          <div className="flex items-center space-x-4">
            {/* Avatar */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="relative w-14 h-14 rounded-full object-cover shadow-lg ring-2 ring-white"
              />
            </div>

            {/* Name and role */}
            <div className="flex-1">
              <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
              <p className="text-sm text-gray-600">{testimonial.role}</p>
              <p className="text-xs text-purple-600 flex items-center mt-1">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {testimonial.location}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-tr-full transform -translate-x-12 translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />

        {/* Floating particles on hover */}
        {isHovered && (
          <>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
            <div
              className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping"
              style={{ animationDelay: '0.3s' }}
            />
          </>
        )}
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Mitchell',
      role: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      quote: 'Serenity has completely transformed my meditation practice. The guided sessions are exactly what I needed to deepen my mindfulness journey. I feel more centered and peaceful every day.',
      rating: 5,
      location: 'San Francisco, CA',
    },
    {
      name: 'James Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      quote: 'As someone with a hectic schedule, the flexible session lengths are perfect. I can meditate for 5 minutes during lunch or 30 minutes before bed. This app fits seamlessly into my life.',
      rating: 5,
      location: 'Seattle, WA',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Mental Health Counselor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      quote: 'I recommend Serenity to all my clients. The progress tracking and personalized plans help them build sustainable meditation habits. The results have been remarkable.',
      rating: 5,
      location: 'Austin, TX',
    },
    {
      name: 'Michael Park',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      quote: 'The stress relief techniques have been a game-changer for managing my business pressure. I\'m more focused, make better decisions, and feel less overwhelmed. Worth every penny!',
      rating: 5,
      location: 'New York, NY',
    },
    {
      name: 'Lisa Thompson',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      quote: 'The sleep stories are incredible! I used to struggle with insomnia, but now I fall asleep peacefully every night. My energy levels during the day have improved dramatically.',
      rating: 5,
      location: 'Portland, OR',
    },
    {
      name: 'David Kumar',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
      quote: 'The community support is amazing. I love connecting with other meditators and sharing experiences. It keeps me motivated and accountable to my practice.',
      rating: 5,
      location: 'Boston, MA',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3)
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
          style={{ animationDelay: '4s' }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-6 animate-fadeIn">
            <span className="text-xl">💬</span>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Trusted by 50,000+ Meditators
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              What Our Community Says
            </span>
          </h2>

          {/* Subtitle */}
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            Real stories from people whose lives have been transformed through mindfulness
          </p>

          {/* Decorative line */}
          <div
            className="flex items-center justify-center mt-8 space-x-2 animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} delay={0.8 + index * 0.1} />
          ))}
        </div>

        {/* Stats section */}
        <div
          className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-2xl mb-12 animate-fadeInUp"
          style={{ animationDelay: '1.4s' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-3">⭐</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                4.9/5
              </div>
              <div className="text-gray-600 font-medium">Average Rating</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-3">👥</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-600 font-medium">Active Users</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-3">🧘</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                1M+
              </div>
              <div className="text-gray-600 font-medium">Sessions Completed</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-3">🎯</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center animate-fadeInUp"
          style={{ animationDelay: '1.6s' }}
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/90 text-lg mb-8">
              Join thousands of people who have transformed their lives through meditation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-10 py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Start Free Trial</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
              <button 
                onClick={handleScrollToPricing}
                className="px-10 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300"
              >
                View Pricing
              </button>
            </div>
          </div>
        </div>

        {/* Mobile App Showcase Section */}
        <div
          className="mt-20 animate-fadeInUp"
          style={{ animationDelay: '1.8s' }}
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-12 shadow-2xl">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Meditate Anywhere, Anytime
              </h3>
              <p className="text-gray-600 text-lg">
                Download our mobile app and take your practice with you
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* Mobile Screen Mockup */}
              <div className="relative group">
                {/* Phone frame */}
                <div className="relative w-72 h-[600px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 rounded-[2.5rem] overflow-hidden">
                    {/* App UI */}
                    <div className="p-6 h-full flex flex-col">
                      {/* Status bar */}
                      <div className="flex justify-between items-center text-xs text-gray-800 mb-6 mt-4">
                        <span>9:41</span>
                        <div className="flex space-x-1">
                          <div className="w-4 h-4">📶</div>
                          <div className="w-4 h-4">📱</div>
                          <div className="w-4 h-4">🔋</div>
                        </div>
                      </div>

                      {/* Header */}
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                          Welcome back!
                        </h4>
                        <p className="text-gray-600 text-sm">Continue your journey</p>
                      </div>

                      {/* Featured meditation card */}
                      <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 mb-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl">
                            🧘‍♀️
                          </div>
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-800">Morning Calm</h5>
                            <p className="text-xs text-gray-600">10 min · Beginner</p>
                          </div>
                          <button className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                            ▶
                          </button>
                        </div>
                        <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse" />
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="bg-white/60 backdrop-blur-md rounded-xl p-3 text-center transform hover:scale-105 transition-all duration-300">
                          <div className="text-2xl mb-1">⏰</div>
                          <p className="text-xs font-medium text-gray-800">Daily Streak</p>
                          <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">7 Days</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-md rounded-xl p-3 text-center transform hover:scale-105 transition-all duration-300">
                          <div className="text-2xl mb-1">🎯</div>
                          <p className="text-xs font-medium text-gray-800">Minutes</p>
                          <p className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">142</p>
                        </div>
                      </div>

                      {/* Categories */}
                      <div className="flex-1">
                        <h6 className="text-sm font-semibold text-gray-800 mb-3">Categories</h6>
                        <div className="space-y-2">
                          <div className="bg-white/60 backdrop-blur-md rounded-xl p-3 flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center text-xl">
                              😴
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800">Sleep</p>
                              <p className="text-xs text-gray-600">12 sessions</p>
                            </div>
                          </div>
                          <div className="bg-white/60 backdrop-blur-md rounded-xl p-3 flex items-center space-x-3 transform hover:scale-105 transition-all duration-300">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-400 rounded-lg flex items-center justify-center text-xl">
                              💆‍♀️
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-800">Stress Relief</p>
                              <p className="text-xs text-gray-600">18 sessions</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom navigation */}
                      <div className="flex justify-around items-center pt-4 border-t border-gray-300">
                        <div className="text-center">
                          <div className="text-2xl mb-1">🏠</div>
                          <p className="text-xs text-purple-600 font-medium">Home</p>
                        </div>
                        <div className="text-center opacity-50">
                          <div className="text-2xl mb-1">🔍</div>
                          <p className="text-xs text-gray-600">Explore</p>
                        </div>
                        <div className="text-center opacity-50">
                          <div className="text-2xl mb-1">📊</div>
                          <p className="text-xs text-gray-600">Stats</p>
                        </div>
                        <div className="text-center opacity-50">
                          <div className="text-2xl mb-1">👤</div>
                          <p className="text-xs text-gray-600">Profile</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating particles */}
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30" />
                    <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping opacity-30" style={{ animationDelay: '0.5s' }} />
                  </div>
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-[3rem] blur-3xl -z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Features list */}
              <div className="flex-1 max-w-md">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">Offline Access</h5>
                      <p className="text-gray-600 text-sm">Download sessions and meditate without internet connection</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">Smart Reminders</h5>
                      <p className="text-gray-600 text-sm">Get personalized notifications to maintain your practice</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 transform hover:translate-x-2 transition-transform duration-300">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-800 mb-1">Progress Tracking</h5>
                      <p className="text-gray-600 text-sm">Visualize your journey with detailed analytics and insights</p>
                    </div>
                  </div>

                  {/* Download buttons */}
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Download on the</div>
                        <div className="text-sm font-bold">App Store</div>
                      </div>
                    </button>

                    <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      <div className="text-left">
                        <div className="text-xs">Get it on</div>
                        <div className="text-sm font-bold">Google Play</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out backwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out backwards;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;