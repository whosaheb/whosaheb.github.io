import React, { useState } from 'react';
import {
  FolderGit2,
  Building,
  CheckCircle2,
  X,
  ArrowRight,
  Search,
  ExternalLink,
  Tag
} from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

export const Projects: React.FC = () => {
  const { data } = usePortfolioData();
  const { projects } = data;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: `All Projects (${projects.length})` },
    {
      id: 'enterprise',
      label: `Enterprise & Microservices (${projects.filter((p) => p.category === 'enterprise').length})`,
    },
    {
      id: 'fullstack',
      label: `Full-Stack & E-Commerce (${projects.filter((p) => p.category === 'fullstack').length})`,
    },
    {
      id: 'qa',
      label: `QA & Reliability (${projects.filter((p) => p.category === 'qa').length})`,
    },
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 bg-slate-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>Featured Systems & Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Engineering Projects ({projects.length})
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
            Selected distributed architectures, real-time trading engines, financial modernization backends, and QA systems engineered over 8+ years of production experience.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-cyan-600 dark:bg-cyan-500 text-white dark:text-slate-950 font-bold shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects or tech..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-cyan-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

        </div>

        {/* No Results Fallback */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No projects matching “{searchQuery}”.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group rounded-2xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 p-6 flex flex-col justify-between hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:shadow-md dark:hover:bg-slate-900/90 transition-all cursor-pointer shadow-xs"
            >
              <div>
                {/* Card Header with Logo and Company */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-slate-100 dark:bg-slate-950 p-2 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <img
                      src={project.logo}
                      alt={project.title}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-500/30 px-2 py-0.5 rounded uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-1">
                  {project.title}
                </h3>

                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-3">
                  <Building className="h-3 w-3 text-slate-400 dark:text-slate-500" />
                  <span>{project.company}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80 mb-3">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Details Button */}
                <div className="flex items-center justify-between pt-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  <span>View Project Details</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white dark:bg-[#0c101a] border border-slate-200 dark:border-slate-700/80 p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-left">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-start gap-4 mb-6 pr-8">
              <div className="h-14 w-14 rounded-xl bg-slate-100 dark:bg-slate-900 p-2.5 border border-slate-200 dark:border-slate-800 flex items-center justify-center shrink-0">
                <img
                  src={activeModalProject.logo}
                  alt={activeModalProject.title}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <span className="text-xs font-mono font-semibold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {activeModalProject.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <Building className="h-3.5 w-3.5" />
                  <span>{activeModalProject.company}</span>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  System Architecture & Overview
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                  Technical Accomplishments & Key Features
                </h4>
                <div className="space-y-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
