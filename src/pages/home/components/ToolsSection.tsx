import { useScrollReveal } from '@/hooks/useScrollReveal';

const tools = [
  {
    title: 'Translation Tools',
    href: 'https://techadvancement.com/translation-tools',
    icon: 'ri-stack-line',
    description:
      'Comprehensive resources on key terms and translation challenges. Collaboration tools enable teams to work together online or offline for the best possible Bible translation.',
    featured: true,
  },
  {
    title: 'Translation Kits',
    href: 'https://techadvancement.com/translationkits',
    icon: 'ri-suitcase-3-line',
    description:
      'Starting a translation project? Get the right laptop or tablet with our specifications and configuration tips for optimal performance.',
    featured: false,
  },
  {
    title: 'Translation Methods',
    href: 'https://techadvancement.com/translation-methods/',
    icon: 'ri-route-line',
    description:
      'God has given you the gift of language. Use it to make the Bible available to others who speak your language.',
    featured: true,
    links: [
      { label: 'MAST', href: 'https://bibleineverylanguage.org/processes/mast/' },
      { label: 'DOT', href: 'https://bibleineverylanguage.org/processes/dot/' },
      { label: 'SUN', href: 'https://bibleineverylanguage.org/processes/sun/' },
      { label: 'REV', href: 'https://bibleineverylanguage.org/processes/rev/' },
    ],
  },
  {
    title: 'Publication Process',
    href: 'https://techadvancement.com/publication-process/',
    icon: 'ri-book-open-line',
    description:
      'Learn the complete process from starting a translation project to final publication using tools that Wycliffe Associates provides.',
    featured: false,
  },
  {
    title: 'Distribution',
    href: 'https://techadvancement.com/distribution/',
    icon: 'ri-globe-line',
    description:
      'Explore how to distribute translated Bibles through audio, print, video, and other accessible formats for every community.',
    featured: false,
  },
];

export default function ToolsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="w-full px-5 md:px-8 lg:px-10">
        <div
          ref={titleRef}
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-primary-600 text-xs font-semibold uppercase tracking-[0.25em] mb-3 font-label">
            Resources
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 font-heading tracking-tight">
            Tools
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className={`group relative rounded-2xl border border-background-200/50 overflow-hidden transition-all duration-500 hover:border-primary-300/60 hover:-translate-y-1 ${
                tool.featured ? 'bg-primary-800' : 'bg-background-50'
              } ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6 md:p-8">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl mb-5 ${
                    tool.featured ? 'bg-accent-500/20 text-accent-400' : 'bg-primary-50 text-primary-600'
                  } transition-all duration-300 group-hover:scale-105`}
                >
                  <i className={`${tool.icon} text-xl`} />
                </div>

                <h4
                  className={`text-lg font-semibold mb-3 font-heading ${
                    tool.featured ? 'text-background-50' : 'text-foreground-900'
                  }`}
                >
                  <a
                    href={tool.href}
                    className="hover:underline underline-offset-4 decoration-1"
                  >
                    {tool.title}
                  </a>
                </h4>

                <p
                  className={`text-sm leading-relaxed ${
                    tool.featured ? 'text-background-300/80' : 'text-foreground-600'
                  }`}
                >
                  {tool.description}
                </p>

                {tool.links && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {tool.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${
                          tool.featured
                            ? 'bg-accent-500/20 text-accent-400 hover:bg-accent-500/30'
                            : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 origin-left scale-x-0 group-hover:scale-x-100 ${
                  tool.featured ? 'bg-accent-500' : 'bg-primary-500'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}