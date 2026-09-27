import React from 'react';
import {
  FileText,
  Mail,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Server,
  Layers,
  Zap,
  User
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { usePortfolioData } from '../context/PortfolioDataContext';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { data, setActivePage } = usePortfolioData();
  const { personal, metrics, techBadges } = data;

  return (
    <section id="overview" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-blue-600/10 dark:bg-blue-600/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status / Location Banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="font-medium text-slate-800 dark:text-slate-200">{personal.status}</span>
              <span className="text-slate-400 dark:text-slate-500">·</span>
              <span className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                <MapPin className="h-3 w-3 text-cyan-600 dark:text-cyan-400" />
                {personal.location}
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-tight mb-4">
              Building Resilient <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-sky-600 to-indigo-600 dark:from-cyan-400 dark:via-sky-300 dark:to-indigo-400">
                Distributed Systems
              </span>{' '}
              & Cloud Backends
            </h1>

            {/* Sub-headline & Bio from data.json */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl">
              {personal.title} with <strong className="text-slate-900 dark:text-white font-semibold">{personal.experienceYears} of production experience</strong>.
              Specialized in high-concurrency Node.js & NestJS microservices, Hexagonal Architecture,
              Kubernetes orchestration, and enterprise database systems.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-xl text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <Server className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>Microservices & Event-Driven gRPC</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <Layers className="h-4 w-4 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Hexagonal & Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Enterprise Security & Vulnerability Auditing</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                <Zap className="h-4 w-4 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>Node.js LTS Upgrades & Zero-Downtime CI/CD</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
              <button
                onClick={() => setActivePage('about')}
                className="flex items-center gap-2 rounded-lg bg-cyan-600 dark:bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-950 hover:bg-cyan-700 dark:hover:bg-cyan-400 transition-all shadow-md shadow-cyan-600/20 dark:shadow-cyan-500/20 cursor-pointer"
              >
                <User className="h-4 w-4" />
                <span>About Saheb</span>
                <ChevronRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => setActivePage('experience')}
                className="flex items-center gap-2 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-300 dark:border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-xs"
              >
                <span>Experience Timeline</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 text-sm font-medium text-cyan-700 dark:text-cyan-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all cursor-pointer"
              >
                <FileText className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Social Channels Strip */}
            <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-xs">
              <span className="font-mono">Connect:</span>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                title="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">/</span>
              <a
                href={personal.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1.5"
                title="X / Twitter"
              >
                <TwitterIcon className="h-4 w-4" />
                <span>whosaheb</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Portrait & Developer Badge */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer card */}
              <div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-800/80 dark:to-slate-900/90 p-3 sm:p-4 border border-slate-200 dark:border-slate-700/60 shadow-xl dark:shadow-2xl">
                
                {/* Developer Avatar Badge */}
                <div className="absolute -top-6 -left-4 z-20 flex items-center gap-2.5 bg-white dark:bg-[#0e1424] border border-cyan-300 dark:border-cyan-500/40 rounded-xl px-3 py-2 shadow-lg">
                  <div className="h-9 w-9 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-800 p-0.5 border border-slate-200 dark:border-slate-700">
                    <img
                      src={personal.avatar}
                      alt="Programmer Avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">{personal.name}</span>
                    <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-mono">Backend Lead</span>
                  </div>
                </div>

                {/* Primary Hero Portrait */}
                <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 group">
                  <img
                    src={personal.heroImage}
                    alt={personal.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = personal.aboutImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Overlay text at bottom of portrait */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300 font-mono">
                      {personal.experienceYears} Production Engineering
                    </span>
                    <p className="text-sm font-medium text-white mt-0.5">
                      Designing cloud-native backends with Node.js, NestJS & Kubernetes.
                    </p>
                  </div>
                </div>

                {/* Tech logo badge carousel strip */}
                <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between px-2">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">Core Stack:</span>
                  <div className="flex items-center gap-3">
                    {techBadges.slice(0, 5).map((badge) => (
                      <div
                        key={badge.name}
                        className="h-6 w-6 rounded bg-slate-50 dark:bg-slate-900/80 p-0.5 border border-slate-200 dark:border-slate-800 flex items-center justify-center hover:scale-110 transition-transform"
                        title={badge.name}
                      >
                        <img
                          src={badge.icon}
                          alt={badge.name}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Proof & Scale Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 text-left shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
