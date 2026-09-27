import React from 'react';
import {
  User,
  GraduationCap,
  Compass,
  Bike,
  Server,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  FileText,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';
import { Achievements } from './Achievements';

interface AboutPageProps {
  onOpenResume: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenResume }) => {
  const { data, setActivePage } = usePortfolioData();
  const { personal, about, education, metrics, homeLab } = data;

  return (
    <div className="py-10 sm:py-16 bg-slate-50 dark:bg-[#0a0d14] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <User className="h-3.5 w-3.5" />
            <span>Personal Profile & Journey</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white tracking-tight">
            About Saheb Das
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
            {about.title}
          </p>
        </div>

        {/* Top Split Section: Portrait & Executive Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          
          {/* Left: About Photo & Quick Stats */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-6">
            <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 p-3 sm:p-4 border border-slate-200 dark:border-slate-800 shadow-xl">
              <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <img
                  src={personal.aboutImage}
                  alt={personal.name}
                  className="h-full w-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = personal.heroImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <div className="text-xs font-mono font-bold text-cyan-300">
                    {personal.title}
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {personal.status}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              {/* Developer Avatar Badge */}
              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-2">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-950 p-0.5 border border-slate-200 dark:border-slate-700">
                    <img
                      src={personal.avatar}
                      alt="Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-mono text-slate-600 dark:text-slate-300">
                    whosaheb@gmail.com
                  </span>
                </div>
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume CV</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md">
              {metrics.slice(0, 4).map((m, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left shadow-xs">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-slate-950 dark:text-white">{m.value}</div>
                  <div className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">{m.label}</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{m.sublabel}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detailed Biography & Journey Story */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Biography */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white mb-3 flex items-center gap-2">
                <Compass className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                <span>Biography</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {about.biography}
              </p>
            </div>

            {/* Career Journey */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white mb-3 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <span>Career Journey & Transition</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {about.careerJourney}
              </p>
            </div>

            {/* Core Philosophy */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white mb-3 flex items-center gap-2">
                <Server className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                <span>Engineering Philosophy & Standards</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {about.philosophy}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {about.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Dynamic Achievements Section */}
        <div className="mb-16">
          <Achievements showTitle={true} />
        </div>

        {/* Academic Education Section */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white mb-6">
            Education & Background
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-lg font-bold text-slate-950 dark:text-white">{edu.degree}</span>
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-500/20">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    {edu.institution}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    <strong className="text-slate-700 dark:text-slate-300">Focus Areas:</strong> {edu.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests & Who I Am Today */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 text-left">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                <Bike className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Outside of Work & Weekend Rides</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.personalInterests}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <User className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white">Who I Am Today</h3>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.whoIAmToday}
            </p>
          </div>

        </div>

        {/* TrueNAS Home Lab Section Preview */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left mb-16 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2.5">
              <Server className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-950 dark:text-white">{homeLab.title}</h3>
            </div>
            <button
              onClick={() => setActivePage('articles')}
              className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>Explore Architecture & Barta Chat</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {homeLab.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {homeLab.features.map((feat, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">{feat.title}</h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{feat.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Connect & Hire Me Strip Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-100 via-white to-cyan-50/50 dark:from-slate-900 dark:via-slate-900/90 dark:to-[#0e1424] border border-cyan-200 dark:border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left shadow-md">
          <div>
            <h3 className="text-xl font-bold text-slate-950 dark:text-white">
              Interested in collaborating or discussing distributed backend architecture?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Saheb is open to senior backend engineering roles, cloud solution architecture consulting, and open-source contributions.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setActivePage('contact')}
              className="px-5 py-2.5 rounded-lg bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold text-xs sm:text-sm hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all cursor-pointer shadow-md shadow-cyan-600/20"
            >
              Get in Touch
            </button>
            <button
              onClick={onOpenResume}
              className="px-5 py-2.5 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-medium text-xs sm:text-sm hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer border border-slate-200 dark:border-slate-700"
            >
              View Full CV (PDF)
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
