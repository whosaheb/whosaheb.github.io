import React from 'react';
import {
  Award,
  ShieldCheck,
  Zap,
  Users,
  Activity,
  Layers,
  CheckCircle2,
  Sparkles,
  Server
} from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

interface AchievementsProps {
  showTitle?: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ showTitle = true }) => {
  const { data } = usePortfolioData();
  const achievements = data.achievements || [];

  const getAchievementIcon = (id: string, category: string) => {
    if (id.includes('lts') || category.includes('Reliability')) {
      return <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />;
    }
    if (id.includes('saas') || category.includes('Scaling')) {
      return <Zap className="h-5 w-5 text-amber-500 dark:text-amber-400" />;
    }
    if (id.includes('team') || category.includes('Leadership')) {
      return <Users className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />;
    }
    if (id.includes('realtime') || category.includes('Real-Time')) {
      return <Activity className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />;
    }
    if (id.includes('barta') || category.includes('Architecture')) {
      return <Layers className="h-5 w-5 text-sky-600 dark:text-sky-400" />;
    }
    if (id.includes('qa') || category.includes('Quality')) {
      return <CheckCircle2 className="h-5 w-5 text-teal-600 dark:text-teal-400" />;
    }
    return <Award className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />;
  };

  return (
    <section id="achievements" className="py-12 sm:py-16 transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {showTitle && (
          <div className="text-left mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Key Career Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Major Achievements & Production Milestones
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-3xl">
              Proven outcomes delivering high-concurrency systems, zero-downtime upgrades, and architectural leadership across enterprise clients.
            </p>
          </div>
        )}

        {/* Dynamic Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-white dark:bg-slate-900/60 p-6 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getAchievementIcon(item.id, item.category)}
                  </div>
                  
                  {item.badge && (
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/70 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-500/30">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{item.period}</span>
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {item.organization}
                </span>
                
                {item.metric && (
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                    {item.metric}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
