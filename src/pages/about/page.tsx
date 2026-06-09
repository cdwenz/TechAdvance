import { useState, useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../components/base/AnimatedSection';

const team = [
  {
    name: 'Translation Tools Lead',
    role: 'Software Development',
    bio: 'Oversees development of BTT Writer, BTT Recorder, and collaboration tools for global translation teams.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20confident%20tech%20developer%20with%20warm%20smile%20wearing%20modern%20business%20casual%20attire%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-01-001&orientation=squarish',
  },
  {
    name: 'Training Coordinator',
    role: 'Education & Training',
    bio: 'Develops training materials for MAST, DOT, SUN, and REV translation methods across language communities.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20friendly%20educator%20trainer%20with%20confident%20expression%20wearing%20smart%20casual%20attire%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-02-001&orientation=squarish',
  },
  {
    name: 'Field Support Specialist',
    role: 'Technical Support',
    bio: 'Provides helpdesk support and on-field technical assistance for translation kits and software tools.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20young%20tech%20support%20specialist%20with%20approachable%20smile%20wearing%20professional%20attire%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-03-001&orientation=squarish',
  },
  {
    name: 'Publication Manager',
    role: 'Print & Digital',
    bio: 'Manages POD resources, printing options, and digital distribution strategies for translated Scripture.',
    image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20experienced%20project%20manager%20with%20professional%20expression%20wearing%20business%20casual%20soft%20studio%20lighting%20clean%20minimal%20background%20high%20quality%20corporate%20photography&width=300&height=300&seq=team-04-001&orientation=squarish',
  },
];

const values = [
  {
    icon: 'ri-global-line',
    title: 'Accessible to All',
    description: 'We believe every language community deserves access to Scripture. Our tools are free, open-source, and designed for use anywhere in the world.',
  },
  {
    icon: 'ri-open-source-line',
    title: 'Open Source',
    description: 'All software is open source and freely available. No licensing fees, no restrictions — just powerful tools for Bible translation.',
  },
  {
    icon: 'ri-community-line',
    title: 'Community First',
    description: 'Our collaboration tools enable any number of people to work together, online or offline, to create the best possible translations.',
  },
];

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 z-0 h-96">
          <img 
            src="https://readdy.ai/api/search-image?query=diverse%20group%20of%20translators%20collaborating%20with%20tablets%20and%20laptops%20in%20modern%20technology%20hub%20warm%20ambient%20lighting%20soft%20focus%20background%20with%20digital%20screens%20showing%20translation%20software%20interfaces%20cyan%20and%20teal%20accent%20lighting%20professional%20documentary%20photography%20style&width=1920&height=700&seq=about-hero-001&orientation=landscape"
            alt="About Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-cyan-400/30 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <i className="ri-team-line text-cyan-400"></i>
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className={`text-5xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              About TechAdvance
            </h1>
            <p className={`text-xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Distributed technology to empower Bible translation. We provide free, open-source software tools and resources to help communities translate Scripture into their own languages.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-20 -mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection animation="scale">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-6 border border-slate-100">
              {[
                { value: 'Free', label: 'Open Source Tools' },
                { value: 'Global', label: 'Community Network' },
                { value: 'Multi', label: 'Translation Methods' },
                { value: '24/7', label: 'Helpdesk Support' },
              ].map((stat, index) => (
                <div key={stat.label} className={`text-center p-4 ${index > 0 ? 'border-l border-slate-100' : ''}`}>
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeRight">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 mb-6 border border-cyan-100">
                <i className="ri-focus-3-line"></i>
                <span className="text-sm font-medium">Our Mission</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Empowering Bible Translation<br />Through Technology
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                TechAdvance exists to make Bible translation technology accessible to every language community. We develop and distribute free, open-source software that enables local translators to create accurate, clear, and natural Scripture in their own languages.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our tools support multiple translation methods — MAST for written and oral translations, DOT for sign language, SUN for the deaf and blind, and REV for updating existing translations. We also provide translation kits, training resources, and 24/7 helpdesk support.
              </p>
              
              {/* Values */}
              <div className="space-y-4">
                {values.map((value, index) => (
                  <AnimatedSection key={value.title} animation="fadeRight" delay={index * 100}>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-1">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                        <i className={`${value.icon} text-white text-lg`}></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                        <p className="text-sm text-gray-600">{value.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeLeft" delay={200}>
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-shadow duration-500">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20technology%20workspace%20with%20multiple%20screens%20showing%20Bible%20translation%20software%20and%20language%20data%20visualizations%20warm%20lighting%20plants%20and%20minimalist%20decor%20creative%20professional%20environment%20with%20cyan%20accent%20lighting&width=600&height=500&seq=about-mission-001&orientation=portrait"
                  alt="Our Workspace"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-xl border-4 border-white animate-float">
                <img
                  src="https://readdy.ai/api/search-image?query=team%20meeting%20discussion%20around%20modern%20conference%20table%20with%20laptops%20tablets%20collaborative%20brainstorming%20session%20warm%20lighting%20professional%20tech%20office%20environment&width=200&height=200&seq=about-meeting-001&orientation=squarish"
                  alt="Team Meeting"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection animation="fadeUp" className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 mb-6 border border-cyan-100">
              <i className="ri-group-line"></i>
              <span className="text-sm font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals supporting Bible translation technology worldwide.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} animation="fadeUp" delay={index * 100} className="h-full">
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-full h-56 overflow-hidden flex-shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6 text-center flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">{member.name}</h3>
                      <p className="text-cyan-600 text-sm font-medium mb-3">{member.role}</p>
                      <p className="text-gray-500 text-sm">{member.bio}</p>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-4">
                      <a href="https://t.me/joinchat/Gkxa1q-oHBEYEjPQ" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-gray-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer hover:scale-110">
                        <i className="ri-telegram-line text-sm"></i>
                      </a>
                      <a href="mailto:helpdesk@techadvancement.com" className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-100 text-gray-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer hover:scale-110">
                        <i className="ri-mail-line text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <AnimatedSection animation="fade">
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://readdy.ai/api/search-image?query=abstract%20global%20technology%20network%20with%20glowing%20interconnected%20nodes%20and%20pathways%20representing%20language%20communities%20and%20digital%20scripture%20distribution%20across%20world%20map%20cyan%20and%20teal%20colors%20with%20dark%20gradient%20background%20and%20particle%20effects&width=1920&height=400&seq=about-cta-001&orientation=landscape"
              alt="CTA Background"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/70"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to receive TA's Newsletter with the latest translation tools, training resources, and community updates.
            </p>
            <Link
              to="/get-started"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all cursor-pointer font-semibold shadow-xl shadow-cyan-500/40 whitespace-nowrap hover:scale-105"
            >
              Get Started <i className="ri-arrow-right-line"></i>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}