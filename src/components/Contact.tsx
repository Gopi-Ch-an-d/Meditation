import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@serenitymeditation.com',
      color: 'text-indigo-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      color: 'text-purple-600'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Peaceful Lane, Mindfulness City, MC 12345',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9am-6pm | Sat: 10am-4pm | Sun: Closed',
      color: 'text-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 transform transition-all duration-700 hover:scale-105">
          <h2 className="text-5xl font-bold text-black mb-4 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our programs? We're here to help you find your path to mindfulness.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Form Section */}
          <div className="lg:w-1/2 transform transition-all duration-500 hover:translate-y-[-8px]">
            <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10 rounded-bl-full"></div>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative z-10">
                  <div className="mb-6 transform transition-all duration-300">
                    <label htmlFor="name" className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3 border-2 rounded-xl bg-gray-50 text-black transition-all duration-300 focus:outline-none focus:bg-white ${
                        focusedField === 'name' 
                          ? 'border-indigo-500 shadow-lg scale-105' 
                          : 'border-gray-200'
                      }`}
                      required
                    />
                  </div>
              
                  <div className="mb-6 transform transition-all duration-300">
                    <label htmlFor="email" className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-5 py-3 border-2 rounded-xl bg-gray-50 text-black transition-all duration-300 focus:outline-none focus:bg-white ${
                        focusedField === 'email' 
                          ? 'border-purple-500 shadow-lg scale-105' 
                          : 'border-gray-200'
                      }`}
                      required
                    />
                  </div>
              
                  <div className="mb-8 transform transition-all duration-300">
                    <label htmlFor="message" className="block text-gray-800 font-semibold mb-2 text-sm uppercase tracking-wide">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className={`w-full px-5 py-3 border-2 rounded-xl bg-gray-50 text-black transition-all duration-300 focus:outline-none focus:bg-white resize-none ${
                        focusedField === 'message' 
                          ? 'border-pink-500 shadow-lg scale-105' 
                          : 'border-gray-200'
                      }`}
                      required
                    ></textarea>
                  </div>
              
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 animate-pulse">
                  <CheckCircle className="w-20 h-20 text-green-500 mb-4 animate-bounce" />
                  <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you soon.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Info Section */}
          <div className="lg:w-1/2 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${info.color} bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-black mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">{info.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Extra decorative card */}
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Begin?</h3>
              <p className="text-white/90 leading-relaxed">
                Join our community of mindful practitioners and discover inner peace through guided meditation and mindfulness practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;