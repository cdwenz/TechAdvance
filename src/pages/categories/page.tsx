import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { articles } from '../../mocks/articles';
import AnimatedSection from '../../components/base/AnimatedSection';

const categories = [
  {
    id: 'tools',
    name: 'Translation Tools',
    description: 'Free, open-source software for Bible translation including BTT Writer, BTT Recorder, and collaboration tools.',
    icon: 'ri-tools-line',
    color: 'from-cyan-500 to-teal-500',
    image: 'https://readdy.ai/api/search-image?query=modern%20software%20translation%20workspace%20interface%20with%20multiple%20screens%20showing%20collaborative%20text%20editing%20tools%20and%20language%20resources%20warm%20cyan%20and%20teal%20accent%20lighting%20on%20clean%20dark%20background%20professional%20digital%20technology%20environment%20with%20glowing%20UI%20elements&width=400&height=250&seq=cat-tools-001&orientation=landscape',
  },
  {
    id: 'kits',
    name: 'Translation Kits',
    description: 'Equipment specifications and configurations for laptops, tablets, and solar solutions for translation projects.',
    icon: 'ri-archive-line',
    color: 'from-amber-500 to-orange-500',
    image: 'https://readdy.ai/api/search-image?query=professional%20technology%20kit%20setup%20with%20rugged%20laptop%20tablet%20solar%20panel%20charging%20station%20and%20portable%20equipment%20arranged%20on%20wooden%20desk%20in%20warm%20natural%20light%20clean%20minimal%20background%20editorial%20product%20photography%20style&width=400&height=250&seq=cat-kits-001&orientation=landscape',
  },
  {
    id: 'training',
    name: 'Training',
    description: 'Comprehensive training materials for MAST, DOT, SUN, and REV translation methods.',
    icon: 'ri-graduation-cap-line',
    color: 'from-cyan-500 to-teal-500',
    image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20translators%20collaborating%20around%20table%20with%20laptops%20and%20tablets%20in%20modern%20community%20workspace%20warm%20ambient%20lighting%20professional%20documentary%20photography%20style%20with%20natural%20colors%20and%20soft%20focus%20background&width=400&height=250&seq=cat-training-001&orientation=landscape',
  },
  {
    id: 'pod',
    name: 'POD Reference',
    description: 'Print-on-demand manuals, reports, and printing option selection charts for Scripture publication.',
    icon: 'ri-printer-line',
    color: 'from-rose-500 to-pink-500',
    image: 'https://readdy.ai/api/search-image?query=modern%20digital%20printing%20facility%20with%20high-speed%20printers%20producing%20colorful%20books%20and%20documents%20clean%20organized%20workspace%20with%20stacks%20of%20freshly%20printed%20materials%20warm%20professional%20lighting%20editorial%20photography%20style&width=400&height=250&seq=cat-pod-001&orientation=landscape',
  },
  {
    id: 'documents',
    name: 'Documents',
    description: 'Newsletters, guides, decision trees, and procedures for translation projects and equipment purchasing.',
    icon: 'ri-file-text-line',
    color: 'from-emerald-500 to-green-500',
    image: 'https://readdy.ai/api/search-image?query=organized%20collection%20of%20technical%20manuals%20and%20reports%20stacked%20neatly%20on%20modern%20desk%20with%20digital%20tablet%20showing%20document%20viewer%20warm%20professional%20office%20lighting%20clean%20minimal%20background%20editorial%20photography%20style&width=400&height=250&seq=cat-documents-001&orientation=landscape',
  },
  {
    id: 'community',
    name: 'Community',
    description: 'Connect with other translators through Telegram, Discord, and our helpdesk for support and collaboration.',
    icon: 'ri-team-line',
    color: 'from-cyan-500 to-teal-500',
    image: 'https://readdy.ai/api/search-image?query=diverse%20group%20of%20people%20collaborating%20around%20modern%20technology%20hub%20with%20digital%20screens%20and%20global%20map%20connections%20warm%20ambient%20lighting%20professional%20community%20workspace%20with%20cyan%20accent%20highlights%20documentary%20photography&width=400&height=250&seq=cat-community-001&orientation=landscape',
  },
];

export default function CategoriesPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getArticleCount = (categoryId: string) => {
    return articles.filter(a => a.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="absolute inset-0 z-0 h-80">
          <img 
            src="https://readdy.ai/api/search-image?query=abstract%20technology%20categories%20visualization%20with%20multiple%20glowing%20hexagonal%20portals%20interconnected%20topic%20nodes%20floating%20category%20icons%20luminous%20pathways%20in%20cyan%20teal%20and%20electric%20blue%20colors%20against%20deep%20dark%20gradient%20with%20particle%20effects%20depth%20layers%20volumetric%20lighting&width=1920&height=600&seq=categories-hero-001&orientation=landscape"
            alt="Categories Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-20">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white mb-6 border border-cyan-400/30 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <i className="ri-folder-line text-cyan-400"></i>
              <span className="text-sm font-medium">Browse Resources</span>
            </div>
            <h1 className={`text-5xl font-extrabold text-white leading-tight mb-5 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Resource Categories
            </h1>
            <p className={`text-xl text-white/90 leading-relaxed transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Browse resources by category. Find the tools, training, and documentation you need for your translation project.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <AnimatedSection key={category.id} animation="fadeUp" delay={index * 100}>
              <Link
                to={`/articles?category=${category.id}`}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 cursor-pointer flex flex-col hover:-translate-y-2"
              >
                <div className="w-full h-40 overflow-hidden relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-grow">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-gray-500 font-medium">
                      {getArticleCount(category.id)} resources
                    </span>
                    <span className="text-cyan-600 text-sm font-medium group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                      Explore <i className="ri-arrow-right-line"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}