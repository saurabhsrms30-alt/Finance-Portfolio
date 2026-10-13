import React from 'react';
import { LEADERSHIP_DATA } from '../content/data';
import { Crown, Calendar, CheckCircle2, Users, Building, Sparkles } from 'lucide-react';

export const Leadership: React.FC = () => {
  return (
    <section
      id="leadership"
      className="py-16 md:py-24 bg-slate-100/60 dark:bg-navy-900/40 relative border-t border-slate-200/80 dark:border-navy-800/80"
      aria-label="Leadership and Campus Initiatives"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-semibold bg-gold-500/10 text-gold-600 dark:text-gold-400 border border-gold-500/20 font-mono uppercase tracking-wider">
            <Crown className="w-3.5 h-3.5" />
            <span>Governance & Student Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 dark:text-slate-100">
            Leadership & Campus Activities
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full" />
        </div>

        {/* Feature Leadership Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200 dark:border-navy-800 shadow-xl relative overflow-hidden">
          
          {/* Subtle gold corner banner */}
          <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-gold-500/15 via-transparent to-transparent pointer-events-none" />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-navy-800">
            <div className="flex items-start space-x-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-br from-gold-400/20 to-gold-600/20 border border-gold-500/30 text-gold-500 flex-shrink-0">
                <Crown className="w-7 h-7" />
              </div>
              <div>
                <span className="inline-flex items-center text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {LEADERSHIP_DATA.tenure}
                </span>
                <h3 className="font-serif text-2xl font-bold text-navy-950 dark:text-slate-100">
                  {LEADERSHIP_DATA.role}
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1.5 mt-0.5">
                  <Building className="w-3.5 h-3.5 text-gold-500" />
                  {LEADERSHIP_DATA.organization}
                </p>
              </div>
            </div>

            <div className="flex items-center text-xs font-mono text-slate-500 dark:text-slate-400 self-start sm:self-center bg-slate-50 dark:bg-navy-950 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-navy-800">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-gold-500" />
              <span>{LEADERSHIP_DATA.period}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-serif">
            {LEADERSHIP_DATA.description}
          </p>

          {/* Key Leadership Responsibilities */}
          <div className="mt-6 pt-5 border-t border-slate-100 dark:border-navy-800/80">
            <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-gold-400 mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Key Mandates & Stakeholder Engagements:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {LEADERSHIP_DATA.responsibilities.map((resp, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/60 dark:border-navy-800/60"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {resp}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
