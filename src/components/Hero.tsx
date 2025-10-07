import React, { useEffect, useState } from "react";

const Hero: React.FC = () => {
  // ✅ Use only direct .mp4 links
  const videos = [
    "https://videos.pexels.com/video-files/3209148/3209148-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/8480641/8480641-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/8480736/8480736-uhd_2560_1440_25fps.mp4",
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  // Rotate videos every 8s (desktop only)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* 🔹 Background Video (desktop only) */}
      <div className="hidden md:block absolute inset-0">
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style={{
              opacity: index === currentVideoIndex ? 1 : 0,
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* 🔹 Mobile Background (only first video or poster) */}
      <div className="md:hidden absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://via.placeholder.com/1080x1920.png?text=Loading+Video..."
          className="w-full h-full object-center"
        >
          <source src={videos[0]} type="video/mp4" />
        </video>
      </div>

      {/* 🔹 Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/70 via-purple-900/60 to-indigo-900/70"></div>

      {/* 🔹 Foreground Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-left space-y-8">
            <div className="inline-block">
              <span className="bg-white/10 backdrop-blur-sm text-purple-200 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                ✨ Transform Your Mind
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Inner Peace
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-purple-100 max-w-xl leading-relaxed">
              Discover the transformative power of meditation with our guided
              sessions and personalized programs. Begin your journey to
              mindfulness today.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">10K+</div>
                <div className="text-purple-200 text-sm">Active Users</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-purple-200 text-sm">Sessions</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1">4.9★</div>
                <div className="text-purple-200 text-sm">Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
