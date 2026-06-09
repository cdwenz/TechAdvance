import { useEffect, useState } from 'react';

interface CategoryNavProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Resources', icon: 'ri-apps-line' },
  { id: 'tools', name: 'Translation Tools', icon: 'ri-tools-line' },
  { id: 'kits', name: 'Translation Kits', icon: 'ri-archive-line' },
  { id: 'training', name: 'Training', icon: 'ri-graduation-cap-line' },
  { id: 'pod', name: 'POD Reference', icon: 'ri-printer-line' },
  { id: 'documents', name: 'Documents', icon: 'ri-file-text-line' },
  { id: 'community', name: 'Community', icon: 'ri-team-line' },
];

export default function CategoryNav({ selectedCategory, onCategoryChange }: CategoryNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="categories" className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-6 sticky top-[81px] z-40 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-lg whitespace-nowrap transition-all duration-500 cursor-pointer font-medium text-sm ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/40 scale-105'
                  : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/70 border border-cyan-500/20 hover:border-cyan-500/40 hover:text-white hover:scale-105'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <i className={`${category.icon} text-lg`}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}