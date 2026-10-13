import React, { useEffect } from 'react';
import type { ProjectItem } from '../content/data';
import { X, ExternalLink, FileText, CheckCircle2, Layers, Cpu, Calendar, Shield } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-navy-950/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-navy-700 shadow-2xl p-6 sm:p-8 text-left glass-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-slate-100 dark:bg-navy-800 border border-slate-200 dark:border-navy-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-500"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20">
            {project.category}
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {project.period}
          </span>
        </div>

        {/* Title */}
        <h3
          id="modal-project-title"
          className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 dark:text-slate-100 mb-1"
        >
          {project.title}
        </h3>
        <p className="text-sm font-medium text-gold-600 dark:text-gold-400 mb-4">
          {project.subtitle}
        </p>

        {/* Full Description */}
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights & Features */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-500" />
            Core Architecture & Capabilities:
          </h4>
          <div className="space-y-2">
            {project.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Analytical Methodology */}
        {project.methodology && project.methodology.length > 0 && (
          <div className="mb-6 space-y-2 p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200 dark:border-navy-800">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-gold-600 dark:text-gold-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              Financial Analytical Methodology:
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
              {project.methodology.map((m, mIdx) => (
                <li key={mIdx} className="flex items-start space-x-2">
                  <span className="text-gold-500 font-bold">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tools & Frameworks */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
            <Layers className="w-4 h-4 text-gold-500" />
            Technologies & Frameworks:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, tIdx) => (
              <span
                key={tIdx}
                className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-navy-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 dark:border-navy-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-navy-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-500 shadow-md shadow-gold-500/20 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-navy-800 border border-slate-300 dark:border-navy-700 hover:text-gold-500 hover:border-gold-500 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-gold-500" />
                <span>View Research Report</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            type="button"
            className="px-4 py-2 text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
