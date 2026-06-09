import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section className="bg-background-100 py-16 md:py-24">
      <div className="w-full px-5 md:px-8 lg:px-10">
        <div
          ref={ref}
          className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary-600 text-xs font-semibold uppercase tracking-[0.25em] mb-3 font-label">
              Connect
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground-900 font-heading tracking-tight">
              Get in Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-10">
            <div className="text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-background-50 border border-background-200/50 mb-5 transition-all duration-300 group-hover:border-primary-300/50 group-hover:-translate-y-1">
                <i className="ri-telegram-fill text-2xl text-primary-600" />
              </div>
              <h4 className="text-base font-semibold text-foreground-900 mb-4 font-heading">Telegram</h4>
              <div className="flex flex-wrap justify-center gap-2 max-w-[200px] mx-auto">
                {[
                  { label: 'En', href: 'https://t.me/joinchat/Gkxa1q-oHBEYEjPQ' },
                  { label: 'Fr', href: 'https://t.me/joinchat/YLggzAO0MCE1NTkx' },
                  { label: 'Es', href: 'https://t.me/joinchat/XVjJIaNzVrNjNDhh' },
                  { label: 'Pt', href: 'https://t.me/+mkrEExZPhVkyNmYx' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 border border-background-200/60 rounded-lg text-xs font-medium text-primary-600 hover:bg-primary-50 hover:border-primary-200 transition-all duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-background-50 border border-background-200/50 mb-5 transition-all duration-300 group-hover:border-primary-300/50 group-hover:-translate-y-1">
                <i className="ri-discord-fill text-2xl text-primary-600" />
              </div>
              <h4 className="text-base font-semibold text-foreground-900 mb-2 font-heading">
                <a href="https://discord.com/invite/WscT5aC" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                  Discord
                </a>
              </h4>
              <p className="text-xs text-foreground-500">Join our community</p>
            </div>

            <div className="text-center group">
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-background-50 border border-background-200/50 mb-5 transition-all duration-300 group-hover:border-primary-300/50 group-hover:-translate-y-1">
                <i className="ri-mail-line text-2xl text-primary-600" />
              </div>
              <h4 className="text-base font-semibold text-foreground-900 mb-2 font-heading">
                <a href="mailto:helpdesk@techadvancement.com" className="hover:text-primary-600 transition-colors">
                  Helpdesk Email
                </a>
              </h4>
              <p className="text-xs text-foreground-500">helpdesk@techadvancement.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}