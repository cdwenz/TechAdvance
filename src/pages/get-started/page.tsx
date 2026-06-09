import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AnimatedSection from '../../components/base/AnimatedSection';

const interests = [
  { id: 'tools', name: 'Translation Tools', icon: 'ri-tools-line' },
  { id: 'training', name: 'Training', icon: 'ri-graduation-cap-line' },
  { id: 'kits', name: 'Translation Kits', icon: 'ri-archive-line' },
  { id: 'pod', name: 'POD Reference', icon: 'ri-printer-line' },
  { id: 'documents', name: 'Documents', icon: 'ri-file-text-line' },
  { id: 'community', name: 'Community', icon: 'ri-team-line' },
];

export default function GetStartedPage() {
  const [step, setStep] = useState(1);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleInterest = (id: string) => {
    setSelectedInterests(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || selectedInterests.length === 0) return;

    setIsSubmitting(true);
    
    try {
      const formData = new URLSearchParams();
      formData.append('email', email);
      formData.append('name', name);
      formData.append('interests', selectedInterests.join(', '));

      await fetch('https://readdy.ai/api/form/d8k41ngog59vu0tjsu00', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });

      setIsComplete(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative pt-20">
          <div className="absolute inset-0 z-0 h-screen">
            <img 
              src="https://readdy.ai/api/search-image?query=celebration%20success%20achievement%20visualization%20with%20glowing%20particles%20confetti%20light%20rays%20ascending%20energy%20streams%20in%20cyan%20teal%20and%20gold%20colors%20against%20dark%20gradient%20background%20with%20volumetric%20lighting%20cinematic%20atmosphere&width=1920&height=1080&seq=getstarted-success-001&orientation=landscape"
              alt="Success Background"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          </div>
          
          <div className="relative z-10 min-h-[80vh] flex items-center justify-center px-6">
            <div className="max-w-lg text-center animate-scaleIn">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-cyan-500/40 animate-float">
                <i className="ri-check-line text-5xl text-white"></i>
              </div>
              <h1 className="text-4xl font-extrabold text-white mb-5">You are all set!</h1>
              <p className="text-white/80 text-lg mb-10">
                Welcome to TechAdvance. You will now receive TA's Newsletter with the latest translation tools, training resources, and community updates.
              </p>
              <Link
                to="/articles"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all cursor-pointer font-semibold shadow-xl shadow-cyan-500/40 whitespace-nowrap hover:scale-105"
              >
                Explore Resources <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 z-0 h-80">
          <img 
            src="https://readdy.ai/api/search-image?query=welcoming%20onboarding%20journey%20visualization%20with%20glowing%20pathway%20stepping%20stones%20ascending%20light%20trails%20floating%20interface%20elements%20in%20cyan%20teal%20colors%20against%20dark%20gradient%20background%20with%20particle%20effects%20volumetric%20lighting%20warm%20inviting%20atmosphere&width=1920&height=600&seq=getstarted-hero-001&orientation=landscape"
            alt="Get Started Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-cyan-400/30 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <i className="ri-rocket-line text-cyan-400"></i>
              <span className="text-sm font-medium">Join the Community</span>
            </div>
            <h1 className={`text-5xl font-extrabold text-white leading-tight mb-5 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Subscribe to TA's Newsletter
            </h1>
            <p className={`text-xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Subscribe to receive TA's Newsletter. Select your interests and never miss an update on translation tools, training, and community news.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative z-20 -mt-8 pb-20">
        <div className="max-w-xl mx-auto px-6">
          <AnimatedSection animation="scale">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
              {/* Progress */}
              <div className="flex items-center justify-center gap-3 mb-10">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-500 ${
                  step >= 1 ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30 scale-110' : 'bg-slate-200 text-gray-500'
                }`}>1</div>
                <div className={`w-20 h-1 rounded-full transition-all duration-500 ${step >= 2 ? 'bg-gradient-to-r from-cyan-500 to-teal-500' : 'bg-slate-200'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm transition-all duration-500 ${
                  step >= 2 ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30 scale-110' : 'bg-slate-200 text-gray-500'
                }`}>2</div>
              </div>

              {/* Step 1: Select Interests */}
              <div className={`transition-all duration-500 ${step === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">What interests you?</h2>
                <p className="text-gray-600 text-center mb-8">
                  Select topics you would like to follow. Choose at least one.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {interests.map((interest, index) => (
                    <button
                      key={interest.id}
                      onClick={() => toggleInterest(interest.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left hover:scale-105 ${
                        selectedInterests.includes(interest.id)
                          ? 'border-cyan-500 bg-gradient-to-br from-cyan-50 to-teal-50 shadow-lg shadow-cyan-500/10'
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-md'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-all duration-300 ${
                        selectedInterests.includes(interest.id)
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30'
                          : 'bg-slate-100 text-gray-500'
                      }`}>
                        <i className={`${interest.icon} text-xl`}></i>
                      </div>
                      <span className={`font-medium text-sm transition-colors ${
                        selectedInterests.includes(interest.id) ? 'text-cyan-700' : 'text-gray-700'
                      }`}>
                        {interest.name}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={selectedInterests.length === 0}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedInterests.length > 0
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 shadow-lg shadow-cyan-500/30 hover:scale-105'
                      : 'bg-slate-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              </div>

              {/* Step 2: Enter Details */}
              <div className={`transition-all duration-500 ${step === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">Almost there!</h2>
                <p className="text-gray-600 text-center mb-8">
                  Enter your details to complete your subscription.
                </p>

                <form 
                  id="get-started-form"
                  data-readdy-form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name (optional)</label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      required
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <input type="hidden" name="interests" value={selectedInterests.join(', ')} />

                  <div className="flex items-center gap-4 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3.5 bg-slate-100 text-gray-700 rounded-xl hover:bg-slate-200 transition-all duration-300 cursor-pointer font-medium whitespace-nowrap hover:scale-105"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!email || isSubmitting}
                      className={`flex-1 py-3.5 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        email && !isSubmitting
                          ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white hover:from-cyan-600 hover:to-teal-600 shadow-lg shadow-cyan-500/30 hover:scale-105'
                          : 'bg-slate-200 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe Now'}
                    </button>
                  </div>
                </form>

                <p className="text-center text-gray-500 text-xs mt-6">
                  By subscribing, you agree to receive TA's Newsletter. You can unsubscribe at any time.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <Footer />
    </div>
  );
}