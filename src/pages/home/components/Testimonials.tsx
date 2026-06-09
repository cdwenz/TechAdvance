import AnimatedSection from '../../../components/base/AnimatedSection';

const testimonials = [
  {
    id: 1,
    name: 'Maria Santos',
    role: 'Translation Coordinator',
    company: 'Philippines Language Team',
    content: 'TechAdvance tools have transformed our translation process. BTT Writer and the collaboration features allow our team to work together seamlessly, even in remote areas with limited connectivity.',
    avatar: 'MS',
    rating: 5
  },
  {
    id: 2,
    name: 'Jean-Pierre Ndaye',
    role: 'MAST Facilitator',
    company: 'Central Africa',
    content: 'The translation kits provided by TechAdvance are perfectly configured for our field work. The solar power solutions keep us working even when grid electricity is unavailable.',
    avatar: 'JN',
    rating: 5
  },
  {
    id: 3,
    name: 'Ana Rodriguez',
    role: 'Oral Bible Translator',
    company: 'Latin America',
    content: 'The Orature training resources and BTT Recorder have been invaluable for our oral translation project. We are now able to record and share Scripture in our community language.',
    avatar: 'AR',
    rating: 5
  },
  {
    id: 4,
    name: 'David Kimani',
    role: 'Technology Support',
    company: 'East Africa',
    content: 'The helpdesk support is exceptional. Whenever our team faces technical challenges with the software, the TechAdvance team responds quickly with solutions that keep our project moving.',
    avatar: 'DK',
    rating: 5
  },
  {
    id: 5,
    name: 'Li Wei',
    role: 'DOT Translation Lead',
    company: 'East Asia',
    content: 'The DOT method and training materials have enabled our deaf community to translate Scripture into sign language. TechAdvance is making Bible translation accessible to everyone.',
    avatar: 'LW',
    rating: 5
  },
  {
    id: 6,
    name: 'Rachel Okafor',
    role: 'Community Literacy Worker',
    company: 'West Africa',
    content: 'The SUN method for people who cannot read has been a blessing. Our blind community members can now access Scripture through touch-based reading systems provided by TechAdvance.',
    avatar: 'RO',
    rating: 5
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-500/10 backdrop-blur-sm rounded-full text-cyan-400 mb-6 border border-cyan-500/30">
            <i className="ri-chat-quote-line"></i>
            <span className="text-sm font-semibold">Community Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">Impact Around the World</h2>
          <p className="text-gray-400 text-sm">Hear from translation teams using TechAdvance tools</p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} animation="scale" delay={index * 100}>
              <div 
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-7 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 flex flex-col h-full hover:-translate-y-2"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-cyan-400 text-lg animate-pulse" style={{ animationDelay: `${i * 100}ms` }}></i>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-slate-700">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/30">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-400">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}