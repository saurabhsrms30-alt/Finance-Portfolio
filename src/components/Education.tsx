import React from 'react';
import { EDUCATION_DATA } from '../content/data';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 relative overflow-hidden"
      aria-label="Education History"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Progression</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Education History
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl">
            Strong academic foundation anchored by a specialized MBA in Applied Finance (PwC Program) and undergraduate business administration.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gold-500/30 dark:border-navy-700 ml-4 md:ml-32 space-y-12">
          {EDUCATION_DATA.map((item, index) => (
            <div
              key={index}
              className="relative pl-6 md:pl-8 group"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-navy-950 border-2 border-gold-500 group-hover:scale-125 group-hover:border-emerald-400 transition-all duration-300 shadow-sm shadow-gold-500/50">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 group-hover:bg-emerald-400 m-auto mt-0.5" />
              </div>

              {/* Desktop Period Badge (Left Offset) */}
              <div className="hidden md:block absolute -left-32 top-1 text-right w-24">
                <span className="font-mono text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-gold-400 transition-colors">
                  {item.period}
                </span>
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200 dark:border-navy-800 shadow-md group-hover:shadow-lg group-hover:border-gold-500/40 dark:group-hover:border-gold-500/40 transition-all duration-300">
                
                {/* Header Row: Title & Score Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-navy-800">
                  <div>
                    {/* Mobile Period Indicator */}
                    <div className="md:hidden flex items-center space-x-1.5 text-xs font-mono text-gold-500 mb-1">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </div>

                    <h3 className="font-serif text-lg sm:text-xl font-bold text-navy-950 dark:text-slate-100 group-hover:text-gold-500 dark:group-hover:text-gold-400 transition-colors">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                      {item.institution}
                    </p>
                  </div>

                  {/* Score Pill */}
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    {item.badge && (
                      <span className="inline-flex items-center text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/30">
                        {item.badge}
                      </span>
                    )}
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <Award className="w-3.5 h-3.5" />
                      <span>{item.scoreType}: {item.score}</span>
                    </span>
                  </div>
                </div>

                {/* Location & Details */}
                <div className="flex items-center text-xs text-slate-500 dark:text-slate-400 space-x-2 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-gold-500" />
                  <span>{item.location}</span>
                </div>

                {/* Highlights List */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {item.highlights.map((point, hIdx) => (
                      <li key={hIdx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
