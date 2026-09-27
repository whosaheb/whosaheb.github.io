import React, { useState } from 'react';
import { Menu, X, FileText, Send, Sun, Moon } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data, activePage, setActivePage } = usePortfolioData();
  const { theme, toggleTheme } = useTheme();
  const { personal } = data;

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'projects', label: 'Projects' },
    { id: 'articles', label: 'Articles & Lab' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800/80 bg-white/90 dark:bg-[#0a0d14]/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        
        {/* Zone 1: Brand single element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="h-9 w-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center p-1 overflow-hidden transition-transform group-hover:scale-105">
            <img
              src={personal.logo}
              alt="Logo"
              className="h-full w-full object-contain"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
              {personal.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono hidden sm:inline-block">
              {personal.title.split('&')[0].trim()}
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-xs sm:text-sm font-medium transition-colors py-1 cursor-pointer ${
                  isActive
                    ? 'text-cyan-600 dark:text-cyan-400 font-bold border-b-2 border-cyan-600 dark:border-cyan-400'
                    : 'text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions + Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer border border-slate-200 dark:border-slate-700/60"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400 hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700 hover:-rotate-12 transition-transform" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 hover:bg-cyan-100 dark:hover:bg-cyan-500/20 transition-all cursor-pointer whitespace-nowrap"
            title="Open printable & full formatted CV"
          >
            <FileText className="h-4 w-4" />
            <span className="hidden sm:inline">View</span> Resume
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 px-3.5 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all whitespace-nowrap border border-slate-200 dark:border-slate-700 cursor-pointer"
          >
            <Send className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>Contact</span>
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c101a] px-4 py-5 shadow-2xl transition-all">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left rounded-md px-3 py-2 text-base font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-cyan-50 dark:bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-cyan-600 dark:hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            
            <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2 mt-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex items-center justify-center gap-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/15 py-2.5 text-sm font-semibold text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30 cursor-pointer"
              >
                <FileText className="h-4 w-4" />
                <span>View Full Resume (PDF view)</span>
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-800 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 cursor-pointer border border-slate-200 dark:border-slate-700"
              >
                <Send className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Contact Saheb Directly</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
