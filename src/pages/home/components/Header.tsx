import { useState } from 'react';
import { useHeaderScroll } from '@/hooks/useScrollReveal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [podOpen, setPodOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const isScrolled = useHeaderScroll(60);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background-50/90 backdrop-blur-xl border-b border-background-200/40'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full flex items-center justify-between px-5 md:px-8 lg:px-10 py-4">
        <a href="https://techadvancement.com/" className="flex items-center gap-3">
          <img
            src="https://techadvancement.com/wp-content/uploads/2023/12/TA-new111.png"
            alt="TechAdvance Logo"
            width={40}
            height={46}
            className="h-10 w-auto"
          />
          <span className={`font-heading font-semibold text-lg tracking-tight transition-colors duration-300 ${isScrolled ? 'text-foreground-900' : 'text-background-50'}`}>
            TechAdvance
          </span>
        </a>

        <button
          type="button"
          className={`md:hidden w-10 h-10 flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'text-foreground-900' : 'text-background-50'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`ri-${menuOpen ? 'close' : 'menu'}-line text-xl`} />
        </button>

        <nav
          className={`${menuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-1 md:gap-1 absolute md:static top-full left-0 right-0 md:w-auto bg-background-50/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none border-b md:border-0 border-background-200/40 px-5 md:px-0 py-4 md:py-0`}
        >
          <a href="https://techadvancement.com/" className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-white/10 ${isScrolled ? 'text-foreground-700 hover:text-primary-600' : 'text-background-50/90 hover:text-background-50'}`}>
            Home
          </a>

          <div className="relative group">
            <button
              type="button"
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-all duration-300 hover:bg-white/10 ${isScrolled ? 'text-foreground-700 hover:text-primary-600' : 'text-background-50/90 hover:text-background-50'}`}
              onClick={() => setResourcesOpen(!resourcesOpen)}
            >
              Resources
              <i className="ri-arrow-down-s-line text-xs transition-transform duration-300" style={{ transform: resourcesOpen ? 'rotate(180deg)' : '' }} />
            </button>
            <div className={`${resourcesOpen ? 'block' : 'hidden'} md:group-hover:block md:opacity-0 md:group-hover:opacity-100 md:invisible md:group-hover:visible md:translate-y-2 md:group-hover:translate-y-0 absolute left-0 top-full mt-2 bg-background-50 rounded-xl border border-background-200/50 min-w-[280px] z-50 py-2 transition-all duration-300 shadow-lg shadow-foreground-900/5`}>
              <a href="https://techadvancement.com/newsletter/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Monthly Newsletter</a>
              <a href="https://techadvancement.com/community/?wpforo=signin" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Community Login</a>
              <a href="https://techadvancement.com/orature-training" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Orature Training</a>
              <a href="https://techadvancement.com/bible-sequence-numbers/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Bible Sequence Numbers</a>
              <a href="https://techadvancement.com/mast-software-decision-tree/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">MAST Software Decision Tree</a>
              <a href="https://techadvancement.com/wp-content/uploads/2023/09/Procedures-for-Purchasing-Equipment-.pdf" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Procedures for Purchasing Equipment</a>
              <a href="https://techadvancement.com/translation-kits/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Translation Kits</a>
              <a href="https://techadvancement.com/translation-tech/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Tools</a>
            </div>
          </div>

          <div className="relative group">
            <button
              type="button"
              className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap flex items-center gap-1 transition-all duration-300 hover:bg-white/10 ${isScrolled ? 'text-foreground-700 hover:text-primary-600' : 'text-background-50/90 hover:text-background-50'}`}
              onClick={() => setPodOpen(!podOpen)}
            >
              POD Reference
              <i className="ri-arrow-down-s-line text-xs transition-transform duration-300" style={{ transform: podOpen ? 'rotate(180deg)' : '' }} />
            </button>
            <div className={`${podOpen ? 'block' : 'hidden'} md:group-hover:block md:opacity-0 md:group-hover:opacity-100 md:invisible md:group-hover:visible md:translate-y-2 md:group-hover:translate-y-0 absolute left-0 top-full mt-2 bg-background-50 rounded-xl border border-background-200/50 min-w-[240px] z-50 py-2 transition-all duration-300 shadow-lg shadow-foreground-900/5`}>
              <a href="https://techadvancement.com/pod-manuals/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">POD Manuals</a>
              <a href="https://techadvancement.com/pod-reports/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">POD Reports</a>
              <a href="https://techadvancement.com/wp-content/uploads/2021/09/Printing-Option-Selection-Chart.pdf" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Printing Option Selection</a>
              <a href="https://techadvancement.com/library/" className="block px-4 py-2.5 text-sm text-foreground-700 hover:text-primary-600 hover:bg-primary-50/40 transition-colors rounded-lg mx-1">Library</a>
            </div>
          </div>

          <a href="https://techadvancement.com/documents/" className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-white/10 ${isScrolled ? 'text-foreground-700 hover:text-primary-600' : 'text-background-50/90 hover:text-background-50'}`}>
            Documents
          </a>

          <a href="https://helpdesk.techadvancement.com/helpdesk" target="_blank" rel="noopener noreferrer" className={`px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 hover:bg-white/10 ${isScrolled ? 'text-foreground-700 hover:text-primary-600' : 'text-background-50/90 hover:text-background-50'}`}>
            Helpdesk
          </a>

          <div className="relative ml-1">
            <button
              type="button"
              className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all duration-300 hover:bg-white/10 ${isScrolled ? 'text-foreground-700 hover:text-primary-600' : 'text-background-50/90 hover:text-background-50'}`}
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <i className="ri-search-line text-base" />
            </button>
            <div className={`${searchOpen ? 'block' : 'hidden'} absolute right-0 top-full mt-3 bg-background-50 rounded-xl border border-background-200/50 p-3 z-50 w-72 shadow-lg shadow-foreground-900/5 transition-all duration-300`}>
              <form action="https://techadvancement.com/" method="get" className="flex items-center gap-2">
                <input
                  type="text"
                  name="s"
                  placeholder="Search here..."
                  className="w-full text-sm px-3 py-2 rounded-lg border border-background-200/70 bg-background-50 text-foreground-700 focus:outline-none focus:ring-2 focus:ring-primary-400/50"
                />
                <button type="submit" className="px-3 py-2 bg-primary-600 text-background-50 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors whitespace-nowrap">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}