import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const showWhiteBg = !transparent || isScrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      showWhiteBg ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link 
          to="/" 
          className={`text-2xl font-bold transition-all duration-500 cursor-pointer ${showWhiteBg ? 'text-gray-900' : 'text-white'} ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
        >
          TechAdvance
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/articles', label: 'Resources' },
            { path: '/categories', label: 'Tools' },
            { path: '/about', label: 'About' },
          ].map((item, index) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`transition-all duration-500 cursor-pointer font-medium text-sm hover:scale-105 ${
                location.pathname === item.path 
                  ? 'text-cyan-600' 
                  : showWhiteBg 
                    ? 'text-gray-700 hover:text-cyan-600' 
                    : 'text-white/90 hover:text-white'
              } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link 
          to="/get-started" 
          className={`px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all duration-500 whitespace-nowrap cursor-pointer font-medium text-sm shadow-lg shadow-cyan-500/30 hover:scale-105 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
          style={{ transitionDelay: '500ms' }}
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}