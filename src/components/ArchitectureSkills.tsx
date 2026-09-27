import React, { useState } from 'react';
import {
  Layers,
  Cpu,
  Cloud,
  Database,
  Shield,
  Activity,
  Workflow,
  CheckCircle
} from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export const ArchitectureSkills: React.FC = () => {
  const { data } = usePortfolioData();
  const { technicalExpertise, techBadges } = data;
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines', icon: Workflow },
    { id: 'architecture', label: 'Architecture & Leadership', icon: Layers },
    { id: 'backend', label: 'Backend & APIs', icon: Cpu },
    { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'databases', label: 'Databases & Caching', icon: Database },
    { id: 'security', label: 'Frontend & Security', icon: Shield },
    { id: 'testing', label: 'Testing & Telemetry', icon: Activity },
  ];

  return (
    <section id="architecture" className="py-14 sm:py-20 bg-slate-50 dark:bg-[#0a0d14] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <Layers className="h-3.5 w-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Architecture, Technologies & Tooling
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
            Core mastery spanning distributed system patterns, high-concurrency microservices, cloud infrastructure, and enterprise data storage.
          </p>
        </div>

        {/* Core Tech Stack Logo Showcase */}
        <div className="mb-12 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Production Languages & Frameworks</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Primary ecosystems utilized across daily production engineering</p>
            </div>
            <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-500/20 px-3 py-1 rounded-full w-fit">
              8+ Years Continuous Production Delivery
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {techBadges.map((badge) => (
              <div
                key={badge.name}
                className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 hover:bg-white dark:hover:bg-slate-900 transition-all group"
              >
                <div className="h-10 w-10 mb-2 flex items-center justify-center p-1">
                  <img
                    src={badge.icon}
                    alt={badge.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <span className="text-xs font-bold text-slate-900 dark:text-white">{badge.name}</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5 font-mono">{badge.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          
          {/* 1. Architecture & Leadership */}
          {(activeCategory === 'all' || activeCategory === 'architecture') && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2.5 text-cyan-600 dark:text-cyan-400 mb-3">
                  <Layers className="h-5 w-5" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Architecture & System Design</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Designing decoupled, maintainable software architectures built to withstand high concurrency and scale.
                </p>
                <ul className="space-y-2">
                  {technicalExpertise.architecture.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 2. Backend & APIs */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2.5 text-sky-600 dark:text-sky-400 mb-3">
                  <Cpu className="h-5 w-5" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Backend Engineering & APIs</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  High-throughput REST and GraphQL runtime engineering with deep Node.js and NestJS expertise.
                </p>
                <ul className="space-y-2">
                  {technicalExpertise.backend.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 3. Cloud & DevOps */}
          {(activeCategory === 'all' || activeCategory === 'cloud') && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2.5 text-indigo-600 dark:text-indigo-400 mb-3">
                  <Cloud className="h-5 w-5" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Cloud Infrastructure & DevOps</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Container operations, Kubernetes pod management, and automated continuous delivery pipelines.
                </p>
                <ul className="space-y-2">
                  {technicalExpertise.cloudDevOps.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 4. Databases & Caching */}
          {(activeCategory === 'all' || activeCategory === 'databases') && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2.5 text-emerald-600 dark:text-emerald-400 mb-3">
                  <Database className="h-5 w-5" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Databases & Data Modeling</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Multi-engine data persistence across SQL, MongoDB aggregations, and high-concurrency Redis caching.
                </p>
                <ul className="space-y-2">
                  {technicalExpertise.databases.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 5. Frontend & Security */}
          {(activeCategory === 'all' || activeCategory === 'security') && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2.5 text-purple-600 dark:text-purple-400 mb-3">
                  <Shield className="h-5 w-5" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Security & Frontend Architecture</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Vulnerability mitigation, token-based authentication (JWT/OAuth), and type-safe React/TypeScript integration.
                </p>
                <ul className="space-y-2">
                  {technicalExpertise.securityFrontend.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* 6. Testing & Telemetry */}
          {(activeCategory === 'all' || activeCategory === 'testing') && (
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div>
                <div className="flex items-center gap-2.5 text-teal-600 dark:text-teal-400 mb-3">
                  <Activity className="h-5 w-5" />
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">Testing, Quality & Telemetry</h3>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mb-4">
                  Defensive programming, automated testing suites, regression verification, and distributed application monitoring.
                </p>
                <ul className="space-y-2">
                  {technicalExpertise.testingTelemetry.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-3.5 w-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
