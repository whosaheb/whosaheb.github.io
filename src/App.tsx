import React, { useState } from 'react';
import { PortfolioProvider, usePortfolioData } from './context/PortfolioDataContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTeaser } from './components/AboutTeaser';
import { AboutPage } from './components/AboutPage';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { ArchitectureSkills } from './components/ArchitectureSkills';
import { Projects } from './components/Projects';
import { ArticlesHomeLab } from './components/ArticlesHomeLab';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

const PortfolioContent: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { activePage } = usePortfolioData();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0d14] text-slate-900 dark:text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 transition-colors duration-200">
      {/* Top Bar Contract Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main View Router */}
      <main className="flex-1">
        {activePage === 'about' ? (
          <AboutPage onOpenResume={() => setIsResumeOpen(true)} />
        ) : activePage === 'projects' ? (
          <>
            <Projects />
            <Contact />
          </>
        ) : activePage === 'experience' ? (
          <>
            <Experience />
            <Contact />
          </>
        ) : activePage === 'architecture' ? (
          <>
            <ArchitectureSkills />
            <Contact />
          </>
        ) : activePage === 'articles' ? (
          <>
            <ArticlesHomeLab />
            <Contact />
          </>
        ) : activePage === 'contact' ? (
          <Contact />
        ) : (
          /* Default: Complete Full Portfolio Experience */
          <>
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <AboutTeaser onOpenResume={() => setIsResumeOpen(true)} />
            <Achievements showTitle={true} />
            <Experience />
            <ArchitectureSkills />
            <Projects />
            <ArticlesHomeLab />
            <Contact />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Full Resume / Printable CV Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <PortfolioContent />
      </PortfolioProvider>
    </ThemeProvider>
  );
};

export default App;
