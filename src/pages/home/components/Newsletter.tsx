import { useState } from 'react';
import AnimatedSection from '../../../components/base/AnimatedSection';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const formData = new URLSearchParams();
      formData.append('email', email);

      const response = await fetch('https://readdy.ai/api/form/d8k41ngog59vu0tjsu00', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('Successfully subscribed! You will now receive TA\'s Newsletter.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <AnimatedSection animation="scale">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-cyan-400 mb-6 border border-cyan-500/30">
                <i className="ri-mail-line"></i>
                <span className="text-sm font-semibold">Stay Updated</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Subscribe to TA's Newsletter
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
                Subscribe to receive TA's Newsletter. Stay updated with the latest translation tools, training resources, and community news. No spam, unsubscribe anytime.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto" data-readdy-form id="newsletter-form">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all whitespace-nowrap cursor-pointer font-semibold text-sm shadow-lg shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
                </button>
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-cyan-400 text-sm bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-3 animate-fadeIn">
                  <i className="ri-checkbox-circle-line text-lg"></i>
                  <span>{message}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 animate-fadeIn">
                  <i className="ri-error-warning-line text-lg"></i>
                  <span>{message}</span>
                </div>
              )}
            </form>

            <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-slate-700">
              {[
                { icon: 'ri-shield-check-line', text: '100% Privacy' },
                { icon: 'ri-mail-check-line', text: 'No Spam' },
                { icon: 'ri-time-line', text: 'Monthly Updates' },
              ].map((item, index) => (
                <div 
                  key={item.text}
                  className="flex items-center gap-2 text-gray-400 text-sm transition-all duration-300 hover:text-cyan-400"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <i className={`${item.icon} text-cyan-400 text-lg`}></i>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}