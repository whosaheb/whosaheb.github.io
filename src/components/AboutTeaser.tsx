import React from 'react';
import {
  User,
  Compass,
  ArrowRight,
  ShieldCheck,
  Server,
  MapPin,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

interface AboutTeaserProps {
  onOpenResume: () => void;
}

export const AboutTeaser: React.FC<AboutTeaserProps> = ({ onOpenResume }) => {
  const { data, setActivePage } = usePortfolioData();
  const { personal, about } = data;

  return (
    <section className="py-14 sm:py-18 bg-white dark:bg-[#0c101a] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: About Photo card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-sm rounded-2xl bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-md">
              <div className="relative h-72 sm:h-84 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <img
                  src={personal.aboutImage}
                  alt={personal.name}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = personal.heroImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-3 left-4 right-4 text-left">
                  <div className="text-xs font-mono font-bold text-cyan-300">
                    {personal.title}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {personal.status}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-300 mt-0.5">
                    <MapPin className="h-3 w-3 text-cyan-400" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between px-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  whosaheb@gmail.com
                </span>
                <button
                  onClick={onOpenResume}
                  className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>CV Document</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Story Summary & Link to Full About Page */}
          <div className="lg:col-span-7 text-left space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
              <User className="h-3.5 w-3.5" />
              <span>About Me & Background</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Curious Problem Solver, Dedicated Backend Specialist
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.biography}
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.careerJourney}
            </p>

            {/* Quick value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {about.highlights.slice(0, 4).map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* CTA to Full About Page */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setActivePage('about')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 text-xs sm:text-sm font-bold hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all shadow-md shadow-cyan-600/20 dark:shadow-cyan-500/20 cursor-pointer"
              >
                <span>Read Full About Me Page</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setActivePage('projects')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 cursor-pointer"
              >
                <span>View All Projects</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
