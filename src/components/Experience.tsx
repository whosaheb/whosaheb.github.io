import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Building } from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export const Experience: React.FC = () => {
  const { data } = usePortfolioData();
  const { workExperience, personal } = data;
  const [expandedId, setExpandedId] = useState<string | null>(workExperience[0]?.id || null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-14 sm:py-20 bg-white dark:bg-[#0c101a] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <Briefcase className="h-3.5 w-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience & Track Record
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
            {personal.experienceYears} years leading backend initiatives, architecting enterprise microservices, and hardening production systems for global financial, SaaS, and e-commerce platforms.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-slate-200 dark:border-slate-800 ml-3 sm:ml-6 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {workExperience.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div key={exp.id} className="relative group">
                
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border transition-all ${
                    exp.isCurrent
                      ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 ring-4 ring-cyan-500/20'
                      : 'border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 group-hover:border-slate-400'
                  }`}
                >
                  <Briefcase className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </div>

                {/* Card Container */}
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    exp.isCurrent
                      ? 'border-cyan-300 dark:border-cyan-500/40 bg-white dark:bg-slate-900/90 shadow-md dark:shadow-cyan-950/30'
                      : 'border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-700/80 hover:bg-white dark:hover:bg-slate-900/70 shadow-xs'
                  }`}
                >
                  {/* Card Header (clickable) */}
                  <div
                    onClick={() => toggleExpand(exp.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </span>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-cyan-100 dark:bg-cyan-500/20 text-cyan-800 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        <span className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-slate-200">
                          <Building className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
                          {exp.company}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                          {exp.location}
                        </span>
                        {exp.client && (
                          <>
                            <span>·</span>
                            <span className="text-cyan-700 dark:text-cyan-300 font-mono text-xs">
                              Client: {exp.client}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-200 dark:border-slate-800">
                      <span className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/80 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700/60">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                      <div className="p-1 rounded-md text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
                        {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200 dark:border-slate-800/80 text-left bg-white/50 dark:bg-slate-950/30">
                      {exp.summary && (
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed italic">
                          {exp.summary}
                        </p>
                      )}

                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                        Key Accomplishments & Responsibilities
                      </h4>

                      <ul className="space-y-2.5 mb-6">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack tags */}
                      <div>
                        <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block mb-2">Technologies Used:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
