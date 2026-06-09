import { useState } from 'react';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import FeaturedArticles from './components/FeaturedArticles';
import MissionSection from './components/MissionSection';
import LatestArticles from './components/LatestArticles';
import Newsletter from './components/Newsletter';
import Testimonials from './components/Testimonials';
import Footer from '../../components/feature/Footer';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <CategoryNav selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <FeaturedArticles category={selectedCategory} />
      <LatestArticles category={selectedCategory} />
      <MissionSection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}