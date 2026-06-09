import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function DocumentsSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({
    threshold: 0.15,
  });

  return (
    <section className="bg-background-50 py-16 md:py-24">
      <div className="w-full px-5 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-[0.25em] mb-3 font-label">
              Resources
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 font-heading tracking-tight">
              Documents
            </h2>
          </div>

          <a
            href="https://techadvancement.com/documents/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group block
              rounded-3xl
              border border-background-200/50
              bg-background-50
              overflow-hidden
              transition-all duration-500
              hover:border-primary-300/60
              hover:-translate-y-1
            "
          >
            <div className="relative p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-accent-50 opacity-60" />

              <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:scale-105 transition-transform duration-300">
                    <i className="ri-file-text-line text-4xl" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground-900 font-heading mb-4">
                    Translation Training Documents
                  </h3>

                  <p className="text-foreground-600 leading-relaxed max-w-2xl">
                    Access training materials, technical guides,
                    support documentation, and resources designed
                    to help translation teams work effectively
                    throughout the Bible translation process.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-600 text-white font-medium transition-all duration-300 group-hover:bg-primary-700">
                    Browse Documents
                    <i className="ri-arrow-right-line" />
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}