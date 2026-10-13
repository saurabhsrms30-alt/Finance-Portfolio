import React from 'react';
import { EXPERIENCE_DATA } from '../content/data';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-navy-900/40 relative border-t border-slate-200/80 dark:border-navy-800/80"
      aria-label="Professional Experience and Internships"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Internships & Corporate Exposure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Hands-on research and analytical experience across financial brokerage services and enterprise retail operations.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-8">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 shadow-md hover:shadow-xl hover:border-gold-500/40 transition-all duration-300"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-navy-800">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-serif text-2xl font-bold text-navy-950 dark:text-slate-100">
                      {exp.role}
                    </h3>
                    <span className="text-gold-500 font-bold">@</span>
                    <span className="text-lg font-semibold text-slate-800 dark:text-gold-300 flex items-center gap-1.5">
                      <Building2 className="w-4 h-4 text-gold-500" />
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1.5 text-gold-600 dark:text-gold-400 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Focus Badge */}
                <div className="self-start md:self-auto">
                  <span className="inline-flex items-center text-xs font-mono font-semibold px-3 py-1 rounded-full bg-navy-900/5 dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-navy-700">
                    {exp.badge}
                  </span>
                </div>
              </div>

              {/* Core Description */}
              <p className="mt-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                {exp.description}
              </p>

              {/* Deliverables / Findings */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-gold-400">
                  Key Deliverables & Analytical Insights:
                </h4>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {exp.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applied Skills Tags */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-navy-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-slate-400 mr-2">Skills Applied:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-navy-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-navy-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
