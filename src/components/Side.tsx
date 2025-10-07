import React, { useState, useEffect } from "react";

const ScrollingShowcase: React.FC = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const meditationImages = [
    "https://media.istockphoto.com/id/1459345882/photo/relaxing-the-mind-and-finding-inner-peace-with-yoga-senior-woman-meditating-at-home.jpg?s=612x612&w=0&k=20&c=xRNv-XxpuKE5O5-SNtosKgavb5oNv-n0uV_vnsUzDgQ=",
    "https://media.istockphoto.com/id/1304744772/photo/grey-haired-mature-caucasian-woman-meditating-at-home.jpg?s=612x612&w=0&k=20&c=JNA_FvA6kIUZAEANeL4s9rWG_1KQ97MDdB4f3LlTfqE=",
    "https://www.artofliving.org/sites/www.artofliving.org/files/styles/facebook_thumb/public/unity2/blog_image/FB-Thumbnail%20%2815%29.jpg?itok=JzluyqbD",
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=400&fit=crop",
    "https://media.istockphoto.com/id/1898253793/photo/group-of-multicultural-yoga-participants-seated-meditating.jpg?s=612x612&w=0&k=20&c=xrBfadK4yISCcYRF7ohJJXXEGGuj748ZN-bvu0vlKRg="
  ];

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      {/* Left Side - Text */}
      <div className="relative z-10 md:w-1/2 space-y-6 animate-fadeInLeft">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
          <span className="text-lg">🧘‍♀️</span>
          <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Mindfulness in Motion
          </span>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Bring meditation{" "}
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            into your life
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
          Discover how expert teachers integrate mindfulness into everyday moments—from
          morning routines to evening wind-downs, from work breaks to family time.
          Learn practical techniques that transform ordinary activities into opportunities
          for presence and peace.
        </p>

        {/* Feature highlights */}
        <div className="space-y-4 pt-4">
          <div className="flex items-start space-x-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Daily Life Integration</h4>
              <p className="text-gray-600 text-sm">Practice mindfulness while cooking, walking, or working</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Expert Guidance</h4>
              <p className="text-gray-600 text-sm">Learn from experienced meditation teachers and practitioners</p>
            </div>
          </div>

          <div className="flex items-start space-x-3 group">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800">Actionable Practices</h4>
              <p className="text-gray-600 text-sm">Simple techniques you can apply immediately in any situation</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden mt-6">
          <span className="relative z-10 flex items-center space-x-2">
            <span>Explore Practices</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </button>
      </div>

      {/* Right Side - Scrolling Images */}
      <div className="relative md:w-1/2 mt-12 md:mt-0 md:pl-12">
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-purple-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-pink-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="overflow-hidden relative h-[600px] rounded-3xl shadow-2xl">
          <div className="animate-scrollUp space-y-6">
            {/* First set of images */}
            {meditationImages.map((src, index) => (
              <div 
                key={`first-${index}`} 
                className="relative group overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500"
              >
                <img
                  src={src}
                  alt={`Meditation practice ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h4 className="text-2xl font-bold mb-2">Mindful Moment</h4>
                    <p className="text-sm">Discover inner peace</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg transform -translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Practice {index + 1}
                  </span>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {meditationImages.map((src, index) => (
              <div 
                key={`second-${index}`} 
                className="relative group overflow-hidden rounded-2xl transform hover:scale-105 transition-all duration-500"
              >
                <img
                  src={src}
                  alt={`Meditation practice ${index + 1}`}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h4 className="text-2xl font-bold mb-2">Mindful Moment</h4>
                    <p className="text-sm">Discover inner peace</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg transform -translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Practice {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <style >{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-scrollUp {
          animation: scrollUp 30s linear infinite;
        }

        .animate-scrollUp:hover {
          animation-play-state: paused;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ScrollingShowcase;