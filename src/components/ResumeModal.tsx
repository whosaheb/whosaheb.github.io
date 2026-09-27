import React, { useState } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Mail,
  Phone,
} from 'lucide-react';
import { usePortfolioData } from '../context/PortfolioDataContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { data } = usePortfolioData();
  const { personal, workExperience, education, technicalExpertise, achievements } = data;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-[#0c101a] border border-slate-200 dark:border-slate-700/80 shadow-2xl my-8 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0e1424] shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">Saheb_Das_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer shadow-xs"
              title="Print or Save as PDF"
            >
              <Printer className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors border border-slate-200 dark:border-slate-700 cursor-pointer shadow-xs"
              title="Copy portfolio link"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>Share</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close resume view"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white dark:bg-[#0a0d14] text-slate-800 dark:text-slate-200 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-200 dark:border-slate-800 print:border-slate-300">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white tracking-tight mb-2 print:text-black">
              {personal.name}
            </h1>
            <div className="text-sm font-semibold text-cyan-700 dark:text-cyan-400 mb-3 print:text-slate-800">
              {personal.location} | {personal.title}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-y-1 gap-x-4 text-xs text-slate-600 dark:text-slate-400 print:text-slate-700 font-mono">
              <a href={`mailto:${personal.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{personal.email}</span>
              </a>
              <span>|</span>
              <a href={`tel:${personal.phone}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{personal.phone}</span>
              </a>
              <span>|</span>
              <a href={personal.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                linkedin.com/in/whosaheb
              </a>
              <span>|</span>
              <a href={personal.socials.portfolio} target="_blank" rel="noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400">
                whosaheb.github.io
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 text-left">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-2 print:text-slate-900">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed print:text-slate-800">
              {personal.summary}
            </p>
          </div>

          {/* Technical Expertise */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 text-left">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3 print:text-slate-900">
              Technical Expertise
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Architecture & Leadership: </strong>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">
                  {technicalExpertise.architecture.join(', ')}.
                </span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Backend: </strong>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">
                  {technicalExpertise.backend.join(', ')}.
                </span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Cloud & DevOps: </strong>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">
                  {technicalExpertise.cloudDevOps.join(', ')}.
                </span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Databases: </strong>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">
                  {technicalExpertise.databases.join(', ')}.
                </span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Frontend & Security: </strong>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">
                  {technicalExpertise.securityFrontend.join(', ')}.
                </span>
              </div>
              <div>
                <strong className="text-slate-900 dark:text-white print:text-black">Tools & Testing: </strong>
                <span className="text-slate-700 dark:text-slate-300 print:text-slate-700">
                  {technicalExpertise.testingTelemetry.join(', ')}.
                </span>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="py-6 border-b border-slate-200 dark:border-slate-800 print:border-slate-300 text-left">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-3 print:text-slate-900">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">{edu.degree}</span>
                    <span className="text-slate-600 dark:text-slate-400 print:text-slate-700"> — {edu.institution}</span>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 print:text-slate-600 font-mono text-xs">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div className="py-6 text-left">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 mb-4 print:text-slate-900">
              Professional Experience
            </h2>
            
            <div className="space-y-6">
              {workExperience.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-bold text-sm sm:text-base text-slate-900 dark:text-white print:text-black">{exp.role}</span>
                      <span className="text-cyan-700 dark:text-cyan-400 print:text-slate-900"> | {exp.company}</span>
                    </div>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">{exp.period}</span>
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                    {exp.location} {exp.client && `· Client: ${exp.client}`}
                  </div>

                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
