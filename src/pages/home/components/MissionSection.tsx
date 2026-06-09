import AnimatedSection from '../../../components/base/AnimatedSection';

export default function MissionSection() {
  const features = [
    {
      icon: 'ri-global-line',
      title: 'Global Reach',
      description: 'Distributed technology that empowers language communities worldwide to translate the Bible into their own heart languages, regardless of location or resources.',
    },
    {
      icon: 'ri-open-source-line',
      title: 'Open Source',
      description: 'All our software tools are free and open source, enabling anyone to start translating today without financial barriers or proprietary restrictions.',
    },
    {
      icon: 'ri-community-line',
      title: 'Community Driven',
      description: 'Collaboration tools enable any number of people to work together, online or offline, to draft and revise their work for the best possible result.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-cyan-400 mb-6 border border-cyan-500/30">
            <i className="ri-lightbulb-line"></i>
            <span className="text-sm font-semibold">Our Mission</span>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Empowering Communities Through Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe every language community deserves access to Scripture in their heart language. Our distributed technology makes Bible translation possible anywhere.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <AnimatedSection key={feature.title} animation="fadeUp" delay={index * 150}>
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-500">
                  <i className={`${feature.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}