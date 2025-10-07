import React, { useState } from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 overflow-hidden"
      style={{ 
        animationDelay: `${delay}s`,
        animation: 'fadeInUp 0.8s ease-out backwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-purple-300 transition-all duration-500" />
      
      <div className="relative z-10">
        {/* Icon with rotation animation */}
        <div className={`text-6xl mb-6 transform transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
          {icon}
        </div>
        
        {/* Title with gradient */}
        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* Animated learn more link */}
        <button className="flex items-center space-x-2 text-purple-600 font-medium group-hover:text-pink-600 transition-colors duration-300">
          <span>Learn more</span>
          <span className={`transform transition-transform duration-300 ${isHovered ? 'translate-x-2' : 'translate-x-0'}`}>
            →
          </span>
        </button>
      </div>

      {/* Corner accent with number */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg opacity-20 group-hover:opacity-100 transform group-hover:rotate-180 transition-all duration-500">
        {index + 1}
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-3xl" />

      {/* Floating particles on hover */}
      {isHovered && (
        <>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
        </>
      )}
    </div>
  );
};

const WhyChooseSerenity = () => {
  const features = [
    {
      icon: '🌟',
      title: 'Guided Sessions',
      description: 'Expert-led meditation practices designed to help you find peace and clarity in your daily life. Each session is carefully crafted by experienced meditation instructors.',
    },
    {
      icon: '⏰',
      title: 'Flexible Schedule',
      description: 'Practice at your own pace with sessions ranging from 5 to 60 minutes that fit your lifestyle. Meditate anytime, anywhere with our mobile-friendly platform.',
    },
    {
      icon: '📊',
      title: 'Track Progress',
      description: 'Monitor your mindfulness journey with detailed insights and personalized recommendations. Celebrate milestones and watch your practice grow over time.',
    },
    {
      icon: '🎵',
      title: 'Soothing Sounds',
      description: 'Immerse yourself in calming soundscapes and ambient music. From nature sounds to binaural beats, find the perfect audio companion for your practice.',
    },
    {
      icon: '👥',
      title: 'Community Support',
      description: 'Join a vibrant community of like-minded individuals. Share experiences, get motivation, and grow together on your meditation journey.',
    },
    {
      icon: '🎯',
      title: 'Personalized Plans',
      description: 'Receive customized meditation plans based on your goals and experience level. AI-powered recommendations help you get the most from your practice.',
    },
  ];

  const handleScrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }} />
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

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-6 animate-fadeIn">
            <span className="text-xl">✨</span>
            <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover Your Perfect Meditation Experience
            </span>
          </div>

          {/* Main heading */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Why Choose Serenity?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Everything you need to build a sustainable meditation practice and transform your daily life through mindfulness
          </p>

          {/* Decorative line */}
          <div className="flex items-center justify-center mt-8 space-x-2 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={0.8 + index * 0.1}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fadeInUp" style={{ animationDelay: '1.4s' }}>
          <div className="inline-flex flex-col sm:flex-row gap-4 bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-2xl">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>

            <button 
              onClick={handleScrollToPricing}
              className="px-10 py-4 bg-white/80 backdrop-blur-md text-purple-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-200 hover:border-purple-400"
            >
              View Pricing
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Join <span className="font-bold text-purple-600">50,000+</span> meditators already on their journey 🙏
          </p>
        </div>
      </div>

      <style>{`
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

        @keyframes float {
          0%, 100% {
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

export default WhyChooseSerenity;