import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = () => {
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#ec4899' : '#3b82f6',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10 animate-pulse"
          style={{ animationDuration: '4s' }} />
      </div>

      {/* Main Footer Content */}
      <footer className="relative z-10 py-16 px-6">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Brand Section */}
            <div className="space-y-6 group">
              <div className="transform group-hover:scale-105 transition-transform duration-500">
                <div className="flex items-center space-x-4 mb-4">

                  {/* Meditation Logo as Image */}
                  <div className="relative group-hover:rotate-12 transition-transform duration-700">
                    <img
                      src="/yoga.png" 
                      alt="Meditation Logo"
                      className="w-24 h-20 md:w-20 md:h-20 object-contain"
                    />
                  </div>

                  {/* Serenity Text */}
                  <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Serenity
                  </h1>
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full group-hover:w-32 transition-all duration-700 mb-6" />
              </div>
              <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                Helping you find peace and mindfulness through meditation and inner balance.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-purple-300 mb-6">Quick Links</h2>
              <div className="space-y-4">
                {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((link, index) => (
                  <div key={link} className="group/link">
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-gray-400 hover:text-white text-lg flex items-center space-x-3 group-hover/link:translate-x-3 transform transition-all duration-300"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover/link:w-6 transition-all duration-300 rounded-full" />
                      <span>{link}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-300 mb-6">Services</h2>
              <div className="space-y-4">
                {[
                  { name: 'Guided Meditation', icon: '🧘', color: 'text-purple-400' },
                  { name: 'Mindfulness Training', icon: '🌱', color: 'text-green-400' },
                  { name: 'Personal Coaching', icon: '💫', color: 'text-yellow-400' },
                  { name: 'Corporate Programs', icon: '🏢', color: 'text-blue-400' }
                ].map((service, index) => (
                  <div key={service.name} className="group/service">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-lg flex items-center space-x-4 group-hover/service:translate-x-3 transform transition-all duration-300"
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <span className={`text-2xl group-hover/service:scale-125 transition-transform duration-300 ${service.color}`}>
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-pink-300 mb-6">Connect With Us</h2>

              {/* Social Media */}
              <div className="flex space-x-4 mb-8">
                {[
                  { name: 'Facebook', color: 'hover:text-blue-400 hover:bg-blue-400/20' },
                  { name: 'Instagram', color: 'hover:text-pink-400 hover:bg-pink-400/20' },
                  { name: 'Twitter', color: 'hover:text-blue-300 hover:bg-blue-300/20' }
                ].map((social, index) => (
                  <a
                    key={social.name}
                    href="#"
                    className={`p-3 rounded-full text-gray-400 ${social.color} transform hover:scale-125 hover:-translate-y-2 transition-all duration-300 border border-gray-600 hover:border-transparent`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      {social.name === 'Facebook' && (
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      )}
                      {social.name === 'Instagram' && (
                        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                      )}
                      {social.name === 'Twitter' && (
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      )}
                    </svg>
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <p className="text-lg font-medium text-gray-300">Join our mindful community</p>
                <div className="relative">
                  <div className="flex rounded-2xl overflow-hidden shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Your email address"
                      className="flex-1 px-6 py-4 bg-transparent text-white placeholder-gray-300 focus:outline-none text-lg"
                    />
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitted}
                      className={`px-8 py-4 font-bold text-lg transition-all duration-300 ${isSubmitted
                          ? 'bg-green-500 text-white scale-105'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white hover:shadow-xl hover:shadow-purple-500/30 transform hover:scale-105'
                        }`}
                    >
                      {isSubmitted ? '✓ Joined!' : 'Subscribe'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-8 border-t border-gray-600 relative">
            {/* Animated Border */}
            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
            <div className="absolute top-0 left-0 h-px w-1/3 bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />

            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <p className="text-gray-400 text-lg">
                © {new Date().getFullYear()} Serenity Meditation. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-gray-500">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((policy, index) => (
                  <React.Fragment key={policy}>
                    <a
                      href="#"
                      className="hover:text-purple-400 transition-colors duration-300 text-lg"
                    >
                      {policy}
                    </a>
                    {index < 2 && <span className="text-gray-600">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Decorative Background Elements */}
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-tr from-purple-600/30 to-transparent rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-bl from-blue-600/30 to-transparent rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-pink-600/20 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default Footer;