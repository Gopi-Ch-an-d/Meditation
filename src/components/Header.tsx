import React, { useState, useEffect } from 'react';

const FloatingOrb = ({ delay = 0, size = 'w-2 h-2' }) => (
  <div
    className={`${size} bg-gradient-to-r from-purple-400 to-pink-400 rounded-full absolute opacity-20 animate-bounce`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: '4s',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`
    }}
  />
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home'},
    { id: 'about', label: 'About'},
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Floating Background Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {[...Array(8)].map((_, i) => (
          <FloatingOrb
            key={i}
            delay={i * 0.5}
            size={i % 2 === 0 ? 'w-1 h-1' : 'w-3 h-3'}
          />
        ))}
      </div>

      {/* Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ease-in-out
        ${scrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-2xl border-b border-purple-100'
          : 'bg-gradient-to-r from-purple-50 via-white to-blue-50'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 animate-pulse" />

        <div className="container mx-auto px-6 py-4 relative z-10">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/yoga.png"
                    alt="Serenity Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <div className="relative">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-cyan-600 group-hover:to-teal-500 transition-all duration-300 font-serif">
                  Serenity
                </div>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group
                  transform hover:scale-105 hover:-translate-y-0.5
                  ${activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span>{item.label}</span>
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative p-2 text-gray-600 hover:text-purple-600 focus:outline-none transform hover:scale-110 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-3'}`} />
                <span className={`absolute block w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
              </div>
            </button>
          </div>

          {/* Mobile Nav */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out
            ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
          >
            <div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-purple-100">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left
                    transform hover:scale-105 hover:translate-x-2
                    ${activeSection === item.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animation: isMenuOpen ? 'slideInRight 0.5s ease-out' : ''
                    }}
                  >
                    <span className="font-medium">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
                <div className="pt-2 mt-2 border-t border-purple-100">
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                    Start Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-50" />
      </header>

      <style>{`
        @keyframes slideInRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
