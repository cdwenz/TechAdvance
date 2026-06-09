import { useEffect, useRef } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import fondoazul from '@/assets/azul.jpg';

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { ref: contentRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.35}px) scale(1.1)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-[520px] md:h-[720px] lg:h-[800px] overflow-hidden">
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
        style={{
          backgroundImage: `url(${fondoazul})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/40 via-primary-900/60 to-primary-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/30 via-transparent to-primary-950/30" />

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 md:px-8"
      >
        <div className={`max-w-4xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-accent-400 text-sm md:text-base font-medium uppercase tracking-[0.2em] mb-5 font-label">
            Distributed Technology
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-background-50 font-heading mb-6 tracking-tight leading-[1.1]">
            TechAdvance
          </h1>
          <div className="w-16 h-px bg-accent-500/80 mx-auto mb-6" />
          <h2 className="text-lg md:text-xl lg:text-2xl text-background-200/90 font-body max-w-2xl mx-auto leading-relaxed font-light">
            Empowering Bible translation through innovative, open-source technology that bridges languages and communities worldwide.
          </h2>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background-50 to-transparent z-10" />
    </section>
  );
}