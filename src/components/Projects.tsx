import React, { useState } from 'react';
import { PROJECTS_DATA } from '../content/data';
import type { ProjectItem } from '../content/data';
import { ProjectModal } from './ProjectModal';
import { FolderGit2, ArrowUpRight, ExternalLink, FileText, Calendar, Sparkles } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 relative overflow-hidden"
      aria-label="Finance Projects and Live Systems"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Financial Initiatives</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Featured Projects & Research
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
            Simulation applications, financial market intelligence platforms, and empirical research reports covering equity dynamics.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 p-6 shadow-md hover:shadow-2xl hover:border-gold-500/50 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Card Top: Category and Date */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-navy-800/80">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.period}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-serif text-xl font-bold text-navy-950 dark:text-slate-100 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-gold-400/90 mb-3">
                  {project.subtitle}
                </p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4 mb-5">
                  {project.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tools.slice(0, 4).map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-400">
                      +{project.tools.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div
                className="pt-4 border-t border-slate-100 dark:border-navy-800/80 flex items-center justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center space-x-1 text-xs font-semibold text-gold-600 dark:text-gold-400 group-hover:underline focus:outline-none"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <div className="flex items-center space-x-2">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-gold-500 dark:hover:text-gold-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                      title="Live Demo"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {project.reportUrl && (
                    <a
                      href={project.reportUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-gold-500 dark:hover:text-gold-400 hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
                      title="View Report"
                      aria-label={`View report for ${project.title}`}
                    >
                      <FileText className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
