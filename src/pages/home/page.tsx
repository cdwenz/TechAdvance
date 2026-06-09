import Header from './components/Header';
import Hero from './components/Hero';
import QuickButtons from './components/QuickButtons';
import ToolsSection from './components/ToolsSection';
import SearchBar from './components/SearchBar';
import DocumentsSection from './components/DocumentsSection';
import TranslationToolsCTA from './components/TranslationToolsCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <QuickButtons />
        <ToolsSection />
        <SearchBar />
        <DocumentsSection />
        <TranslationToolsCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}