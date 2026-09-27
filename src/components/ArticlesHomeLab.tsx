import React, { useState } from 'react';
import {
  BookOpen,
  Server,
  HardDrive,
  Cpu,
  Terminal,
  ExternalLink,
  ChevronRight,
  X,
  Code2,
  CheckCircle,
  Network
} from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export const ArticlesHomeLab: React.FC = () => {
  const { data } = usePortfolioData();
  const { articles, homeLab } = data;
  const [activeArticleModal, setActiveArticleModal] = useState<boolean>(false);
  const article = articles[0];

  return (
    <section id="articles" className="py-14 sm:py-20 bg-white dark:bg-[#0c101a] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Engineering Insights & Home Lab</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Published Articles & Infrastructure Sandbox
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
            Practical writings on distributed system trade-offs and my personal TrueNAS home laboratory where architectures are tested before cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Featured Article Card */}
          <div className="lg:col-span-7 text-left">
            {article && (
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all shadow-xs">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-500/30">
                      Technical Deep Dive
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                      {article.date} · {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {article.summary}
                  </p>

                  {/* Architecture Quote */}
                  <div className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border-l-4 border-cyan-500 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm italic text-slate-700 dark:text-slate-200 font-mono mb-5 shadow-xs">
                    {article.quote}
                  </div>

                  {/* Key architectural highlights */}
                  <div className="space-y-2 mb-6">
                    {article.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <CheckCircle className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveArticleModal(true)}
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-cyan-600 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    <span>Read Full Architecture Article</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  {article.link && (
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    >
                      <span>chat.whosaheb.in</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Home Server Lab Details */}
          <div className="lg:col-span-5 text-left">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400 mb-3">
                <Server className="h-5 w-5" />
                <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                  Hardware & Lab
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                {homeLab.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {homeLab.description}
              </p>

              {/* Lab features */}
              <div className="space-y-3.5">
                {homeLab.features.map((feature, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 shadow-xs">
                    <div className="flex items-center gap-2 mb-1">
                      {idx === 0 && <Cpu className="h-4 w-4 text-cyan-600 dark:text-cyan-400" />}
                      {idx === 1 && <Terminal className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />}
                      {idx === 2 && <HardDrive className="h-4 w-4 text-sky-600 dark:text-sky-400" />}
                      {idx === 3 && <Network className="h-4 w-4 text-purple-600 dark:text-purple-400" />}
                      <span className="text-xs font-bold text-slate-900 dark:text-white">{feature.title}</span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed pl-6">
                      {feature.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Full Article Reader Modal */}
      {activeArticleModal && article && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-[#0c101a] border border-slate-200 dark:border-slate-700/80 p-6 sm:p-10 shadow-2xl overflow-y-auto max-h-[90vh] text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveArticleModal(false)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                Article & Engineering Case Study · {article.date}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1 mb-2">
                {article.title}
              </h2>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 italic">
                By Saheb Das · 7 min read · Architecture & Real-Time WebSockets
              </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
              <p>
                When building <strong>Barta</strong>, my goal was ambitious: create an enterprise-level, real-time chat platform inspired by modern messaging architectures, governed by one fundamental engineering constraint:
              </p>

              <blockquote className="p-4 rounded-xl bg-slate-100 dark:bg-slate-900 border-l-4 border-cyan-500 font-mono text-slate-800 dark:text-slate-200 not-italic">
                “No Redis, no Docker, no AWS S3 — just clean modular architecture, WebSockets, and core Node.js engineering.”
              </blockquote>

              <p>
                This constraint forced me to focus deeply on foundational engineering — achieving scalability through code structure, separation of concerns, and defensive data access, rather than simply adding third-party infrastructure components.
              </p>

              <h4 className="text-base font-bold text-slate-900 dark:text-white pt-2">
                1. Modular NestJS Architecture with WebSockets
              </h4>
              <p>
                The backend is built using <strong>NestJS</strong>, providing strict module boundaries (Auth, Chat, Users, Media). Real-time communication utilizes Socket.IO with a custom <code>@WebSocketGateway</code> managing presence, typing telemetry, and WebRTC signaling for voice and video streams.
              </p>

              <h4 className="text-base font-bold text-slate-900 dark:text-white pt-2">
                2. Decoupled Storage via TrueNAS Nextcloud WebDAV
              </h4>
              <p>
                Rather than storing file payloads locally or relying on commercial AWS S3 buckets, Barta integrates with <strong>Nextcloud</strong> hosted on my physical <strong>TrueNAS home server</strong> via its WebDAV API. Incoming uploads pass through a secure backend proxy, which pushes the binary stream directly to Nextcloud and stores only the authenticated share URL in MongoDB.
              </p>

              <h4 className="text-base font-bold text-slate-900 dark:text-white pt-2">
                3. Stateless Token Authentication without Redis
              </h4>
              <p>
                Session invalidation is achieved without an in-memory Redis cluster by combining short-lived JWT access tokens (15 minutes) with MongoDB-persisted refresh token rotation. Every protected endpoint runs through a lightweight <code>JwtAuthGuard</code>.
              </p>

              <h4 className="text-base font-bold text-slate-900 dark:text-white pt-2">
                4. Automated Testing & Verification
              </h4>
              <p>
                Both layers maintain comprehensive automated test suites — <strong>Vitest</strong> verifying React frontend state machines and <strong>Jest</strong> covering NestJS service contracts, guard policies, and gateway broadcasts.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Author: Saheb Das (whosaheb)
              </span>
              <button
                onClick={() => setActiveArticleModal(false)}
                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
