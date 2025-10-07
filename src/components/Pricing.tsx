import React, { useState, useEffect } from 'react';

// Types
interface PricingPlan {
  id: number;
  title: string;
  duration: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  description: string;
}

interface PricingCarouselProps {
  plans: PricingPlan[];
  interval?: number;
  onHover?: (id: number | null) => void;
}

// PricingCarousel Component
const PricingCarousel: React.FC<PricingCarouselProps> = ({ plans, interval = 5000, onHover }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = Math.max(0, plans.length - visibleCards);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, plans.length, currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, plans.length - visibleCards);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [plans.length, visibleCards, interval]);

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, plans.length - visibleCards);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, plans.length - visibleCards);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Cards Container */}
      <div className="overflow-hidden px-4">
        <div 
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
        >
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="flex-shrink-0 px-4 pt-8"
              style={{ width: `${100 / visibleCards}%` }}
              onMouseEnter={() => onHover?.(plan.id)}
              onMouseLeave={() => onHover?.(null)}
            >
              <div className={`relative h-full rounded-3xl transition-all duration-500 transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-purple-600 via-pink-600 to-indigo-600 p-[2px] shadow-2xl shadow-purple-500/50' 
                  : 'bg-white backdrop-blur-xl border border-gray-300 hover:border-purple-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                      🔥 MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className={`rounded-3xl p-6 h-full flex flex-col ${
                  plan.popular ? 'bg-white' : 'bg-transparent'
                }`}>
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-black mb-1">{plan.title}</h3>
                    <p className="text-gray-600 text-xs">{plan.description}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                        ${plan.price}
                      </span>
                      <span className="text-gray-600 text-sm">/{plan.duration}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-gray-500 line-through text-sm">${plan.originalPrice}</span>
                        <span className="text-green-600 text-xs font-semibold">
                          Save ${plan.originalPrice - plan.price}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-black">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/50'
                      : 'bg-gray-800 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 border border-gray-800 hover:border-transparent'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-3">
        {Array.from({ length: Math.ceil(plans.length - visibleCards + 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index 
                ? 'w-12 h-3 bg-gradient-to-r from-purple-500 to-pink-500' 
                : 'w-3 h-3 bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Pricing Component
const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | '6months' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const pricingPlans: Record<string, PricingPlan[]> = {
    monthly: [
      {
        id: 1,
        title: "Basic Plan",
        duration: "month",
        price: 19,
        features: [
          "5 guided meditations per week",
          "Basic breathing exercises",
          "Email support",
          "Progress tracking"
        ],
        description: "Perfect for beginners starting their meditation journey"
      },
      {
        id: 2,
        title: "Premium Plan",
        duration: "month",
        price: 39,
        originalPrice: 49,
        features: [
          "Unlimited guided meditations",
          "Advanced techniques",
          "Priority email support",
          "Personalized recommendations",
          "Sleep stories"
        ],
        popular: true,
        description: "Our most popular plan for dedicated practitioners"
      },
      {
        id: 3,
        title: "Family Plan",
        duration: "month",
        price: 69,
        features: [
          "Everything in Premium",
          "Up to 5 family members",
          "Child-friendly meditations",
          "Family progress dashboard",
          "Weekly family challenges"
        ],
        description: "Ideal for families practicing together"
      }
    ],
    "6months": [
      {
        id: 4,
        title: "Basic Plan",
        duration: "6 months",
        price: 99,
        originalPrice: 114,
        features: [
          "5 guided meditations per week",
          "Basic breathing exercises",
          "Email support",
          "Progress tracking",
          "15% discount compared to monthly"
        ],
        description: "Perfect for beginners starting their meditation journey"
      },
      {
        id: 5,
        title: "Premium Plan",
        duration: "6 months",
        price: 199,
        originalPrice: 234,
        features: [
          "Unlimited guided meditations",
          "Advanced techniques",
          "Priority email support",
          "Personalized recommendations",
          "Sleep stories",
          "15% discount compared to monthly"
        ],
        popular: true,
        description: "Our most popular plan for dedicated practitioners"
      },
      {
        id: 6,
        title: "Family Plan",
        duration: "6 months",
        price: 349,
        originalPrice: 414,
        features: [
          "Everything in Premium",
          "Up to 5 family members",
          "Child-friendly meditations",
          "Family progress dashboard",
          "Weekly family challenges",
          "15% discount compared to monthly"
        ],
        description: "Ideal for families practicing together"
      }
    ],
    yearly: [
      {
        id: 7,
        title: "Basic Plan",
        duration: "year",
        price: 179,
        originalPrice: 228,
        features: [
          "5 guided meditations per week",
          "Basic breathing exercises",
          "Email support",
          "Progress tracking",
          "25% discount compared to monthly"
        ],
        description: "Perfect for beginners starting their meditation journey"
      },
      {
        id: 8,
        title: "Premium Plan",
        duration: "year",
        price: 359,
        originalPrice: 468,
        features: [
          "Unlimited guided meditations",
          "Advanced techniques",
          "Priority email support",
          "Personalized recommendations",
          "Sleep stories",
          "25% discount compared to monthly"
        ],
        popular: true,
        description: "Our most popular plan for dedicated practitioners"
      },
      {
        id: 9,
        title: "Family Plan",
        duration: "year",
        price: 629,
        originalPrice: 828,
        features: [
          "Everything in Premium",
          "Up to 5 family members",
          "Child-friendly meditations",
          "Family progress dashboard",
          "Weekly family challenges",
          "25% discount compared to monthly"
        ],
        description: "Ideal for families practicing together"
      }
    ]
  };

  return (
    <section id="pricing" className="relative py-12 bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-3">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-full shadow-lg">
              ✨ Special Offer - Save up to 25%
            </span>
          </div>
          <h2 className="text-4xl font-bold text-black mb-3">
            Pricing Plans
          </h2>
          <p className="text-black text-base max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a 14-day free trial.
          </p>
        </div>
        
        {/* Billing Toggle */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-flex p-1 rounded-2xl bg-white backdrop-blur-xl border border-gray-300 shadow-2xl">
            <div 
              className="absolute top-1 bottom-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transition-all duration-300 ease-out shadow-lg"
              style={{
                left: billingCycle === 'monthly' ? '4px' : billingCycle === '6months' ? 'calc(33.33% + 2px)' : 'calc(66.66%)',
                width: 'calc(33.33% - 8px)'
              }}
            ></div>
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                billingCycle === 'monthly'
                  ? 'text-white'
                  : 'text-black hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('6months')}
              className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                billingCycle === '6months'
                  ? 'text-white'
                  : 'text-black hover:text-gray-700'
              }`}
            >
              <div className="flex flex-col items-center">
                <span>6 Months</span>
                {billingCycle !== '6months' && (
                  <span className="text-xs text-green-600 mt-0.5">Save 15%</span>
                )}
              </div>
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`relative px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                billingCycle === 'yearly'
                  ? 'text-white'
                  : 'text-black hover:text-gray-700'
              }`}
            >
              <div className="flex flex-col items-center">
                <span>Yearly</span>
                {billingCycle !== 'yearly' && (
                  <span className="text-xs text-green-600 mt-0.5">Save 25%</span>
                )}
              </div>
            </button>
          </div>
        </div>
        
        {/* Pricing Carousel */}
        <PricingCarousel 
          plans={pricingPlans[billingCycle]} 
          interval={6000}
          onHover={setHoveredPlan}
        />
      </div>
    </section>
  );
};

export default Pricing;