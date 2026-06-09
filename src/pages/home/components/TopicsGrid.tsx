const topics = [
  {
    id: 1,
    title: 'Artificial Intelligence',
    description: 'Machine learning, neural networks, and AI applications',
    icon: 'ri-robot-line',
    articles: 342,
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 2,
    title: 'Blockchain & Web3',
    description: 'Cryptocurrency, DeFi, and decentralized technologies',
    icon: 'ri-links-line',
    articles: 218,
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    title: 'Quantum Computing',
    description: 'Quantum algorithms, qubits, and quantum supremacy',
    icon: 'ri-cpu-line',
    articles: 156,
    gradient: 'from-cyan-400 to-teal-600'
  },
  {
    id: 4,
    title: 'Cybersecurity',
    description: 'Threat detection, encryption, and security best practices',
    icon: 'ri-lock-line',
    articles: 289,
    gradient: 'from-teal-500 to-cyan-600'
  },
  {
    id: 5,
    title: 'IoT & Edge Computing',
    description: 'Connected devices, sensors, and edge infrastructure',
    icon: 'ri-wifi-line',
    articles: 195,
    gradient: 'from-blue-600 to-cyan-500'
  },
  {
    id: 6,
    title: 'AR/VR & Metaverse',
    description: 'Immersive experiences and virtual worlds',
    icon: 'ri-glasses-line',
    articles: 167,
    gradient: 'from-indigo-500 to-blue-600'
  },
];

export default function TopicsGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Explore by Topic</h2>
          <p className="text-gray-400 text-sm">Dive deep into the technologies shaping our future</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <div 
              key={topic.id}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-cyan-500/20 flex flex-col"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${topic.gradient} rounded-lg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30`}>
                <i className={`${topic.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {topic.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                {topic.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                <span className="text-sm text-gray-400">
                  <strong className="text-cyan-400 font-semibold">{topic.articles}</strong> articles
                </span>
                <button className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer text-sm font-medium flex items-center gap-1">
                  Explore
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
