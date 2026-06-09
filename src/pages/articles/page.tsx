import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { articles } from '../../mocks/articles';
import AnimatedSection from '../../components/base/AnimatedSection';

const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'tools', name: 'Translation Tools' },
  { id: 'kits', name: 'Translation Kits' },
  { id: 'training', name: 'Training' },
  { id: 'pod', name: 'POD Reference' },
  { id: 'documents', name: 'Documents' },
  { id: 'community', name: 'Community' },
];

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 z-0 h-80">
          <img 
            src="https://readdy.ai/api/search-image?query=abstract%20digital%20library%20visualization%20with%20floating%20holographic%20document%20pages%20glowing%20data%20streams%20interconnected%20knowledge%20nodes%20luminous%20text%20particles%20flowing%20through%20dark%20space%20with%20cyan%20teal%20and%20electric%20blue%20accents%20futuristic%20information%20architecture%20with%20depth%20layers%20volumetric%20lighting&width=1920&height=600&seq=articles-hero-001&orientation=landscape"
            alt="Resources Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-cyan-400/30 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <i className="ri-article-line text-cyan-400"></i>
              <span className="text-sm font-medium">Resource Hub</span>
            </div>
            <h1 className={`text-5xl font-extrabold text-white leading-tight mb-5 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Resources & Documents
            </h1>
            <p className={`text-xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Explore our collection of free tools, training materials, guides, and documentation for Bible translation projects.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <AnimatedSection animation="fadeUp">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-white shadow-lg shadow-cyan-500/30 scale-105'
                      : 'bg-slate-100 text-gray-600 hover:bg-slate-200 hover:scale-105'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, index) => (
            <AnimatedSection key={article.id} animation="fadeUp" delay={index * 80}>
              <Link
                to={`/article/${article.id}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 cursor-pointer block hover:-translate-y-2"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-600 rounded-full text-xs font-medium border border-cyan-100">
                      {article.category.toUpperCase()}
                    </span>
                    <span className="text-gray-400 text-xs">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-cyan-500/30">
                      {article.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.date}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <AnimatedSection animation="scale">
            <div className="text-center py-16">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500/10 to-teal-500/10 flex items-center justify-center mx-auto mb-4">
                <i className="ri-article-line text-4xl text-cyan-500"></i>
              </div>
              <p className="text-gray-500">No resources found matching your criteria.</p>
            </div>
          </AnimatedSection>
        )}
      </div>

      <Footer />
    </div>
  );
}