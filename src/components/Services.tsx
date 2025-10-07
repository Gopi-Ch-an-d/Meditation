import React, { useState } from "react";

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Guided Meditation",
      description:
        "Experience guided sessions with our expert instructors to deepen your practice.",
      icon: "🧘‍♀️",
      details: "30-60 minute sessions available. Includes breathing exercises, body scans, and visualization techniques. Suitable for all levels from beginner to advanced practitioners.",
    },
    {
      title: "Mindfulness Training",
      description:
        "Learn techniques to cultivate mindfulness in your daily life and reduce stress.",
      icon: "🌿",
      details: "8-week comprehensive program covering meditation basics, stress reduction, emotional regulation, and daily mindfulness practices. Includes weekly group sessions and take-home exercises.",
    },
    {
      title: "Personal Coaching",
      description:
        "One-on-one sessions tailored to your specific needs and goals.",
      icon: "🌟",
      details: "Personalized 1-on-1 sessions with certified instructors. Custom meditation plans, progress tracking, and flexible scheduling. Perfect for specific challenges like anxiety, sleep, or focus.",
    },
    {
      title: "Corporate Programs",
      description:
        "Bring meditation and mindfulness to your workplace for improved wellbeing.",
      icon: "🏢",
      details: "On-site or virtual workplace wellness programs. Includes lunch-and-learn sessions, stress management workshops, and ongoing meditation classes. Proven to increase productivity and employee satisfaction.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-black rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-black rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-black rounded-full mix-blend-overlay filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-black mb-6 animate-fade-in">
            Our Services
          </h2>
          <p className="text-black/70 text-xl max-w-3xl mx-auto leading-relaxed">
            We offer a variety of meditation services to suit different needs
            and experience levels.
          </p>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-black rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

              {/* Card */}
              <div className="relative bg-black/5 backdrop-blur-lg p-8 rounded-2xl border border-black/10 hover:border-black/30 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* Icon container */}
                <div className="relative w-20 h-20 mb-6 rounded-2xl bg-black/10 border border-black/20 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                  <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-black opacity-0 group-hover:opacity-100 animate-ping"></div>
                </div>

                <h3 className="text-2xl font-bold text-black mb-4 transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-black/60 leading-relaxed group-hover:text-black transition-colors duration-300">
                  {service.description}
                </p>

                {/* Expandable details on hover */}
                <div className="mt-4 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-in-out">
                  <div className="pt-3 border-t border-black/10">
                    <p className="text-black/70 text-xs leading-relaxed">
                      {service.details}
                    </p>
                  </div>
                </div>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center text-black/60 group-hover:text-black transition-colors duration-300">
                  <span className="text-sm font-semibold">Learn More</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Services;