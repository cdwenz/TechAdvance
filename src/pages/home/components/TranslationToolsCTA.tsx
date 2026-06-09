import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TranslationToolsCTA() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=Remote%20village%20community%20gathering%20under%20large%20trees%20with%20people%20studying%20texts%20together%20using%20laptops%20and%20tablets%20in%20warm%20golden%20hour%20light%20with%20earthy%20tones%20and%20soft%20bokeh%20background%20photorealistic%20documentary%20style%20African%20rural%20setting%20with%20natural%20community%20collaboration%20atmosphere%20and%20warm%20amber%20tones&width=1600&height=700&seq=cta-bg-2026-v2&orientation=landscape)',
        }}
      />
      <div className="absolute inset-0 bg-primary-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950/50 via-transparent to-primary-950/50" />

      <div className="relative z-10 w-full px-5 md:px-8 lg:px-10">
        <div
          ref={sectionRef}
          className={`max-w-3xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-accent-400 text-xs font-semibold uppercase tracking-[0.25em] mb-4 font-label">
            Open Source
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background-50 font-heading mb-5 tracking-tight leading-tight">
            Translation Tools to empower Bible translation.
          </h2>
          <p className="text-base md:text-lg text-background-200/80 mb-8 leading-relaxed max-w-xl">
            Several free, open-source software tools are available to help you translate the Bible into your language today.
          </p>
          <a
            href="https://bibletranslationtools.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-accent-500 text-background-50 rounded-xl text-sm font-semibold hover:bg-accent-600 transition-all duration-300 whitespace-nowrap"
          >
            Learn More
            <i className="ri-arrow-right-line text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}