import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Footer() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    topic: '',
    message: '',
  });
  const { ref: formRef, isVisible: formVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const handleContactSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://readdy.ai/api/form/d8g4g0rtvf9bji89p37g', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        setFormStatus('success');
        setContactFormData({ name: '', email: '', topic: '', message: '' });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const navLinks = [
    { label: 'Home', href: 'https://techadvancement.com/' },
    { label: 'Resources', href: 'https://techadvancement.com/newsletter/' },
    { label: 'Helpdesk', href: 'https://helpdesk.techadvancement.com/helpdesk', external: true },
  ];

  const resourceLinks = [
    { label: 'Tools', href: 'https://techadvancement.com/translation-tools/' },
    { label: 'Translation', href: 'https://techadvancement.com/translation-methods/' },
    { label: 'Training', href: 'https://techadvancement.com/training/' },
    { label: 'Knowledge Base', href: 'https://techadvancement.com/knowledge-base/', external: true },
  ];

  const partnerLinks = [
    { label: 'Helpdesk', href: 'https://techadvancement.freshdesk.com/', icon: 'https://techadvancement.com/wp-content/uploads/2020/07/boat-1.png' },
    { label: 'Bible Translation Tools', href: 'https://bibletranslationtools.org/', icon: 'https://techadvancement.com/wp-content/uploads/2020/07/tablet.png' },
    { label: 'Bible Techs', href: 'https://bibletechs.org/', icon: 'https://techadvancement.com/wp-content/uploads/2020/07/global-1.png' },
  ];

  return (
    <footer className="bg-primary-950">
      <div className="w-full px-5 md:px-8 lg:px-10 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-12 md:mb-16">
            <img
              src="https://techadvancement.com/wp-content/uploads/2023/12/TA-new111.png"
              alt="TechAdvance Logo"
              width={40}
              height={46}
              className="h-10 w-auto mb-4 opacity-80"
            />
            <p className="text-sm text-primary-400/80 italic tracking-wide">
              Distributed technology to empower Bible translation.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14 md:mb-16 pb-14 md:pb-16 border-b border-primary-800/40">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 font-label">Navigation</h3>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-primary-300/70 hover:text-accent-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 font-label">Resources</h3>
              <ul className="space-y-2.5">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-primary-300/70 hover:text-accent-400 transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 font-label">Partners</h3>
              <ul className="space-y-3">
                {partnerLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-sm text-primary-300/70 hover:text-accent-400 transition-colors duration-300"
                    >
                      <img src={link.icon} alt="" width={28} height={28} className="w-7 h-7 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-xs font-semibold text-primary-400 uppercase tracking-[0.2em] mb-4 font-label">Newsletter</h3>
              <p className="text-sm text-primary-300/70 mb-4 leading-relaxed">
                Subscribe to receive TA's latest updates and resources.
              </p>
              <a
                href="https://techadvancement.com/newsletter/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500/10 text-accent-400 rounded-lg text-sm font-medium hover:bg-accent-500/20 transition-all duration-300 border border-accent-500/20"
              >
                Subscribe
                <i className="ri-arrow-right-line text-xs" />
              </a>
            </div>
          </div>

          <div
            ref={formRef}
            className={`max-w-2xl mx-auto mb-14 md:mb-16 transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <h2 className="text-xl md:text-2xl font-bold text-primary-200 font-heading mb-2 text-center tracking-tight">
              TechAdvance Helpdesk
            </h2>
            <p className="text-sm text-primary-400/70 text-center mb-8">
              Need help? Send us a message and we'll get back to you.
            </p>
            <form
              id="techadvance-contact"
              data-readdy-form
              onSubmit={handleContactSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="sr-only">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                    value={contactFormData.name}
                    onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-primary-800/40 bg-primary-900/40 text-primary-200 placeholder:text-primary-500/80 focus:outline-none focus:ring-2 focus:ring-primary-400/20 focus:border-primary-700/40 transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                    value={contactFormData.email}
                    onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                    className="w-full text-sm px-4 py-3 rounded-xl border border-primary-800/40 bg-primary-900/40 text-primary-200 placeholder:text-primary-500/80 focus:outline-none focus:ring-2 focus:ring-primary-400/20 focus:border-primary-700/40 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-topic" className="sr-only">Topic</label>
                <input
                  id="contact-topic"
                  name="topic"
                  type="text"
                  required
                  placeholder="Topic (bttw / bttr / VMast / DOT / SUN / Publication)"
                  value={contactFormData.topic}
                  onChange={(e) => setContactFormData({ ...contactFormData, topic: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-primary-800/40 bg-primary-900/40 text-primary-200 placeholder:text-primary-500/80 focus:outline-none focus:ring-2 focus:ring-primary-400/20 focus:border-primary-700/40 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  maxLength={500}
                  placeholder="Message"
                  value={contactFormData.message}
                  onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                  className="w-full text-sm px-4 py-3 rounded-xl border border-primary-800/40 bg-primary-900/40 text-primary-200 placeholder:text-primary-500/80 focus:outline-none focus:ring-2 focus:ring-primary-400/20 focus:border-primary-700/40 transition-all duration-300 resize-none"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="px-7 py-3 bg-accent-500 text-background-50 rounded-xl text-sm font-semibold hover:bg-accent-600 transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {formStatus === 'success' && (
                <p className="text-sm text-secondary-400 text-center">Thank you! Your message has been sent.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-sm text-accent-400 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          <div className="border-t border-primary-800/40 pt-8">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
                  <img src="https://techadvancement.com/wp-content/uploads/2020/07/cc-small.png" alt="Creative Commons" width={88} height={31} className="h-7 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://techadvancement.com/privacy-policy/" className="text-sm text-primary-400/50 hover:text-accent-400 transition-colors duration-300">
                  Privacy Policy
                </a>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xs text-primary-500/70">
                  Copyright &copy;2026 | All Rights Reserved
                </p>
                <p className="text-xs text-primary-500/70">
                  This work is licensed under a{' '}
                  <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license" className="text-accent-400/60 hover:text-accent-400 transition-colors">
                    Creative Commons Attribution-ShareAlike 4.0 International License
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}