import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { usePortfolioData } from '../context/PortfolioDataContext';

export const Footer: React.FC = () => {
  const { data, setActivePage } = usePortfolioData();
  const { personal } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-[#07090e] py-12 text-slate-500 dark:text-slate-400 text-xs transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 dark:text-white text-sm">{personal.name}</span>
              <span className="text-slate-400 dark:text-slate-600">·</span>
              <span className="text-slate-600 dark:text-slate-400">{personal.title.split('&')[0].trim()}</span>
            </div>
            <p className="text-slate-500 text-[11px]">
              © {new Date().getFullYear()} {personal.name} · Published to GitHub Pages (whosaheb.github.io)
            </p>
          </div>

          {/* Center: Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-5 font-medium">
            <button
              onClick={() => setActivePage('home')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => setActivePage('about')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              About Me
            </button>
            <button
              onClick={() => setActivePage('experience')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => setActivePage('architecture')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Architecture
            </button>
            <button
              onClick={() => setActivePage('projects')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => setActivePage('articles')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Articles & Lab
            </button>
            <button
              onClick={() => setActivePage('contact')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right: Social icons & Back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors"
                title="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                title="Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
              <a
                href={personal.socials.email}
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                title="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer border border-slate-200 dark:border-slate-700/80"
              title="Back to Top"
            >
              <ArrowUp className="h-3.5 w-3.5" />
              <span className="text-[11px] font-mono">Top</span>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
