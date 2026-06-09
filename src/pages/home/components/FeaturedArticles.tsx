import { featuredArticles } from '../../../mocks/articles';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../../components/base/AnimatedSection';

interface FeaturedArticlesProps {
  category: string;
}

export default function FeaturedArticles({ category }: FeaturedArticlesProps) {
  const filteredArticles = category === 'all' 
    ? featuredArticles 
    : featuredArticles.filter(article => article.category === category);

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection animation="fadeUp">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-3">Resources & Tools</h2>
              <p className="text-gray-400 text-sm">Free tools and resources to empower Bible translation</p>
            </div>
            <Link to="/articles" className="px-6 py-2.5 bg-slate-800 text-cyan-400 rounded-lg hover:bg-slate-700 transition-all cursor-pointer font-medium text-sm border border-cyan-500/30 hover:border-cyan-500/50 whitespace-nowrap hover:scale-105">
              View All
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <AnimatedSection key={article.id} animation="fadeUp" delay={index * 100}>
              <Link
                to={`/article/${article.id}`}
                className="group bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer backdrop-blur-sm block hover:-translate-y-2"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-semibold shadow-lg shadow-cyan-500/30">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <i className="ri-calendar-line"></i>
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <i className="ri-time-line"></i>
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-semibold text-sm shadow-lg shadow-cyan-500/30">
                        {article.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm">{article.author}</div>
                        <div className="text-xs text-gray-400">Resource</div>
                      </div>
                    </div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-700 text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white transition-all">
                      <i className="ri-arrow-right-line text-lg group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}