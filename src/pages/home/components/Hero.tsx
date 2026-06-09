import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backlinear from '@/assets/backlinear.jpg';

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Trigger entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleExplore = () => {
    const categorySection = document.getElementById('categories');
    categorySection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl mx-4 aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-3xl"></i>
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="TechAdvance Introduction Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backlinear}
          alt="Hero Background"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/45"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className={`text-2xl font-bold transition-colors cursor-pointer ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            TechAdvance
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`transition-colors cursor-pointer font-medium text-sm ${isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Home</Link>
            <Link to="/articles" className={`transition-colors cursor-pointer font-medium text-sm ${isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Resources</Link>
            <Link to="/categories" className={`transition-colors cursor-pointer font-medium text-sm ${isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>Tools</Link>
            <Link to="/about" className={`transition-colors cursor-pointer font-medium text-sm ${isScrolled ? 'text-gray-700 hover:text-cyan-600' : 'text-white/90 hover:text-white'}`}>About</Link>
          </div>
          <Link to="/get-started" className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all whitespace-nowrap cursor-pointer font-medium text-sm shadow-lg shadow-cyan-500/30 hover:scale-105 hover:shadow-xl">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full text-white mb-8 border border-cyan-400/30 shadow-lg shadow-cyan-500/20 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <i className="ri-global-line text-cyan-400"></i>
            <span className="text-sm font-semibold">Empowering Bible Translation Worldwide</span>
          </div>
          
          <h1 className={`text-7xl font-extrabold text-white leading-tight mb-7 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Distributed Technology
            <br />
            to Empower Bible Translation
          </h1>
          
          <p className={`text-xl text-white/95 leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Free, open-source software tools and resources to help communities translate the Bible into their own languages — accurate, clear, and natural.
          </p>
          
          <div className={`flex items-center justify-center gap-5 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button 
              onClick={handleExplore}
              className="group px-9 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all shadow-xl shadow-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/50 whitespace-nowrap cursor-pointer flex items-center gap-3 font-semibold text-sm hover:scale-105"
            >
              Explore Resources
              <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
            </button>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="px-9 py-4 bg-white/10 backdrop-blur-md text-white rounded-lg hover:bg-white/20 transition-all whitespace-nowrap cursor-pointer font-semibold text-sm border border-white/30 flex items-center gap-2 hover:scale-105"
            >
              <i className="ri-play-circle-line text-lg"></i>
              Watch Video
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-28 max-w-5xl mx-auto">
          {[
            { value: 'Free', label: 'Open Source Tools' },
            { value: 'Global', label: 'Community Network' },
            { value: 'Multi', label: 'Translation Methods' },
            { value: '24/7', label: 'Helpdesk Support' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-md rounded-xl p-6 border border-cyan-400/30 shadow-lg shadow-cyan-500/20 transition-all duration-700 hover:scale-105 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-white/85 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}