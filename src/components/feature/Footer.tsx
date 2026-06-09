import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold text-white mb-4 block cursor-pointer">TechAdvance</Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Distributed technology to empower Bible translation. Free, open-source tools and resources for language communities worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://t.me/joinchat/Gkxa1q-oHBEYEjPQ" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer border border-slate-700 hover:border-transparent">
                <i className="ri-telegram-line text-lg"></i>
              </a>
              <a href="https://discord.com/invite/WscT5aC" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer border border-slate-700 hover:border-transparent">
                <i className="ri-discord-line text-lg"></i>
              </a>
              <a href="mailto:helpdesk@techadvancement.com" className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-800 text-gray-400 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 hover:text-white transition-all cursor-pointer border border-slate-700 hover:border-transparent">
                <i className="ri-mail-line text-lg"></i>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <ul className="space-y-3">
              <li><Link to="/categories" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Translation Tools</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Translation Kits</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Training Materials</Link></li>
              <li><Link to="/articles" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Documents & Guides</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">POD Reference</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">About</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">About TechAdvance</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Our Mission</Link></li>
              <li><a href="https://helpdesk.techadvancement.com/helpdesk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Helpdesk</a></li>
              <li><a href="mailto:helpdesk@techadvancement.com" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Contact</a></li>
              <li><a href="https://bibletranslationtools.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Bible Translation Tools</a></li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">External Links</h3>
            <ul className="space-y-3">
              <li><a href="https://bibletranslationtools.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">BibleTranslationTools.org</a></li>
              <li><a href="https://bibletechs.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Bible Techs</a></li>
              <li><a href="https://helpdesk.techadvancement.com/helpdesk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">TechAdvance Helpdesk</a></li>
              <li><a href="https://techadvancement.com/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Privacy Policy</a></li>
              <li><a href="https://techadvancement.com/newsletter/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm">Newsletter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            Copyright ©2026 | All Rights Reserved
          </p>
          <p className="text-gray-400 text-sm">
            This work is licensed under a <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
          </p>
        </div>
      </div>
    </footer>
  );
}