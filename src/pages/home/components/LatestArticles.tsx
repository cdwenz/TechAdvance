import { latestArticles } from '../../../mocks/articles';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../../components/base/AnimatedSection';

interface LatestArticlesProps {
  category: string;
}

export default function LatestArticles({ category }: LatestArticlesProps) {
  const filteredArticles = category === 'all' 
    ? latestArticles 
    : latestArticles.filter(article => article.category === category);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection animation="fadeUp">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-3">Latest Resources</h2>
              <p className="text-gray-400 text-sm">Fresh documents, guides, and updates from TechAdvance</p>
            </div>
            <Link to="/articles" className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all cursor-pointer font-medium text-sm shadow-lg shadow-cyan-500/30 whitespace-nowrap hover:scale-105">
              Load More
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredArticles.map((article, index) => (
            <AnimatedSection key={article.id} animation={index % 2 === 0 ? 'fadeRight' : 'fadeLeft'} delay={index * 100}>
              <Link
                to={`/article/${article.id}`}
                className="group flex gap-5 bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer backdrop-blur-sm hover:-translate-y-1"
              >
                <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden rounded-lg">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-400 rounded-full text-xs font-semibold border border-cyan-500/30">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <div className="flex items-center gap-1.5">
                        <i className="ri-calendar-line"></i>
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <i className="ri-eye-line"></i>
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-semibold text-xs shadow-lg shadow-cyan-500/30">
                        {article.author.charAt(0)}
                      </div>
                      <span className="text-sm font-medium text-gray-300">{article.author}</span>
                    </div>
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors text-sm font-medium flex items-center gap-1">
                      Read More
                      <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
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