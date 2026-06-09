import { useParams, Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { articles } from '../../mocks/articles';

export default function ArticleDetailPage() {
  const { id } = useParams();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="relative pt-20">
          <div className="absolute inset-0 z-0 h-80">
            <img 
              src="https://readdy.ai/api/search-image?query=abstract%20error%20not%20found%20visualization%20with%20scattered%20broken%20data%20fragments%20glowing%20question%20marks%20floating%20particles%20in%20muted%20cyan%20and%20gray%20tones%20against%20dark%20gradient%20background%20with%20subtle%20lighting&width=1920&height=400&seq=article-notfound-001&orientation=landscape"
              alt="Not Found Background"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6 border border-white/20">
              <i className="ri-file-unknow-line text-4xl text-white"></i>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Resource not found</h1>
            <p className="text-white/70 mb-8">The resource you are looking for does not exist or has been moved.</p>
            <Link to="/articles" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:from-cyan-600 hover:to-teal-600 transition-all cursor-pointer font-medium shadow-lg shadow-cyan-500/30 whitespace-nowrap">
              <i className="ri-arrow-left-line"></i> Back to Resources
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 z-0 h-[500px]">
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-32">
          <Link to="/articles" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer mb-8 text-sm">
            <i className="ri-arrow-left-line"></i>
            Back to Resources
          </Link>
          
          <div className="flex items-center gap-3 mb-5">
            <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-full text-xs font-semibold shadow-lg shadow-cyan-500/30">
              {article.category.toUpperCase()}
            </span>
            <span className="text-white/70 text-sm">{article.readTime}</span>
          </div>
          
          <h1 className="text-5xl font-extrabold text-white mb-8 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-xl shadow-cyan-500/30">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-semibold text-white text-lg">{article.author}</p>
              <p className="text-white/70">{article.date}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Card */}
      <div className="relative z-20 -mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-10 border border-slate-100">
            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-cyan-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                {article.excerpt}
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></span>
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                TechAdvance is committed to providing language communities with the tools and resources needed for effective Bible translation. This resource has been developed to support translators in creating accurate, clear, and natural Scripture in their own language.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></span>
                Key Features
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This resource includes comprehensive documentation, step-by-step guides, and practical tools designed to streamline the translation process. Whether you are starting a new project or updating an existing translation, these materials will guide you through every step.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </span>
                  Free and open-source tools available for immediate use
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </span>
                  Collaboration features enabling team-based translation work
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </span>
                  Offline capabilities for use in areas with limited connectivity
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="ri-check-line text-white text-sm"></i>
                  </span>
                  Comprehensive training and support documentation
                </li>
              </ul>
              
              {/* Quote Block */}
              <div className="my-10 p-6 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl border-l-4 border-cyan-500">
                <p className="text-gray-700 italic text-lg mb-3">
                  "The gift of language is a powerful tool for making God's Word accessible to every community. Our technology exists to support that mission."
                </p>
                <p className="text-cyan-600 font-medium text-sm">— TechAdvance Mission</p>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></span>
                Getting Started
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                To begin using this resource, visit the TechAdvance Helpdesk or browse our documentation library. Our support team is available 24/7 to assist with any technical questions or challenges you may encounter.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-teal-500 rounded-full"></span>
                Support & Community
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Connect with other translators and our support team through Telegram, Discord, or our helpdesk email. Join the global community of Bible translators using technology to bring Scripture to every language.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-10 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-500 text-sm font-medium mr-2">Tags:</span>
                <span className="px-3 py-1.5 bg-slate-100 text-gray-600 rounded-full text-xs font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-pointer">Bible Translation</span>
                <span className="px-3 py-1.5 bg-slate-100 text-gray-600 rounded-full text-xs font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-pointer">Open Source</span>
                <span className="px-3 py-1.5 bg-slate-100 text-gray-600 rounded-full text-xs font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-pointer">{article.category}</span>
                <span className="px-3 py-1.5 bg-slate-100 text-gray-600 rounded-full text-xs font-medium hover:bg-cyan-50 hover:text-cyan-600 transition-colors cursor-pointer">Community</span>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <p className="text-gray-900 font-semibold">Share this resource</p>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-gray-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer">
                    <i className="ri-twitter-x-line"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-gray-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer">
                    <i className="ri-telegram-line"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-gray-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer">
                    <i className="ri-discord-line"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-gray-600 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer">
                    <i className="ri-link"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Author Card */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-slate-50 to-cyan-50/30 rounded-2xl p-8 border border-slate-200">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-500 flex items-center justify-center text-white font-bold text-2xl shadow-xl shadow-cyan-500/30 flex-shrink-0">
              {article.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm text-cyan-600 font-medium mb-1">Provided by</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{article.author}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Dedicated to supporting Bible translation through technology. For questions or support, contact our helpdesk at helpdesk@techadvancement.com.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://t.me/joinchat/Gkxa1q-oHBEYEjPQ" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer border border-slate-200">
                  <i className="ri-telegram-line text-sm"></i>
                </a>
                <a href="mailto:helpdesk@techadvancement.com" className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-500 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer border border-slate-200">
                  <i className="ri-mail-line text-sm"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-gradient-to-b from-slate-50 to-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Resources</h2>
                <p className="text-gray-600">Continue exploring {article.category} resources</p>
              </div>
              <Link to="/articles" className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-gray-700 rounded-lg hover:border-cyan-500 hover:text-cyan-600 transition-all cursor-pointer font-medium text-sm whitespace-nowrap">
                View All <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map(related => (
                <Link
                  key={related.id}
                  to={`/article/${related.id}`}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all cursor-pointer"
                >
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-50 to-teal-50 text-cyan-600 rounded-full text-xs font-medium border border-cyan-100">
                        {related.category.toUpperCase()}
                      </span>
                      <span className="text-gray-400 text-xs">{related.readTime}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">{related.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}