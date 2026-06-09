import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function QuickButtons() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  const buttons = [
    { label: 'Helpdesk', href: 'https://helpdesk.techadvancement.com/helpdesk', icon: 'ri-customer-service-2-line' },
    { label: 'Training', href: 'https://techadvancement.com/training/', icon: 'ri-graduation-cap-line' },
    { label: 'Translation', href: 'https://techadvancement.com/translation-methods/', icon: 'ri-translate-2' },
    { label: 'Tools', href: 'https://techadvancement.com/translation-tools/', icon: 'ri-tools-line' },
  ];

  return (
    <section ref={sectionRef} className="bg-background-50 py-8 md:py-12">
      <div className="w-full px-5 md:px-8 lg:px-10">
        <div className={`flex flex-wrap items-center justify-center gap-3 md:gap-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {buttons.map((btn, i) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith('http') ? '_blank' : undefined}
              rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-2.5 px-5 md:px-6 py-3 bg-background-50 border border-background-200/70 rounded-xl text-sm font-medium text-foreground-700 hover:text-primary-700 hover:border-primary-300 hover:bg-primary-50/30 transition-all duration-300 whitespace-nowrap"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-50/60 text-primary-600 group-hover:bg-primary-100 group-hover:text-primary-700 transition-all duration-300">
                <i className={`${btn.icon} text-sm`} />
              </span>
              {btn.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}